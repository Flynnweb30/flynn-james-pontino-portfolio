/**
 * Flynn James SDR Portfolio — app.js v13
 * Self-contained analytics, navigation, tracking, modal, toast, and EmailJS helpers.
 * No external dependency is required other than EmailJS, which is loaded on demand.
 */

'use strict';

/* ========================================================================== */
/* CONFIGURATION                                                              */
/* ========================================================================== */

const ANALYTICS_CONFIG = {
  GA4_ID: 'G-WNF4GDZVK5',
  ENABLED: true,
  DEBUG: false,
  DELAY_MS: 2000,
};

const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'crekfvN6H352DXAfx',
  SERVICE_ID: 'service_av4pfmh',
  TEMPLATE_ID: 'template_dhede6o',
  TO_EMAIL: 'va.flynnjames@gmail.com',
};

/* ========================================================================== */
/* ANALYTICS                                                                  */
/* ========================================================================== */

/** Load Google Analytics 4 after the page has had time to prioritize paint. */
function initAnalytics() {
  if (!ANALYTICS_CONFIG.ENABLED) return;
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS_CONFIG.GA4_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GA4_ID);
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

/** Track a GA4 event when analytics is enabled and ready. */
function trackEvent(eventName, eventParams = {}) {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  if (ANALYTICS_CONFIG.DEBUG) {
    console.debug('[GA4]', eventName, eventParams);
    return;
  }
  window.gtag('event', eventName, eventParams);
}

/** Track a virtual page view for history-based navigation. */
function trackPageView(pageTitle, pagePath) {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  const path = pagePath || window.location.pathname;
  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: path,
  });
}

/** Create a debounced function while preserving the original this context. */
function debounce(fn, delay) {
  let timer = null;
  return function debounced(...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ========================================================================== */
/* DOM INITIALIZATION                                                         */
/* ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------ */
  /* 1. Load EmailJS                                                        */
  /* ------------------------------------------------------------------------ */
  if (!document.querySelector('script[data-emailjs-loader]')) {
    const emailScript = document.createElement('script');
    emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    emailScript.defer = true;
    emailScript.setAttribute('data-emailjs-loader', 'true');
    emailScript.onload = () => {
      if (typeof window.emailjs !== 'undefined') {
        window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✅ EmailJS initialized');
      }
    };
    emailScript.onerror = () => console.error('EmailJS failed to load.');
    document.head.appendChild(emailScript);
  }

  /* ------------------------------------------------------------------------ */
  /* 2. Mobile Navigation                                                     */
  /* ------------------------------------------------------------------------ */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  const closeMobileNav = () => {
    if (!navToggle || !navMenu) return;
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.classList.contains('open')) return;
      const target = event.target;
      if (target instanceof Node && !document.querySelector('.navbar')?.contains(target)) {
        closeMobileNav();
      }
    });
  }

  /* ------------------------------------------------------------------------ */
  /* 3. Mobile Dropdown Toggle                                                */
  /* ------------------------------------------------------------------------ */
  const dropdowns = [...document.querySelectorAll('.nav-dropdown')];
  const handleDropdowns = () => {
    if (window.innerWidth <= 768) {
      if (window._dropdownsAttached) return;
      dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          dropdown.classList.toggle('open');
        });
      });
      window._dropdownsAttached = true;
    } else {
      dropdowns.forEach((dropdown) => dropdown.classList.remove('open'));
    }
  };

  handleDropdowns();
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) dropdowns.forEach((dropdown) => dropdown.classList.remove('open'));
  }, 100), { passive: true });

  /* ------------------------------------------------------------------------ */
  /* 4. Navbar Scroll Effect                                                   */
  /* ------------------------------------------------------------------------ */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleNavbarScroll = debounce(() => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, 50);
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  }

  /* ------------------------------------------------------------------------ */
  /* 5. Scroll Reveal Animations                                               */
  /* ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('active'));
  }

  /* ------------------------------------------------------------------------ */
  /* 6. Click Tracking — single delegated listener                            */
  /* ------------------------------------------------------------------------ */
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a,button,[data-track-click]') : null;
    if (!target) return;

    const tracked = target.closest('[data-track-click]');
    if (tracked) {
      const eventName = tracked.getAttribute('data-track-click');
      if (eventName) {
        trackEvent(eventName, {
          element_type: tracked.tagName.toLowerCase(),
          element_text: (tracked.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50),
          href: tracked instanceof HTMLAnchorElement ? tracked.href : '',
        });
      }
    }

    if (target instanceof HTMLAnchorElement) {
      if (target.target === '_blank') trackEvent('external_link_click', { url: target.href });
      if (target.href.startsWith('mailto:')) trackEvent('email_click', { email: target.href.replace(/^mailto:/, '') });
      if (target.href.startsWith('tel:')) trackEvent('phone_click', { phone: target.href.replace(/^tel:/, '') });
    }
  });

  /* ------------------------------------------------------------------------ */
  /* 7. Smooth Scroll for Anchor Links                                        */
  /* ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState({}, '', href);
    });
  });

  /* ------------------------------------------------------------------------ */
  /* 8. Form Submission — EmailJS                                             */
  /* ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formElement = event.currentTarget;
      if (!(formElement instanceof HTMLFormElement)) return;

      const values = Object.fromEntries(new FormData(formElement).entries());
      const name = String(values.name || '').trim();
      const email = String(values.email || '').trim();
      const company = String(values.company || '').trim();
      const phone = String(values.phone || '').trim();
      const need = String(values.need || values.service || '').trim();
      const message = String(values.message || '').trim();
      const submitButton = formElement.querySelector('button[type="submit"]');
      const originalText = submitButton ? submitButton.textContent : '';

      if (!name || !email || !message) {
        window.showToast?.('❌ Please complete your name, email, and message.', true);
        return;
      }

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending... ⏳';
      }

      try {
        if (typeof window.emailjs === 'undefined') throw new Error('EmailJS not loaded yet');
        await window.emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
          name,
          email,
          company,
          phone,
          need,
          message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          reply_to: email,
        });
        trackEvent('contact_form_submit', { need, has_phone: Boolean(phone) });
        window.showToast?.('🚀 Message sent! Flynn will follow up within 24 hours.');
        formElement.reset();
      } catch (error) {
        console.error('EmailJS submission error:', error);
        trackEvent('contact_form_error', { error_message: error instanceof Error ? error.message : String(error) });
        window.showToast?.('❌ Something went wrong. Please try again or email directly.', true);
      } finally {
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
          submitButton.textContent = originalText || 'Send Message';
        }
      }
    });
  });

  /* ------------------------------------------------------------------------ */
  /* 9. Toast System                                                           */
  /* ------------------------------------------------------------------------ */
  const toast = document.querySelector('[data-toast]');
  let toastTimeout = null;
  const showToast = (msg, isError = false) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    toast.classList.toggle('error', isError);
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 5000);
  };
  window.showToast = showToast;

  /* ------------------------------------------------------------------------ */
  /* 10. Dynamic Footer Year                                                   */
  /* ------------------------------------------------------------------------ */
  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll('.footer-copy').forEach((element) => {
    element.textContent = element.textContent.replace(/\b\d{4}\b/, currentYear);
  });

  /* ------------------------------------------------------------------------ */
  /* 11. Scroll Depth Tracking                                                 */
  /* ------------------------------------------------------------------------ */
  const handleScrollDepth = debounce(() => {
    const denominator = document.documentElement.scrollHeight - window.innerHeight;
    if (denominator <= 0) return;
    const scrollPercent = (window.scrollY / denominator) * 100;
    const milestones = [25, 50, 75, 95];
    milestones.forEach((milestone) => {
      const flag = `_scrolled${milestone}`;
      if (scrollPercent >= milestone && !window[flag]) {
        window[flag] = true;
        trackEvent('scroll_depth', { percent: milestone });
      }
    });
  }, 200);
  window.addEventListener('scroll', handleScrollDepth, { passive: true });

  /* ------------------------------------------------------------------------ */
  /* 12. Time on Page Tracking                                                 */
  /* ------------------------------------------------------------------------ */
  window.setTimeout(() => trackEvent('time_on_page_30_seconds'), 30000);
  window.setTimeout(() => trackEvent('time_on_page_60_seconds'), 60000);

  /* ------------------------------------------------------------------------ */
  /* 13. Modal Handling                                                        */
  /* ------------------------------------------------------------------------ */
  const openButtons = document.querySelectorAll('[data-open-inquiry]');
  const overlays = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  const closeModal = (modal) => {
    modal?.classList.remove('active');
    if (![...overlays].some((overlay) => overlay.classList.contains('active'))) document.body.style.overflow = '';
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const href = button.getAttribute('href') || button.getAttribute('data-open-inquiry');
      const modal = href ? document.querySelector(href) : document.querySelector('.modal-overlay');
      if (!modal) return;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      trackEvent('inquiry_modal_open');
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => closeModal(button.closest('.modal-overlay')));
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeModal(overlay);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    overlays.forEach((overlay) => overlay.classList.remove('active'));
    document.body.style.overflow = '';
  });

  /* ------------------------------------------------------------------------ */
  /* 14. Final Log                                                             */
  /* ------------------------------------------------------------------------ */
  console.log('🚀 Flynn James Portfolio — Optimized & Loaded');
});

/* ========================================================================== */
/* POST-LOAD ANALYTICS                                                        */
/* ========================================================================== */

if (ANALYTICS_CONFIG.ENABLED) {
  window.setTimeout(initAnalytics, ANALYTICS_CONFIG.DELAY_MS);
}

/* ========================================================================== */
/* GLOBAL API                                                                 */
/* ========================================================================== */

window.initAnalytics = initAnalytics;
window.trackEvent = trackEvent;
window.trackPageView = trackPageView;
window.debounce = debounce;
