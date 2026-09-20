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
  titleOptions?: string[];
  metaDescription?: string;
  intro: string;
  visualSuggestions?: { title: string; description: string; image: string; alt: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[]; subsections?: { heading: string; paragraphs: string[]; bullets?: string[] }[] }[];
  takeaways: string[];
  faq?: { question: string; answer: string }[];
}

const BLOG_IMAGE_1 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_2 = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_3 = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_4 = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=82';
const BLOG_IMAGE_5 = 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1600&q=82';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'b2b-appointment-setting-playbook-qualified-meetings',
    title: 'The Complete B2B Appointment Setting Playbook: How to Book More Qualified Meetings',
    titleOptions: [
      'The Complete B2B Appointment Setting Playbook: How to Book More Qualified Meetings',
      'B2B Appointment Setting: A Practical Playbook for Booking Qualified Sales Meetings',
      'How to Build a B2B Appointment Setting Process That Produces Better Meetings',
      'The B2B Appointment Setting Guide: From Prospecting to Qualified Meetings',
      'How B2B SDRs Can Book More Qualified Meetings Without Burning the List',
    ],
    metaDescription: 'Learn a practical B2B appointment setting process for targeting, cold calling, qualification, follow-up, show rates, and better sales meetings.',
    excerpt: 'A practical, evergreen framework for founders, sales leaders, agencies, and SDR teams that want more qualified meetings without sacrificing list quality.',
    category: 'Appointment Setting',
    published: '2026-09-20',
    updated: '2026-09-20',
    readTime: '12 min read',
    image: BLOG_IMAGE_2,
    keywords: ['B2B appointment setting', 'appointment setting strategy', 'qualified sales meetings', 'B2B lead generation', 'SDR appointment setting'],
    intro: 'Booking meetings is easy to measure and easy to misunderstand. A calendar can look full while the sales team still lacks qualified opportunities. The real skill in B2B appointment setting is building a repeatable process that puts the right prospects in front of the right closer for a reason that both sides understand. This playbook walks through that process from targeting and research to cold calling, qualification, follow-up, show-rate improvement, and the final handoff.',
    visualSuggestions: [
      {
        title: 'Visual 1 — The outbound funnel',
        description: 'A simple visual of the outbound funnel: ICP → list quality → conversations → qualified meetings → shows → opportunities.',
        image: BLOG_IMAGE_3,
        alt: 'B2B appointment setting funnel from prospect targeting to qualified sales opportunities',
      },
      {
        title: 'Visual 2 — Qualification scorecard',
        description: 'A one-page qualification scorecard comparing fit, pain, authority, timing, current process, and next-step commitment.',
        image: BLOG_IMAGE_4,
        alt: 'B2B sales qualification scorecard for evaluating appointment quality',
      },
      {
        title: 'Visual 3 — Meeting handoff checklist',
        description: 'A checklist of the information an SDR should capture before handing a qualified meeting to an AE or closer.',
        image: BLOG_IMAGE_5,
        alt: 'SDR to AE meeting handoff checklist for qualified B2B appointments',
      },
    ],
    sections: [
      {
        heading: '1. Start with the outcome: a qualified meeting, not a booked calendar slot',
        paragraphs: [
          'The first mindset shift is simple: a booked meeting and a qualified meeting are not the same thing. A booked slot becomes valuable when the prospect fits the target market, has a relevant business problem, understands why the conversation matters, and agrees to a specific next step.',
          'That distinction changes how an SDR works the entire funnel. Instead of optimizing only for call volume or meetings booked, optimize the chain that produces useful sales conversations.'
        ],
        bullets: [
          'Target the right account and buyer persona.',
          'Open with a problem hypothesis that is relevant to the business.',
          'Discover the current process before pitching a solution.',
          'Confirm why a meeting is worth protecting on the calendar.',
          'Give the closer enough context to continue without restarting discovery.'
        ],
        subsections: [
          {
            heading: 'What “qualified” should mean',
            paragraphs: ['Define the term before the first dial. A practical definition can include ICP fit, a relevant problem or goal, a credible reason to act, access to the right stakeholder, and agreement to a useful next step. Your exact criteria should match the offer and sales cycle.']
          }
        ]
      },
      {
        heading: '2. Build a list that deserves a conversation',
        paragraphs: [
          'Many outbound problems begin before the phone rings. If the list is filled with weak-fit accounts, outdated contacts, generic inboxes, or buyers who cannot influence the purchase, better scripts will only improve the efficiency of the wrong activity.',
          'Before launch, define the account characteristics and buying signals that make a prospect worth working. Then keep the research practical enough that an SDR can apply it consistently at scale.'
        ],
        bullets: [
          'Industry, business model, company size, and service area.',
          'Likely buyer or decision-maker title.',
          'Current provider, process, website, offer, or sales motion when visible.',
          'Trigger events such as expansion, hiring, new locations, funding, or a visible growth initiative.',
          'A clear reason your offer could be relevant now.'
        ],
        subsections: [
          {
            heading: 'Use a simple account research rule',
            paragraphs: ['An SDR should be able to answer three questions before calling: Why this company? Why this person? Why this conversation now? If those answers are unclear, either research the account further or move it lower in the priority queue.']
          }
        ]
      },
      {
        heading: '3. Use a cold call opener that earns discovery',
        paragraphs: [
          'A B2B cold call opener should create enough context for the prospect to decide whether the conversation is relevant. It does not need to explain the entire company, list every feature, or sound polished enough for a television commercial.',
          'A useful structure is: identify the business, state the reason for the call, give one relevant problem hypothesis, and ask a simple question. Keep the language conversational and adjust it to the prospect instead of reading it word for word.'
        ],
        bullets: [
          'Context: “I found you while looking at companies in [market].”',
          'Reason: “I’m reaching out because we help with [specific outcome].”',
          'Hypothesis: “I noticed [relevant signal].”',
          'Discovery: “How are you handling that today?”'
        ],
        subsections: [
          {
            heading: 'What to avoid in the first 20–30 seconds',
            paragraphs: ['Avoid long company introductions, exaggerated claims, feature dumps, fake familiarity, and questions that force the prospect into a yes-or-no answer before they understand the context. The goal is to create a natural bridge into discovery.']
          }
        ]
      },
      {
        heading: '4. Qualify with a conversation, not an interrogation',
        paragraphs: [
          'Qualification is where appointment setting becomes sales development. The SDR is not simply checking boxes; the SDR is finding out whether the problem, buyer, timing, and next step make sense together.',
          'A useful discovery sequence moves from the current state to the desired state and then to the reason the prospect would invest time in changing it.'
        ],
        bullets: [
          'Current state: What are you doing today?',
          'Problem: What is not working as well as you want?',
          'Impact: What does that cost in time, revenue, capacity, or missed opportunities?',
          'Priority: Is this something you are actively looking to improve?',
          'Decision process: Who else is involved?',
          'Next step: What would make a 15–20 minute meeting useful?'
        ],
        subsections: [
          {
            heading: 'Keep BANT useful instead of mechanical',
            paragraphs: ['Budget, authority, need, and timing can be helpful qualification dimensions, but forcing every prospect through a rigid acronym can make a call feel like an interview. Use the framework as a mental checklist and let the conversation determine the order.']
          }
        ]
      },
      {
        heading: '5. Make the appointment itself valuable',
        paragraphs: [
          'One of the most overlooked appointment setting skills is explaining what will happen after the prospect accepts the meeting. “I’ll send a calendar invite” is an administrative step, not a value proposition.',
          'Instead, connect the meeting to the problem the prospect discussed. The closer should know what the prospect wants to evaluate, what prompted the conversation, and what a useful outcome would look like.'
        ],
        bullets: [
          'Name the business problem the prospect wants to explore.',
          'Set a realistic meeting length.',
          'Explain who will join and why that person is relevant.',
          'State what the prospect should expect to leave with.',
          'Confirm the best email and calendar details before ending the call.'
        ]
      },
      {
        heading: '6. Build follow-up around relevance, not repetition',
        paragraphs: [
          'Most prospects are busy, so one unanswered call should not automatically end the sequence. At the same time, repeating the same message across seven touches can make the outreach feel automated and irrelevant.',
          'A better B2B outbound cadence gives each touch a job. One touch establishes context, another adds an insight, another asks a different discovery question, and a later touch can close the loop respectfully.'
        ],
        bullets: [
          'Touch 1: Call with a clear problem hypothesis.',
          'Touch 2: Short email summarizing the relevance.',
          'Touch 3: Second call with a different angle or observation.',
          'Touch 4: LinkedIn context when appropriate.',
          'Touch 5: Useful proof, insight, or case-study point.',
          'Touch 6: Direct qualification attempt.',
          'Touch 7: Close the loop or set a future follow-up date.'
        ],
        subsections: [
          {
            heading: 'Respect the list',
            paragraphs: ['Good appointment setting is not about forcing every prospect into a meeting. Remove poor-fit accounts, honor explicit do-not-contact requests, record useful objections, and use future follow-up dates when the timing is genuinely later. A cleaner database makes future outreach more productive.']
          }
        ]
      },
      {
        heading: '7. Improve show rates before blaming the prospect',
        paragraphs: [
          'A qualified appointment can still fail if the reason for the meeting is unclear. The SDR controls a large part of the expectation-setting before the calendar invite is accepted.',
          'The confirmation should remind the prospect what they agreed to discuss rather than simply repeating the date and time.'
        ],
        bullets: [
          'Restate the problem or goal discussed on the call.',
          'Confirm the meeting time and timezone.',
          'Make the attendee list clear.',
          'Share a short agenda or expected outcome.',
          'Give the prospect an easy way to reschedule if needed.',
          'Send useful context instead of generic reminders.'
        ],
        subsections: [
          {
            heading: 'Track show rate by source',
            paragraphs: ['If one campaign consistently produces booked meetings but another produces stronger attendance, treat that difference as useful diagnostic data. Review targeting, qualification, offer positioning, and expectation-setting before changing the entire outbound process.']
          }
        ]
      },
      {
        heading: '8. Give the closer a handoff they can actually use',
        paragraphs: [
          'A strong SDR-to-AE handoff protects the buyer experience. The prospect should not have to repeat the same information simply because the person who booked the meeting is different from the person who will run it.',
          'The CRM note should be concise enough to read quickly but detailed enough to preserve the commercial context.'
        ],
        bullets: [
          'Who attended or agreed to attend.',
          'Current process or provider.',
          'Primary problem or objective.',
          'Business impact or reason for urgency.',
          'What has already been discussed.',
          'Questions or objections raised.',
          'What the prospect expects from the next meeting.'
        ]
      },
      {
        heading: '9. Track the funnel before changing the script',
        paragraphs: [
          'When performance drops, teams often rewrite the opener immediately. That can be useful, but only after identifying where the funnel is actually leaking.',
          'A practical appointment setting dashboard separates activity from quality so the team can diagnose the problem instead of guessing.'
        ],
        bullets: [
          'Accounts worked.',
          'Dials and total touches.',
          'Connect rate.',
          'Conversation rate.',
          'Qualified conversation rate.',
          'Qualified meetings booked.',
          'Show rate.',
          'Opportunity conversion.',
          'Pipeline sourced.'
        ],
        subsections: [
          {
            heading: 'Use the bottleneck to choose the next improvement',
            paragraphs: ['Low connects can point toward data quality or timing. Strong conversations with weak qualification can point toward ICP or discovery. Healthy bookings with weak attendance can point toward expectation-setting. Good meetings with weak opportunity conversion can point toward qualification criteria or offer-market fit.']
          }
        ]
      },
      {
        heading: '10. Common appointment setting mistakes',
        paragraphs: ['The most expensive mistakes are often process mistakes rather than individual call mistakes. Watch for these patterns:'],
        bullets: [
          'Optimizing for booked meetings instead of qualified meetings.',
          'Using the same script for every market and persona.',
          'Calling weak-fit accounts because the list is too large to question.',
          'Pitching before understanding the current process.',
          'Treating objections as scripts to defeat instead of information to understand.',
          'Booking meetings without explaining the reason for the next conversation.',
          'Leaving weak CRM notes that force the closer to restart discovery.',
          'Ignoring show-rate and opportunity-conversion data.',
          'Using follow-up language that sounds automated or desperate.',
          'Changing several parts of the funnel at once, making results impossible to diagnose.'
        ]
      },
      {
        heading: '11. Expert tips for building a repeatable SDR appointment setting process',
        paragraphs: [
          'The strongest outbound systems are usually boring in a good way: clear ICP criteria, consistent research, a flexible opener, documented qualification, clean CRM hygiene, and a repeatable handoff. The goal is not to make every call identical. The goal is to make the operating standards consistent while leaving room for human conversation.',
          'For teams hiring or outsourcing appointment setting, document the definition of a qualified meeting before the first campaign begins. That one decision makes coaching, reporting, and quality control much easier.'
        ],
        bullets: [
          'Create one-page ICP and qualification guides.',
          'Keep multiple opener variations for different buyer contexts.',
          'Review recordings for discovery quality, not only objection handling.',
          'Coach one measurable behavior at a time.',
          'Audit CRM notes and meeting outcomes every week.',
          'Compare booked, held, and opportunity-producing meetings separately.',
          'Keep the prospect experience human and specific.'
        ]
      },
      {
        heading: '12. A simple weekly appointment setting review',
        paragraphs: ['Use this 20–30 minute review to keep the process improving without constantly rebuilding it.'],
        bullets: [
          'Step 1: Identify the largest funnel drop-off.',
          'Step 2: Review a small sample of calls from that stage.',
          'Step 3: Identify one likely cause and one supporting signal.',
          'Step 4: Change one variable only.',
          'Step 5: Run the change long enough to collect useful data.',
          'Step 6: Compare qualified meetings, show rate, and downstream outcomes.',
          'Step 7: Keep, revise, or roll back the change based on evidence.'
        ]
      },
      {
        heading: 'Final takeaway: appointment setting is a system',
        paragraphs: [
          'The best B2B appointment setting process is not a magic script. It is a connected system: the right accounts, a relevant reason to call, natural discovery, clear qualification, useful follow-up, strong expectation-setting, and a handoff that preserves context.',
          'If you improve those pieces in order, you can create more useful sales conversations without simply asking an SDR to make more calls. That is the difference between activity and a repeatable outbound engine.'
        ]
      }
    ],
    takeaways: [
      'Define a qualified meeting before measuring appointment volume.',
      'Build the list around ICP fit and a credible reason to call.',
      'Use cold calls to earn discovery, not deliver a full sales pitch.',
      'Make follow-up add context instead of repeating the same message.',
      'Protect show rate and the SDR-to-AE handoff as part of appointment quality.',
      'Diagnose the funnel before rewriting the script or increasing activity.'
    ],
    faq: [
      {
        question: 'What is B2B appointment setting?',
        answer: 'B2B appointment setting is the process of identifying potential business buyers, starting relevant conversations, qualifying fit and need, and scheduling sales meetings that have a clear business reason.'
      },
      {
        question: 'What makes a B2B appointment qualified?',
        answer: 'A qualified appointment generally combines target-account fit, a relevant business problem or goal, a credible reason to explore a solution, the appropriate stakeholder, and agreement on a useful next step. The exact criteria should match the offer and sales process.'
      },
      {
        question: 'How can an SDR improve appointment show rates?',
        answer: 'Improve expectation-setting: confirm the reason for the meeting, restate the problem being explored, verify the time and timezone, clarify attendees, share a short agenda, and make rescheduling easy.'
      },
      {
        question: 'Which KPIs should an appointment setting team track?',
        answer: 'Useful metrics include accounts worked, touches, connect rate, conversation rate, qualified conversation rate, qualified meetings booked, show rate, opportunity conversion, and pipeline sourced.'
      }
    ]
  },
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
