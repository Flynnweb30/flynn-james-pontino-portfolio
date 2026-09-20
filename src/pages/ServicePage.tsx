import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceFAQ } from '../components/ServiceFAQ';
import { RelatedServices } from '../components/RelatedServices';
import { Button } from '../components/Button';
import { SERVICE_PAGES, ServicePage as ServicePageData } from '../data/servicePages';
import { SITE_URL } from '../hooks/useSEO';

interface ServicePageProps {
  service: ServicePageData;
  onOpenContact: (serviceName?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onOpenContact, onNavigateService }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/${service.slug}#service`,
          name: service.h1,
          description: service.description,
          url: `${SITE_URL}/services/${service.slug}`,
          provider: {
            '@type': 'Person',
            name: 'Flynn James Q. Pontino',
            url: `${SITE_URL}/`,
          },
          areaServed: service.targetMarkets.map((name) => ({ '@type': 'Country', name })),
          serviceType: service.title,
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/services/${service.slug}#faq`,
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-page-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => script.remove();
  }, [service]);

  return (
    <>
      <PageHeader
        index="03"
        eyebrow={service.badge}
        title={service.h1}
        titleAccent={service.tagline}
        description={service.intro}
        photoClass="bg-photo-services"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <article className="lg:col-span-8 min-w-0">
            <SectionHeading index="03.2" eyebrow="Service overview" title="A practical outbound system built" titleAccent="around qualified pipeline." />

            <div className="mt-8 space-y-6 text-[15px] sm:text-[15.5px] text-slate-300 leading-[1.9]">
              {service.seoContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/70 rounded-xl overflow-hidden border border-slate-800/70">
              <div className="bg-[#0b0f19] p-6">
                <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">Benchmark</div>
                <div className="text-[14px] text-amber-400 font-semibold">{service.metrics}</div>
              </div>
              <div className="bg-[#0b0f19] p-6">
                <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">Typical output</div>
                <div className="text-[13.5px] text-slate-200 leading-relaxed">{service.deliverableSummary}</div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm p-6">
                <div className="text-[10.5px] font-mono text-amber-400 uppercase tracking-wider mb-4">Included scope</div>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-slate-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-[#0b0f19]/90 p-6">
                <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-3">Markets</div>
                <div className="flex flex-wrap gap-2">
                  {service.targetMarkets.map((market) => (
                    <span key={market} className="px-2.5 py-1 text-[11px] text-slate-300 bg-slate-900 border border-slate-800 rounded-full">
                      {market}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-3">Tools</div>
                <div className="flex flex-wrap gap-2">
                  {service.toolsUsed.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 text-[11px] text-slate-400 bg-slate-900 border border-slate-800 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-6">
                <h2 className="text-lg font-bold text-white">Ready to turn this into pipeline?</h2>
                <p className="mt-2 text-[13px] text-slate-300 leading-relaxed">Tell me your target market, offer, and current outbound bottleneck. I’ll help map the next practical step.</p>
                <Button variant="primary" onClick={() => onOpenContact(service.title)} className="w-full mt-5" withArrow>
                  Request a proposal
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-callcenter">
        <SectionHeading index="03.3" eyebrow="How it works" title="Designed for clear execution" titleAccent="and measurable handoffs." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {[
            ['01', 'Define the target', 'Align the ICP, buyer, geography, offer, qualification rules, and desired sales outcome.'],
            ['02', 'Run the motion', 'Execute the agreed outreach and follow-up workflow while keeping CRM records clean and useful.'],
            ['03', 'Review the signal', 'Use conversations, objections, meetings, and pipeline outcomes to improve the next campaign cycle.'],
          ].map(([step, title, text]) => (
            <motion.div key={step} whileHover={{ y: -3 }} className="rounded-xl border border-slate-700/70 bg-slate-950/70 backdrop-blur-sm p-6">
              <span className="text-[11px] font-mono text-amber-400">{step}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[13.5px] text-slate-400 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => onOpenContact(service.title)} withArrow>Talk about this service</Button>
          <Button variant="secondary" onClick={() => onNavigateService('appointment-setting')}>Explore appointment setting</Button>
        </div>
      </Section>

      <ServiceFAQ faqs={service.faqs} serviceName={service.title} />
      <RelatedServices slugs={service.relatedSlugs} onNavigate={onNavigateService} />
    </>
  );
};
