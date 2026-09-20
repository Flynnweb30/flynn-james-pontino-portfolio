import { ServiceItem } from '../types';

export interface ServicePage extends ServiceItem {
  slug: string;
  h1: string;
  intro: string;
  longDescription: string;
  targetMarkets: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  seoContent: string[];
}

export const SERVICE_PAGES: Record<string, ServicePage> = {
  'appointment-setting': {
    slug: 'appointment-setting',
    id: 'appointment-setting',
    h1: 'B2B Appointment Setting Services',
    title: 'B2B Appointment Setting',
    tagline: 'Book qualified decision-maker meetings directly on your AE calendars',
    badge: 'Core Service',
    intro: 'I book 30+ qualified B2B appointments every month for SaaS, IT, agency, and professional services teams — with a 70%+ show-up rate because every meeting is confirmed, briefed, and value-aligned.',
    description: 'Done-for-you B2B appointment setting that puts your Account Executives in front of verified decision-makers.',
    longDescription: 'Most SDR teams book meetings that never convert. I book appointments that do. Every call I schedule begins with strict BANT qualification, direct calendar booking, and a pre-call briefing document so your AE enters the room fully armed. I handle the cold outreach, the objection handling, the confirmation sequence, and the CRM hygiene — you focus on closing.',
    metrics: '30+ qualified meetings/month · 70%+ show-up rate',
    features: [
      'Strict BANT/MEDDIC qualification before booking',
      'Direct calendar integration (Calendly, HubSpot Meetings)',
      '24-hour pre-call briefing reminders',
      '1-hour confirmation SMS/email nudges',
      'Detailed discovery notes and pain quotes sent to AE',
      'Instant rescheduling workflows for conflicts',
    ],
    toolsUsed: ['Calendly', 'HubSpot', 'Salesforce', 'Chili Piper'],
    deliverableSummary: 'Confirmed calendar events with full pre-call context and BANT scorecards.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'New Zealand', 'Singapore'],
    faqs: [
      {
        q: 'How many appointment setting meetings can you book per month?',
        a: 'Typically 25–35 qualified meetings per month depending on your ICP and target market. For enterprise SaaS with long sales cycles, 15–20 high-quality meetings; for SMB-focused offers, 40+.',
      },
      {
        q: 'What happens if a prospect no-shows?',
        a: 'I run a 24-hour and 1-hour confirmation sequence to protect attendance. If a prospect no-shows, I immediately re-engage and either reschedule or disqualify. My show-up rate consistently stays above 70%.',
      },
      {
        q: 'Do you book directly on our AE calendars?',
        a: 'Yes. I integrate with Calendly, HubSpot Meetings, Salesforce, or Google Calendar and book directly into your AE availability — no double-booking, no manual coordination.',
      },
      {
        q: 'How do you qualify prospects before booking?',
        a: 'Every prospect passes through a BANT qualification framework (Budget, Authority, Need, Timeline). If they don\'t meet your minimum criteria, they don\'t get a meeting. I never pad pipeline with unqualified leads.',
      },
      {
        q: 'Which markets do you cover for appointment setting?',
        a: 'US, UK, ANZ, Canada, and Singapore time zones. I adjust calling hours to match peak buyer windows in each market.',
      },
    ],
    relatedSlugs: ['cold-calling', 'lead-generation', 'sdr-services', 'sales-development'],
    seoContent: [
      "B2B appointment setting is most useful when a sales team has a strong offer but needs more qualified conversations with the right decision-makers. I build outbound appointment-setting programs around your ideal customer profile, buyer role, geography, and sales process. Instead of treating a booked meeting as the finish line, I treat it as the start of a clean handoff. That means researching the account, reaching the right person, opening a relevant conversation, qualifying the opportunity, and confirming the meeting with enough context for the prospect and Account Executive to know why the conversation is worth their time.",
      "The workflow can include cold calling, email, LinkedIn touches, list research, qualification, calendar booking, reminders, rescheduling, and CRM updates. I can work inside an existing HubSpot, Salesforce, Pipedrive, or scheduling workflow rather than forcing a new stack on the team. Qualification criteria are agreed before outreach begins, including the problems that matter, the roles that can buy, the markets to target, and the situations that should be disqualified. This keeps activity tied to pipeline quality rather than simply increasing calendar volume.",
      "A strong appointment-setting campaign also needs a practical follow-up system. Prospects can be interested without being ready to book immediately, so callbacks, email follow-ups, LinkedIn touches, and rescheduling are tracked as part of the same process. Before a meeting is handed to an AE, the CRM record can include the prospect's role, business context, stated pain points, current approach, timing, and other qualification notes. The goal is to give the closer a useful starting point instead of making them rediscover the opportunity.",
      "This service is suited to B2B SaaS companies, agencies, IT providers, professional services firms, and other businesses with a clearly defined buyer. Campaigns can be aligned to US, UK, Australian, New Zealand, Canadian, or Singaporean working hours. I can support a focused pilot around one segment or operate as an ongoing outbound resource. If you already have a sales team, I can plug into the existing process; if you are building outbound from scratch, I can help establish the basic targeting, call approach, qualification flow, and reporting rhythm needed to make the campaign measurable.",
      "The most useful starting point is a short review of your offer, ICP, current list quality, calendar capacity, and sales conversion process. From there, we can define what a qualified meeting means, how it should be recorded, and which activity metrics actually matter. If the offer and target market are a fit, the next step is a focused campaign designed to create conversations your sales team can genuinely work.",
      "A qualified meeting should also be easy for the AE to act on. I use the agreed qualification framework to separate curiosity from a real sales opportunity, and I keep the handoff concise enough to be useful before the call. Where a prospect is not ready, the record can remain in a structured follow-up path instead of disappearing after one attempt. That approach gives the campaign a second benefit beyond booked meetings: it creates a clearer picture of which buyer profiles, messages, and problems are generating the strongest conversations. Those insights can feed back into list selection, scripts, and future campaigns.",
      "For teams that already have closers and calendar capacity, this can function as a dedicated top-of-funnel layer. For smaller companies, it can provide the outbound discipline needed to create a repeatable first pipeline channel. Either way, the scope is built around the sales process you already use, with clear definitions for qualified, booked, attended, rescheduled, and disqualified outcomes. That makes performance easier to review with a founder, sales manager, or revenue leader without relying on vague activity reports."
    ],
  },

  'cold-calling': {
    slug: 'cold-calling',
    id: 'cold-calling',
    h1: 'High-Volume Cold Calling Services',
    title: 'Cold Calling',
    tagline: '150+ dials per day with consultative, permission-based phone openers',
    badge: 'Signature Service',
    intro: 'I average 150+ cold dials per day and hold natural, problem-centric conversations that bypass gatekeepers and reach C-level decision-makers in under seven seconds.',
    description: 'High-volume B2B cold calling backed by 11+ years of phone experience.',
    longDescription: 'Cold calling isn\'t dead — bad cold calling is. My approach uses permission-based openers, pattern interrupts, and consultative diagnostic questioning to disarm prospect defensiveness within seconds. I don\'t read scripts; I have conversations. Then I qualify hard and book the meeting or disqualify fast.',
    metrics: '150+ dials/day · 12–18% connect-to-conversation rate',
    features: [
      'Permission-based cold openers that gain 30 seconds of attention',
      'Instant objection pivoting ("send an email", "no budget", "not interested")',
      'Power dialer mastery (Aircall, PhoneBurner, Five9, RingCentral)',
      'Gatekeeper navigation and warm transfers',
      'Live call recordings and disposition notes in CRM',
      'Callback scheduling and stale lead re-engagement',
    ],
    toolsUsed: ['Aircall', 'RingCentral', 'Five9', 'PhoneBurner', 'Kixie'],
    deliverableSummary: '150+ daily outbound calls logged with recordings, dispositions, and callbacks.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'How many cold calls do you make per day?',
        a: '150+ dials per day as a baseline. For high-velocity campaigns, 250–500 dials per day is achievable with the right power dialer.',
      },
      {
        q: 'Can you handle gatekeepers and executive assistants?',
        a: 'Yes. Gatekeepers are often the best source of internal intelligence. I treat them with respect, ask direct diagnostic questions, and use conversational authority to earn warm transfers.',
      },
      {
        q: 'Do you cold call internationally?',
        a: 'Yes — US, UK, Australia, Canada, and Singapore. I adjust my accent-adaptation, calling hours, and objection handling based on regional buying culture.',
      },
      {
        q: 'What is your typical cold call connect-to-meeting rate?',
        a: '12–18% of live conversations convert to a booked meeting. For high-intent lists with warm signals, that can reach 22%+.',
      },
      {
        q: 'What tools do you use for cold calling?',
        a: 'Aircall, RingCentral, Five9, PhoneBurner, and Kixie. I adapt to whatever power dialer your team uses.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'lead-generation', 'sales-development'],
    seoContent: [
      "B2B cold calling works best when the call feels like a relevant business conversation rather than a rehearsed pitch. My cold-calling service is built around disciplined volume, strong list quality, concise openers, active listening, and fast qualification. I can handle high daily dial volume while keeping the conversation natural, with the goal of reaching the correct decision-maker and finding out whether there is a credible reason to continue. The approach can be adapted for SaaS, IT, agencies, professional services, and other B2B offers where phone conversations still influence buying decisions.",
      "Before dialing, I align the campaign around the ideal customer profile, buyer role, offer, common objections, and qualification rules. This matters because volume without targeting creates activity without useful pipeline. I can work from an existing list or help refine the accounts and contacts being called. During the campaign, dispositions, callbacks, objections, and useful market feedback are captured in the CRM so the team can see what prospects are actually saying. That information can then be used to improve the opener, targeting, messaging, and follow-up sequence.",
      "The calling workflow is designed to handle the real situations that happen on outbound calls: gatekeepers, voicemail, requests to send information, timing objections, existing vendors, lack of budget, and prospects who are interested but not ready today. Rather than forcing every conversation toward a meeting, I use diagnostic questions to determine whether there is a genuine business problem, whether the contact is involved in the decision, and whether a next conversation makes sense. When there is no fit, the record can be closed cleanly instead of consuming more sales time.",
      "Cold calling can also become more effective when it is connected to email and LinkedIn touches. A prospect who does not answer can receive a relevant follow-up; a prospect who asks for information can be placed into a clear callback sequence; and a live conversation can be supported with a short written summary. I can work with common sales dialers and CRMs, including Aircall, RingCentral, Five9, PhoneBurner, Kixie, HubSpot, Salesforce, and similar platforms.",
      "The service is a practical fit for teams that already know who they want to sell to but need consistent outbound execution. Whether the objective is appointment setting, market testing, reactivation, or building a new pipeline segment, the campaign can be measured through dials, connects, conversations, qualified meetings, callbacks, and downstream conversion. If you want to test a message before scaling it, a focused pilot can provide useful call data without requiring a large technology change.",
      "Good phone outreach also produces market intelligence. Repeated objections can reveal unclear positioning, poor targeting, pricing friction, or a mismatch between the offer and the buyer's current priorities. I capture those patterns so the sales team can distinguish a rep-level issue from a broader campaign issue. This makes cold calling useful even when a prospect does not book immediately. Over time, the call notes can help refine the ICP, improve the first 10 seconds of the conversation, and create better follow-up assets for the wider sales team.",
      "The same discipline applies to follow-up. A good conversation can be lost when the next action is not recorded, so callbacks and promised emails are treated as part of the call rather than an optional extra. I can also help identify which objections deserve a reusable response and which should be treated as genuine disqualification signals. Over a campaign, this creates a practical library of buyer language that can improve future calls, emails, and sales enablement material."
    ],
  },

  'lead-generation': {
    slug: 'lead-generation',
    id: 'lead-generation',
    h1: 'B2B Lead Generation & Account Targeting',
    title: 'Lead Generation',
    tagline: 'Verified prospect lists mapped to your Ideal Customer Profile',
    badge: 'Data Foundation',
    intro: 'I build clean, verified B2B prospect lists with direct dials, validated work emails, and buying-intent signals — no bloated databases, no bounced emails, no wasted dials.',
    description: 'Laser-targeted B2B lead generation with verified contact data and intent signals.',
    longDescription: 'Every outbound campaign lives or dies on the quality of the list. I build account-based prospect lists using Apollo, LinkedIn Sales Navigator, ZoomInfo, and Clay — then enrich them with technographic, firmographic, and trigger-event signals so outreach lands at the right moment.',
    metrics: '98% data validity · <1% bounce rate target',
    features: [
      'Account-Based Marketing (ABM) list development',
      'Technographic and firmographic filtering',
      'C-suite and VP stakeholder mapping',
      'Continuous list verification and enrichment',
      'Trigger-event monitoring (funding, hiring, tool adoption)',
      'CRM-ready CSV exports with custom fields',
    ],
    toolsUsed: ['Apollo.io', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Lusha', 'Clay'],
    deliverableSummary: 'Custom prospect lists segmented by buying tier with verified direct dials and emails.',
    targetMarkets: ['United States', 'United Kingdom', 'Europe', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What is included in a lead generation engagement?',
        a: 'ICP definition, account list building, contact discovery, data enrichment, email and phone verification, and CRM-ready delivery. I can also handle the outreach itself if you need a full managed service.',
      },
      {
        q: 'How do you verify emails and phone numbers?',
        a: 'I use Apollo, Lusha, ZoomInfo, and Clay for waterfall enrichment, plus NeverBounce or ZeroBounce for email verification. My data validity target is 98% with a <1% bounce rate.',
      },
      {
        q: 'How many leads do you typically deliver?',
        a: 'Depends on your ICP. For a niche B2B SaaS targeting CTOs at Series B companies, 250–500 verified leads. For broader SMB targets, 2,000+ per month.',
      },
      {
        q: 'Can you build lists for enterprise ABM campaigns?',
        a: 'Yes. I map full buying committees (economic buyer, champion, technical evaluator, procurement) with direct contact data for each stakeholder.',
      },
      {
        q: 'How often are lists refreshed?',
        a: 'Monthly for active campaigns, or on-demand for new segments. I re-verify all contacts before every campaign launch.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'sdr-services', 'sales-development'],
    seoContent: [
      "B2B lead generation is the foundation of an outbound campaign because even a strong salesperson cannot compensate for inaccurate targeting. I build prospect lists around a clearly defined ideal customer profile, with attention to company size, industry, geography, technology, buyer role, and relevant business signals. The objective is not to create the largest database possible. It is to create a usable set of accounts and contacts that the sales team can realistically reach and qualify.",
      "The process can include account research, stakeholder mapping, contact discovery, enrichment, verification, segmentation, and CRM-ready delivery. Tools such as Apollo, LinkedIn Sales Navigator, ZoomInfo, Lusha, and Clay can be combined according to the campaign rather than used simply because they are available. Where appropriate, contacts can be checked for business email and direct-dial availability, while company records can be enriched with firmographic or technographic details. Lists can also be segmented by priority so the highest-value accounts receive the most personalized outreach.",
      "Useful lead generation should give the SDR more than a name and a phone number. I look for practical context that can improve the first conversation: hiring activity, leadership changes, technology adoption, growth signals, service gaps, market expansion, or other events that make the outreach timely. Those signals can be added as notes or fields that help the caller understand why an account is being contacted. When the list feeds an outbound sequence, this context can also support personalized email and LinkedIn messaging.",
      "Data quality is maintained as part of the campaign rather than treated as a one-time spreadsheet exercise. Records can be deduplicated, outdated contacts removed, missing fields enriched, and priority segments refreshed before launch. If the campaign changes its ICP, the list can be rebuilt around the new criteria rather than continuing to call accounts that no longer match. This creates a cleaner feedback loop between prospecting and sales results.",
      "This service is suitable for B2B SaaS, agencies, IT services, professional services, and account-based campaigns that need a dependable prospecting foundation. You can use the deliverable with your internal SDR team or combine it with my appointment-setting, cold-calling, or broader sales-development services. A useful starting point is to define the exact accounts and buyers you want, the markets you serve, the minimum qualification requirements, and the sales outcome the list is expected to support. From there, the prospect database becomes a practical sales asset rather than another spreadsheet that goes stale.",
      "I also treat list delivery as part of the sales workflow. A clean record should make it obvious who the contact is, why the account fits, what segment it belongs to, and what the rep should investigate before outreach. Where a campaign has several buyer personas, separate stakeholder groups can be mapped so the SDR is not repeatedly contacting one person while missing the wider buying committee. The result is a prospecting asset that can be reused, measured, refreshed, and connected directly to appointment setting or a broader outbound sequence.",
      "The handoff to the SDR team can be documented with clear field definitions, naming conventions, and priority rules. That reduces the common problem where a marketing list looks complete but the rep still has to spend time figuring out which contacts matter. For account-based campaigns, the same process can support multiple stakeholders per company, giving the team a fuller view of the buying group and a more deliberate way to sequence outreach."
    ],
  },

  'sdr-services': {
    slug: 'sdr-services',
    id: 'sdr-services',
    h1: 'SDR Services & Outbound Sales Support',
    title: 'SDR Services',
    tagline: 'Full-time or fractional senior SDR for B2B sales teams',
    badge: 'Team Extension',
    intro: 'I work as an embedded senior SDR for B2B teams — running cold outreach, booking qualified meetings, and managing your CRM with the discipline of a 11-year veteran.',
    description: 'Senior SDR services for SaaS, IT, agency, and professional services teams.',
    longDescription: 'Hiring and ramping a junior SDR takes 3–6 months. Bringing me on takes 48 hours. I plug into your CRM, learn your ICP, and start booking qualified meetings within a week. Available full-time, part-time, or project-based.',
    metrics: '48-hour ramp · 30+ qualified meetings/month',
    features: [
      'Full ownership of outbound prospecting pipeline',
      'Cold calling, email, and LinkedIn multi-channel outreach',
      'Strict BANT qualification on every booked meeting',
      'Complete CRM hygiene (HubSpot, Salesforce, Pipedrive)',
      'Weekly pipeline reporting and forecast visibility',
      'Optional SDR coaching and team enablement',
    ],
    toolsUsed: ['HubSpot', 'Salesforce', 'Apollo.io', 'Aircall', 'LinkedIn Sales Navigator'],
    deliverableSummary: 'Embedded senior SDR producing qualified pipeline and clean CRM data.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore', 'Global'],
    faqs: [
      {
        q: 'What is the difference between SDR services and appointment setting?',
        a: 'Appointment setting focuses specifically on booking meetings. SDR services are broader — covering cold calling, email cadences, LinkedIn outreach, list building, qualification, CRM hygiene, and pipeline reporting.',
      },
      {
        q: 'How quickly can you ramp up?',
        a: 'Within 48–72 hours I understand your ICP, value proposition, and competitive landscape. I start live outreach within the first week and typically book qualified meetings by week two.',
      },
      {
        q: 'Are you available full-time or part-time?',
        a: 'Both. I offer full-time embedded engagements, part-time contracts, and project-based sprints depending on your team\'s needs.',
      },
      {
        q: 'Do you work with our existing CRM and tools?',
        a: 'Yes. I adapt to HubSpot, Salesforce, Pipedrive, GoHighLevel, Outreach, Salesloft, Apollo, and any standard B2B sales stack.',
      },
      {
        q: 'What markets and time zones do you cover?',
        a: 'US (all four mainland time zones), UK/EU, Australia (AEST/AEDT), New Zealand, and Singapore. I align working hours to your buyers\' peak activity windows.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'sales-coaching'],
    seoContent: [
      "Fractional or embedded SDR support can give a B2B sales team experienced outbound execution without requiring a large change to its existing process. I work inside the team's workflow, learning the ICP, offer, competitive landscape, CRM stages, qualification rules, and messaging before taking ownership of agreed prospecting activities. The role can include cold calling, email follow-up, LinkedIn outreach, qualification, appointment setting, CRM hygiene, reporting, and re-engagement of older opportunities.",
      "The value of an embedded SDR is consistency. Instead of separating list building, calling, follow-up, and CRM administration into disconnected tasks, the activity is managed as one prospecting motion. Accounts can be researched before outreach, conversations can be documented immediately, callbacks can be scheduled, and qualified meetings can be handed to the appropriate closer with useful context. This creates a clearer operating rhythm for the sales team and makes it easier to see where prospects are moving or getting stuck.",
      "I can adapt to established sales stacks including HubSpot, Salesforce, Pipedrive, GoHighLevel, Apollo, Outreach, Salesloft, and common calling platforms. The objective is to fit the current system wherever possible, not introduce unnecessary tools. Weekly reporting can cover meaningful activity such as qualified conversations, meetings, show-ups, pipeline created, objection patterns, and follow-up status. These insights can help sales leaders adjust targeting or messaging based on what is happening in the market.",
      "The engagement can be full-time, part-time, or structured as a focused outbound sprint. For a new campaign, the first stage is usually understanding the ICP, offer, buyer journey, and qualification criteria. Once those are clear, the outreach can begin with a defined list and a simple reporting cadence. For an existing campaign, I can step into the current process and concentrate on execution, follow-up, or a specific segment that needs additional coverage.",
      "This service is especially useful for SaaS, IT, marketing agencies, professional services, and other B2B businesses that have a sales offer but need more consistent top-of-funnel execution. It can also complement an internal SDR team by adding experienced coverage to a new market or helping with difficult accounts. If you are considering outsourced SDR support, the practical first step is a review of your current pipeline, target market, tools, and meeting criteria so the engagement can be scoped around the outcomes your sales team actually needs.",
      "Because the work sits close to the pipeline, the engagement can also surface practical recommendations for the sales process. If calls are producing interest but few meetings, we can inspect the opener and qualification step. If meetings are being booked but not progressing, the handoff or qualification criteria may need attention. If activity is high but conversations are low, targeting or list quality may be the constraint. This creates a feedback loop where SDR execution contributes information that sales leaders can use to improve the wider revenue motion.",
      "For teams with an existing closer or founder-led sales process, the SDR role can be scoped around the exact gap: top-of-funnel prospecting, follow-up, reactivation, appointment setting, or a new market. This keeps the engagement practical and avoids paying for activities that the team already handles well. The operating model can evolve as the campaign generates evidence about which segments and messages produce the best conversations."
    ],
  },

  'digital-marketing-appointment-setting': {
    slug: 'digital-marketing-appointment-setting',
    id: 'digital-marketing-appointment-setting',
    h1: 'Digital Marketing Appointment Setting',
    title: 'Digital Marketing Appointment Setting',
    tagline: 'Booked meetings with CMOs, marketing directors, and e-commerce brands',
    badge: 'Agency-Specialized',
    intro: 'I help digital marketing agencies, SEO firms, and web design studios fill their calendars with qualified conversations with marketing decision-makers.',
    description: 'Specialized appointment setting for digital marketing, SEO, and web design agencies.',
    longDescription: 'Selling marketing services requires a different playbook. CMOs and marketing directors get hundreds of agency pitches every month. I cut through by leading with a specific diagnostic — a website speed issue, a paid-ads waste pattern, a content gap — then scheduling a working session.',
    metrics: '25–40 agency meetings/month · 18% reply rate on multi-channel',
    features: [
      'ICP targeting for e-commerce, SaaS, and mid-market brands',
      'Diagnostic-first phone openers (site speed, ad waste, SEO gaps)',
      'Multi-channel cadence across phone, email, and LinkedIn',
      'Direct booking with agency founders or account leads',
      'Pre-call audit brief delivered to the AE',
      'Full agency-style CRM discipline',
    ],
    toolsUsed: ['HubSpot', 'Apollo.io', 'LinkedIn Sales Navigator', 'Aircall', 'Calendly'],
    deliverableSummary: 'Booked discovery calls with marketing decision-makers, complete with pre-call audit notes.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What kinds of marketing agencies do you work with?',
        a: 'SEO agencies, paid-ads agencies, web design studios, content marketing firms, and full-service B2B marketing agencies.',
      },
      {
        q: 'Who do you typically book meetings with at target companies?',
        a: 'CMOs, VPs of Marketing, Heads of Growth, Marketing Directors, E-commerce Managers, and Founders at mid-market brands.',
      },
      {
        q: 'How do you differentiate one agency from the next?',
        a: 'I lead every call with a specific diagnostic tied to your agency\'s specialty — e.g., a website speed score, a paid-ads efficiency benchmark, or a content gap analysis.',
      },
      {
        q: 'Do you offer a trial period?',
        a: 'Yes. For agency engagements I typically suggest a 30-day pilot focused on one ICP segment before committing to a longer contract.',
      },
      {
        q: 'How do you handle the "we already have an agency" objection?',
        a: 'I don\'t argue. I pivot to a diagnostic question: "That\'s great to hear. Curious — are you seeing [specific issue] on your current setup?" Nine times out of ten the answer is yes, and the conversation opens up.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'lead-generation'],
    seoContent: [
      "Digital marketing appointment setting requires more than a generic agency pitch because business owners and marketing leaders receive a steady stream of similar outreach. I help digital marketing agencies, SEO firms, web design studios, paid-media providers, and related service businesses create qualified conversations by connecting the outreach to a specific commercial issue. The first objective is to understand the agency's ideal client, strongest service, proof points, and the problems it can credibly solve.",
      "The outreach can target founders, CMOs, marketing directors, heads of growth, ecommerce leaders, or other decision-makers depending on the offer. Phone conversations can be supported by email and LinkedIn touches, while account research can surface practical triggers such as a weak website experience, expansion into a new market, hiring activity, paid-media changes, or visible gaps in search visibility. The point is not to manufacture a problem; it is to give the prospect a relevant reason to have a short conversation.",
      "For website and SEO offers, the opener can be based on a simple observation that the prospect can understand. For paid advertising, the conversation can focus on efficiency, landing-page performance, tracking, or the relationship between spend and qualified demand. For broader marketing retainers, the discussion can explore lead flow, content, conversion, or internal capacity. These diagnostic angles make the call more specific while leaving room for the prospect to explain what is actually happening inside the business.",
      "Once interest is established, I qualify for fit, decision-making involvement, business need, and timing before booking the meeting. The calendar handoff can include the prospect's current approach, stated goals, relevant website or campaign observations, and the reason they agreed to speak. This helps the agency's strategist or closer prepare for a useful discovery call rather than starting from a cold introduction.",
      "The service can be delivered as a focused pilot around one niche or expanded across multiple market segments once the messaging is proven. I can work with your existing CRM, scheduling platform, prospect database, and reporting process. If you are an agency looking to build a more predictable outbound channel, the most useful starting point is a review of your highest-value client profile, offer, proof, target geography, and the specific business problem your service is best positioned to solve. From there, the campaign can be built around conversations that have a clear commercial reason to continue.",
      "The strongest agency campaigns also protect the agency's brand. Every conversation should sound like a credible business outreach rather than a mass-produced pitch. I keep the opening direct, respectful, and specific, and I avoid making unsupported claims about a prospect's business. When a contact is interested, the handoff can preserve the context that made the conversation relevant so the agency team can continue the discussion naturally. This approach is especially useful for agencies selling higher-value retainers where the quality of the first conversation matters as much as the number of meetings booked.",
      "For agency owners, this can also reduce the pressure on founders or account strategists to spend large blocks of time prospecting. The campaign can create a consistent flow of initial conversations while the agency team concentrates on discovery, proposals, fulfillment, and client retention. Reporting can separate raw outreach from qualified conversations so the agency can see whether the channel is producing opportunities that fit its pricing, capacity, and preferred client profile."
    ],
  },

  'sales-development': {
    slug: 'sales-development',
    id: 'sales-development',
    h1: 'Sales Development & B2B Prospecting',
    title: 'Sales Development',
    tagline: 'Multi-channel prospecting that builds predictable pipeline',
    badge: 'Pipeline Engine',
    intro: 'Sales development is more than cold calling. I build multi-channel prospecting motions — phone, email, LinkedIn, and intent-based targeting — that consistently produce qualified pipeline.',
    description: 'Sales development and B2B prospecting services for SaaS, IT, and professional services.',
    longDescription: 'Predictable pipeline comes from repeatable process. I build sales development engines that combine list building, sequencing, cold calling, LinkedIn touches, and CRM reporting into a system that doesn\'t depend on luck.',
    metrics: '30+ meetings/month · $1.8M+ pipeline historically generated',
    features: [
      'ICP definition and account list building',
      '7-touch multi-channel cadence design (phone, email, LinkedIn)',
      'Email deliverability management and domain warming',
      'Intent-based targeting from ZoomInfo and Bombora signals',
      'Full pipeline reporting with weekly executive summaries',
      'CRM architecture and lifecycle stage setup',
    ],
    toolsUsed: ['Apollo.io', 'LinkedIn Sales Navigator', 'HubSpot', 'Outreach', 'Salesloft', 'ZoomInfo'],
    deliverableSummary: 'A repeatable, documented sales development motion with weekly pipeline visibility.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What is included in a sales development engagement?',
        a: 'ICP definition, list building, cadence design, cold calling, email sequencing, LinkedIn outreach, CRM hygiene, and weekly pipeline reporting. Everything needed to run a modern B2B SDR motion.',
      },
      {
        q: 'Do you build the cadences from scratch?',
        a: 'Yes. I design multi-touch sequences based on your buyer\'s actual decision journey — including the specific objections, triggers, and value props that matter to them.',
      },
      {
        q: 'How do you measure success?',
        a: 'Primary KPIs: qualified meetings booked, pipeline value created, and meeting-to-opportunity conversion. Secondary KPIs: dials, connects, reply rates, and CRM data accuracy.',
      },
      {
        q: 'Can you work alongside an existing SDR team?',
        a: 'Yes. I often work as the senior SDR on the team, taking the more complex enterprise accounts or the toughest segments while helping coach junior reps.',
      },
      {
        q: 'What makes your sales development approach different?',
        a: 'Discipline and data. I don\'t rely on tricks or gimmicks. I execute a documented process, measure what matters, and iterate based on real conversation data.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'lead-generation', 'sdr-services'],
    seoContent: [
      "Sales development becomes predictable when targeting, messaging, activity, qualification, and reporting operate as one system. I build and execute multi-channel B2B prospecting motions that combine account research, phone outreach, email, LinkedIn, qualification, follow-up, and CRM reporting. The aim is to create a repeatable process your sales team can understand and improve rather than a collection of disconnected outreach tactics.",
      "The engagement starts with the ideal customer profile and buying journey. We identify the accounts worth pursuing, the roles involved in a purchase, the triggers that indicate relevance, and the objections likely to appear. From there, a practical sequence can be built around several touches across phone, email, and LinkedIn. The messaging stays focused on the prospect's business context, while call conversations provide the fastest source of real-world feedback about what is resonating and what is not.",
      "Execution is paired with clean CRM discipline. Activities, dispositions, callbacks, qualification notes, and meeting outcomes should be recorded consistently so the campaign can be managed from evidence rather than assumptions. Weekly reporting can separate leading indicators such as connects and replies from outcome measures such as qualified meetings, opportunities, and pipeline contribution. When a segment underperforms, the data can be used to adjust the list, opener, offer, sequence, or qualification criteria.",
      "Sales development can also support a broader revenue team. I can work as an individual SDR, support an existing team, or help a sales leader establish a documented outbound playbook. That may include ICP notes, call scripts, objection responses, email frameworks, LinkedIn touch patterns, qualification scorecards, and handoff standards. The goal is to make the process easier for another rep to repeat and easier for a manager to measure.",
      "This service fits B2B SaaS, IT, agencies, professional services, and other companies where a defined market can be reached through outbound channels. It can be structured as an initial campaign sprint, an ongoing SDR engagement, or a combination of prospecting and team enablement. The right starting point is a review of your current pipeline sources, target accounts, conversion points, and sales capacity. That creates a clear baseline for deciding what should be built, what should be improved, and which outbound activities deserve the most attention.",
      "A documented sales-development system also makes testing easier. Rather than changing several variables at once, we can isolate a segment, message, call opener, or follow-up step and monitor the resulting conversation quality. The campaign can then keep what works and remove what does not. This is particularly useful for companies entering a new market because early conversations can validate whether the ICP, positioning, and outreach assumptions match the language buyers actually use. The result is a more informed outbound process that can be scaled only after the fundamentals are clear.",
      "This approach is also useful when the sales team has inconsistent execution across reps. A documented process gives managers a common reference point for targeting, messaging, qualification, and CRM hygiene. New reps can follow the same structure while experienced reps can adapt it to their accounts. Over time, the team gains a clearer record of what the market is telling them and which parts of the outbound motion deserve additional investment."
    ],
  },

  'sales-coaching': {
    slug: 'sales-coaching',
    id: 'sales-coaching',
    h1: 'Sales Coaching & SDR Team Leadership',
    title: 'Sales Coaching',
    tagline: 'Reduce ramp time by 25% and lift team quota attainment by 15%+',
    badge: 'Leadership Service',
    intro: 'As Junior Sales Team Lead at Regen Digital US, I mentor SDR teams through call shadowing, objection-handling workshops, and structured onboarding — cutting ramp time and lifting quota attainment.',
    description: 'Sales coaching and SDR team leadership for B2B outbound teams.',
    longDescription: 'Great SDRs aren\'t born — they\'re coached. I work with sales leaders to build structured onboarding programs, run call listening labs, refine objection-handling playbooks, and establish KPI pacing cadences. The result: faster ramp, higher quota attainment, and lower turnover.',
    metrics: '25% faster ramp · 15%+ team quota lift',
    features: [
      'Structured SDR onboarding program design',
      'Call listening labs and one-on-one coaching',
      'Objection-handling workshop facilitation',
      'Custom playbook development (cold call + email + LinkedIn)',
      'KPI dashboard and pacing accountability',
      'New hire shadowing and mock-call programs',
    ],
    toolsUsed: ['Gong', 'HubSpot', 'Slack', 'Loom', 'Notion'],
    deliverableSummary: 'Structured SDR playbooks, onboarding guides, and call quality scorecards.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore', 'Global'],
    faqs: [
      {
        q: 'What does an SDR coaching engagement look like?',
        a: 'Typically a 30-day intensive covering onboarding design, call listening labs, objection-handling workshops, and playbook development. Then ongoing monthly coaching as needed.',
      },
      {
        q: 'How much does ramp time improve?',
        a: 'Teams I\'ve coached have seen ramp time drop from 8 weeks to 5 weeks (a 25% reduction) through structured onboarding and shadowing programs.',
      },
      {
        q: 'Can you coach remote SDR teams?',
        a: 'Yes. I coach remote teams across US, UK, ANZ, and Singapore time zones using Gong, Slack, and structured video reviews.',
      },
      {
        q: 'Do you provide the playbooks or work with existing ones?',
        a: 'Both. I can build playbooks from scratch or audit and refine your existing cold call scripts, email templates, and objection-handling matrices.',
      },
      {
        q: 'What results have your coached teams achieved?',
        a: 'At Regen Digital US, my coaching contributed to a 15% team-wide quota lift and 25% faster onboarding for new SDRs.',
      },
    ],
    relatedSlugs: ['sdr-services', 'cold-calling', 'sales-development'],
    seoContent: [
      "SDR coaching is most effective when it is connected to the actual conversations reps are having every day. I help sales leaders improve call execution, objection handling, onboarding, qualification, and KPI discipline through practical coaching rather than generic sales theory. The work can be structured around a new-hire ramp, an underperforming segment, a specific objection pattern, or a broader SDR enablement program.",
      "A coaching engagement can begin with call reviews and a simple scorecard covering the opener, relevance, discovery questions, listening, objection handling, qualification, next-step control, and CRM notes. From there, the coaching can focus on the highest-impact behaviors instead of trying to change everything at once. Reps can practice new openers, work through realistic objections, and compare different ways to ask the same diagnostic question. This makes training directly applicable to live outbound conversations.",
      "For new SDRs, I can help create a structured onboarding path that covers the ICP, product or service positioning, prospect research, call preparation, scripts, qualification, CRM workflow, and daily activity expectations. Shadowing and mock calls can be used before a rep moves into live outreach. For experienced SDRs, coaching can focus on conversion gaps, enterprise conversations, difficult industries, gatekeeper navigation, follow-up, or improving the quality of booked meetings.",
      "Sales leaders can also use coaching to create more consistent team standards. Playbooks can document approved messaging, objection responses, qualification questions, follow-up rules, and handoff requirements. KPI pacing can be reviewed alongside call quality so the team does not optimize for raw activity at the expense of useful conversations. If the team uses tools such as HubSpot, Gong, Slack, Loom, or Notion, coaching materials can be integrated into the existing workflow rather than creating another disconnected system.",
      "This service is suitable for remote and distributed B2B SDR teams across US, UK, Australian, New Zealand, Canadian, and Singaporean markets. It can be delivered as a focused 30-day coaching program, a recurring manager-support engagement, or targeted workshops. The first step is to identify the sales behavior or pipeline problem you want to improve, review a sample of real calls or current playbooks, and agree on the measurable indicators that will show whether the coaching is helping the team execute more consistently.",
      "The strongest coaching programs also give managers a repeatable way to reinforce behavior after the session ends. I can help turn coaching notes into short call checklists, objection cards, mock-call prompts, and weekly review points so the learning remains part of the operating rhythm. This is useful for remote teams where informal floor coaching is harder to reproduce. Instead of measuring training only by attendance, the team can connect coaching to observable changes in call quality, qualification consistency, follow-up discipline, and the quality of meetings being passed to closers.",
      "Coaching can be adapted to the team's commercial motion rather than delivered as a generic curriculum. A high-velocity SMB team may need opener and volume coaching, while an enterprise team may need discovery depth, stakeholder mapping, and next-step control. The same principles can therefore be applied at different stages of the sales cycle while keeping the material grounded in the company's actual offer, buyer, and CRM process."
    ],
  },
};