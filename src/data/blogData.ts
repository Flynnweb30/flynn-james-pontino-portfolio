export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  image: string;
  keywords: string[];
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  takeaways: string[];
}

const BLOG_IMAGE_1 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_2 = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_3 = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_4 = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_5 = 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1600&q=82';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'b2b-cold-call-opener-that-gets-to-discovery',
    title: 'The B2B Cold Call Opener That Gets to Discovery Faster',
    excerpt: 'A practical framework for earning the next 30 seconds without sounding like a script, pitch deck, or robocall.',
    category: 'Cold Calling',
    published: '2026-09-15',
    updated: '2026-09-20',
    readTime: '7 min read',
    image: BLOG_IMAGE_1,
    keywords: ['B2B cold call opener', 'cold calling script', 'SDR cold calling', 'appointment setting'],
    intro: 'The first objective of a B2B cold call is not to explain the offer. It is to earn enough attention to discover whether the prospect has a problem worth exploring. A strong opener is short, relevant, and easy for a decision-maker to answer.',
    sections: [
      {
        heading: '1. Start with context, not a monologue',
        paragraphs: [
          'A natural opener gives the prospect a reason for the call before asking for time. I prefer a simple pattern: identify the business, state why you called, then ask a low-friction question.',
          'For example: “Hey, is this [Business]? I found you while looking at companies in [market]. I’m reaching out because we help teams improve [specific outcome]. Can I ask how you’re handling that today?” The exact wording should change with the market and offer.'
        ],
      },
      {
        heading: '2. Use one problem hypothesis',
        paragraphs: [
          'The opener should contain one credible hypothesis instead of a list of features. A roofing company, SaaS founder, and managed IT provider may all need more meetings, but the evidence you use to start the conversation should be specific to the business.',
          'This makes the call feel like research rather than a generic pitch and creates a clean transition into qualification.'
        ],
        bullets: ['Reference a visible business signal.', 'Connect it to one measurable outcome.', 'Ask a question that can be answered in one sentence.'],
      },
      {
        heading: '3. Qualify before you pitch',
        paragraphs: [
          'Once the prospect engages, move toward the variables that determine whether a meeting is worth booking: current approach, volume, bottleneck, decision-maker, urgency, and fit.',
          'The goal is not to interrogate the prospect. It is to create enough context that a booked meeting has a real reason to happen.'
        ],
      },
      {
        heading: 'A simple call flow',
        paragraphs: ['Use this as a starting structure, then adapt it to your ICP and offer.'],
        bullets: ['Context → “Why I’m calling.”', 'Problem hypothesis → “What I noticed.”', 'Discovery → “How are you handling it now?”', 'Qualification → “What would you want to improve?”', 'CTA → “Would it make sense to compare notes for 15–20 minutes?”'],
      },
    ],
    takeaways: ['Keep the opener under 20–30 seconds.', 'Lead with a relevant business problem, not your company history.', 'Use the first conversation to qualify the meeting, not close the entire deal.'],
  },
  {
    slug: 'b2b-appointment-setting-kpis-that-matter',
    title: 'B2B Appointment Setting KPIs: What to Track Before You Change the Script',
    excerpt: 'A practical scorecard for separating list quality, activity, connection, qualification, show rate, and conversion problems.',
    category: 'Sales Operations',
    published: '2026-09-10',
    updated: '2026-09-20',
    readTime: '8 min read',
    image: BLOG_IMAGE_2,
    keywords: ['appointment setting KPIs', 'SDR metrics', 'sales development metrics', 'show rate'],
    intro: 'When outbound performance drops, teams often rewrite the script first. The better diagnostic step is to locate the exact stage where the funnel is leaking. A simple KPI stack makes that possible.',
    sections: [
      {
        heading: 'Track the funnel in order',
        paragraphs: ['A useful outbound dashboard follows the prospect journey instead of treating “meetings booked” as one isolated number.'],
        bullets: ['Accounts worked', 'Dials and touches', 'Connect rate', 'Conversation-to-qualified rate', 'Qualified meetings booked', 'Show rate', 'Opportunity conversion', 'Pipeline sourced'],
      },
      {
        heading: 'Activity is not the same as productivity',
        paragraphs: ['High activity can hide weak targeting. If dials rise while connect rate and qualified conversation rate fall, adding more dials may simply increase wasted effort. Review list quality, persona fit, contact data, and call timing before changing volume targets.'],
      },
      {
        heading: 'Measure meeting quality separately',
        paragraphs: ['A booked meeting is only useful when the buyer has a reason to attend and the AE has enough context to continue the conversation. Track show rate and opportunity conversion separately from bookings.'],
      },
      {
        heading: 'Use the dashboard to choose the next experiment',
        paragraphs: ['If connect rate is low, investigate data and timing. If conversations are strong but qualification is weak, revisit ICP and discovery. If bookings are healthy but show rate is weak, improve confirmation and meeting context.'],
      },
    ],
    takeaways: ['Diagnose the funnel before rewriting the script.', 'Separate meeting quantity from meeting quality.', 'Use one clear KPI problem to define each outbound experiment.'],
  },
  {
    slug: 'seven-touch-b2b-outbound-cadence',
    title: 'A Practical 7-Touch B2B Outbound Cadence for Busy Decision-Makers',
    excerpt: 'How to coordinate calls, email, LinkedIn, and follow-up without creating a noisy prospect experience.',
    category: 'Outbound Strategy',
    published: '2026-09-05',
    updated: '2026-09-20',
    readTime: '6 min read',
    image: BLOG_IMAGE_3,
    keywords: ['B2B outbound cadence', '7 touch cadence', 'sales outreach sequence', 'SDR cadence'],
    intro: 'A cadence works when every touch has a job. Instead of repeating the same pitch seven times, use different touches to establish context, create relevance, answer objections, and make the next step easy.',
    sections: [
      {
        heading: 'Touch 1 — Call with a clear hypothesis',
        paragraphs: ['Lead with the business problem you believe is relevant. If there is no answer, leave a short voicemail only when it adds useful context.'],
      },
      {
        heading: 'Touch 2 — Short email',
        paragraphs: ['Keep the email focused on the problem and outcome. Avoid copying a long sales page into the inbox.'],
      },
      {
        heading: 'Touch 3 — Second call',
        paragraphs: ['Change the angle slightly. Reference a common pattern in the prospect’s industry or role instead of repeating the first opener.'],
      },
      {
        heading: 'Touch 4 — LinkedIn touch',
        paragraphs: ['Use LinkedIn as context, not another pitch channel. A relevant interaction can support recognition before the next call.'],
      },
      {
        heading: 'Touch 5 — Proof or insight',
        paragraphs: ['Share one useful observation, case study point, or benchmark connected to the problem.'],
      },
      {
        heading: 'Touch 6 — Direct qualification call',
        paragraphs: ['Ask whether the problem is active, what they are doing today, and whether it is worth a short working session.'],
      },
      {
        heading: 'Touch 7 — Close the loop',
        paragraphs: ['Give the prospect a simple choice: continue the conversation, revisit later, or close the loop. Respecting the answer protects list quality and future opportunities.'],
      },
    ],
    takeaways: ['Every touch should add new context.', 'Coordinate channels instead of duplicating messages.', 'A clean close-the-loop step keeps your CRM and future outreach healthier.'],
  },
  {
    slug: 'why-qualified-meetings-no-show',
    title: 'Why Qualified B2B Meetings No-Show — and What an SDR Can Fix',
    excerpt: 'Show rate is often a handoff problem. Here are the practical points an SDR can control before the calendar invite is sent.',
    category: 'Meeting Quality',
    published: '2026-08-29',
    updated: '2026-09-20',
    readTime: '6 min read',
    image: BLOG_IMAGE_4,
    keywords: ['B2B meeting show rate', 'appointment show rate', 'SDR handoff', 'qualified meetings'],
    intro: 'A no-show is not always a prospect problem. The SDR controls much of the context that determines whether the meeting feels useful enough to protect on a busy calendar.',
    sections: [
      {
        heading: 'Confirm the reason, not just the time',
        paragraphs: ['A calendar invite that only says “sales demo” creates weak commitment. The invite should reflect the prospect’s problem and the outcome they agreed to explore.'],
      },
      {
        heading: 'Capture the handoff in the CRM',
        paragraphs: ['Give the closer a concise record: current approach, pain point, business impact, decision process, relevant stakeholders, and agreed next step. The prospect should not have to restart the conversation.'],
      },
      {
        heading: 'Use a useful reminder',
        paragraphs: ['A reminder should reinforce the reason for the meeting and make rescheduling easy. Avoid generic “just following up” language.'],
      },
      {
        heading: 'Measure show rate by source and rep',
        paragraphs: ['If one list, offer, or campaign has materially different attendance, inspect the upstream qualification and expectation-setting rather than treating every no-show the same.'],
      },
    ],
    takeaways: ['Sell the meeting outcome, not the calendar slot.', 'Make the AE handoff useful enough to preserve context.', 'Review show rate by campaign and source before changing the whole process.'],
  },
  {
    slug: 'how-to-hire-a-b2b-appointment-setter',
    title: 'How to Hire a B2B Appointment Setter Without Guessing',
    excerpt: 'A founder-friendly checklist for evaluating outbound skill, qualification quality, CRM discipline, and communication fit.',
    category: 'Hiring & Enablement',
    published: '2026-08-20',
    updated: '2026-09-20',
    readTime: '7 min read',
    image: BLOG_IMAGE_5,
    keywords: ['hire B2B appointment setter', 'hire SDR', 'appointment setter interview', 'outbound sales hiring'],
    intro: 'A strong appointment setter is more than someone who can make a high number of calls. The role sits between targeting, conversation quality, qualification, CRM discipline, and the handoff to the closer.',
    sections: [
      {
        heading: 'Look for evidence of the full workflow',
        paragraphs: ['Ask candidates to explain how they research accounts, open calls, handle objections, qualify, book, confirm, and document meetings. A single call recording rarely shows the whole operating system.'],
      },
      {
        heading: 'Test judgment, not memorization',
        paragraphs: ['Give the candidate a realistic prospect scenario and ask what they would do next. Listen for how they prioritize fit, relevance, timing, and buyer context.'],
      },
      {
        heading: 'Define success before the first day',
        paragraphs: ['Agree on activity expectations, qualified-meeting criteria, show-rate expectations, CRM standards, feedback cadence, and the definition of a good handoff.'],
      },
      {
        heading: 'Start with a measurable pilot',
        paragraphs: ['A short paid pilot can reveal call quality, coachability, consistency, and data discipline better than an interview alone. Keep the criteria documented so both sides know how the pilot will be evaluated.'],
      },
    ],
    takeaways: ['Evaluate the entire outbound workflow, not just call confidence.', 'Use realistic role-play and live feedback.', 'Define qualified-meeting criteria before measuring performance.'],
  },
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);
