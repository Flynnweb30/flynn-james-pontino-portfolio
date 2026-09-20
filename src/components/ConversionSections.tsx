import React from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, ClipboardCheck, Mail, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Section } from './Section';
import { SectionHeading } from './SectionHeading';
import { PageId } from '../types';

interface ConversionSectionsProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onOpenBooking: () => void;
}

const proofTools = ['Google Analytics', 'SEMrush', 'Salesforce', 'HubSpot', 'LinkedIn Sales Navigator'];

export const ConversionSections: React.FC<ConversionSectionsProps> = ({ onNavigate, onOpenContact, onOpenBooking }) => (
  <>
    <section className="border-b border-slate-800/60 bg-slate-950/80" aria-label="Tools and platforms">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-7">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[11px] sm:text-[12px] font-mono uppercase tracking-wider text-slate-500">
          <span className="text-slate-600">Trusted workflow</span>
          {proofTools.map((tool) => <span key={tool} className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />{tool}</span>)}
        </div>
      </div>
    </section>

    <Section bordered className="section-photo bg-photo-office">
      <SectionHeading index="01.1" eyebrow="The cost of weak outbound" title="If the pipeline feels unpredictable," titleAccent="the process needs attention." description="For HR managers, founders, and sales leaders, the challenge is rarely a lack of activity. It is activity that does not translate into qualified conversations." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        {[
          { icon: Target, title: 'Wasted budget', body: 'Lists, tools, and paid acquisition lose value when outreach targets the wrong accounts or buyers.' },
          { icon: Users, title: 'Low conversion', body: 'High dial counts mean little when openers, discovery, and follow-up fail to earn the next step.' },
          { icon: ShieldCheck, title: 'Bad-fit leads', body: 'Unqualified meetings consume closer time and make revenue forecasts harder to trust.' },
        ].map(({ icon: Icon, title, body }, i) => (
          <motion.article key={title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="rounded-xl border border-slate-700/60 bg-slate-950/70 p-6 sm:p-7">
            <Icon className="w-5 h-5 text-cyan-300 mb-5" />
            <h3 className="text-[18px] font-semibold text-white">{title}</h3>
            <p className="mt-3 text-[13.5px] leading-[1.8] text-slate-400">{body}</p>
          </motion.article>
        ))}
      </div>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button variant="primary" onClick={() => onOpenContact('B2B Appointment Setting')}>Improve my outbound motion <ArrowUpRight className="w-4 h-4" /></Button>
        <Button variant="secondary" onClick={() => onNavigate('services')} withArrow>Explore services</Button>
      </div>
    </Section>

    <Section bordered>
      <SectionHeading index="01.2" eyebrow="Performance snapshot" title="From activity to" titleAccent="qualified opportunity." description="A simple, GSC-inspired view of the journey: visibility creates attention, conversations create intent, and qualification creates sales-ready momentum." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
        {[
          { label: 'Total clicks', value: '0 → 30+', note: 'Qualified meetings / month', tone: 'text-cyan-300' },
          { label: 'Impressions', value: '0 → 150+', note: 'Daily outbound touches', tone: 'text-violet-300' },
          { label: 'Conversion rate', value: 'Tracked → improved', note: 'From conversation to next step', tone: 'text-orange-300' },
        ].map((metric) => (
          <div key={metric.label} className="rounded-xl border border-slate-700/60 bg-slate-900/65 p-6">
            <div className="flex items-center justify-between gap-3"><span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">{metric.label}</span><BarChart3 className="w-4 h-4 text-slate-600" /></div>
            <div className={`mt-5 text-[25px] sm:text-[29px] font-bold tracking-tight ${metric.tone}`}>{metric.value}</div>
            <p className="mt-2 text-[12px] text-slate-400">{metric.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 rounded-xl border border-cyan-400/15 bg-gradient-to-r from-blue-950/40 via-violet-950/30 to-teal-950/30 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div><div className="text-[10.5px] font-mono uppercase tracking-wider text-cyan-300">The 0 → hero journey</div><h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">Build a measurable outbound system.</h3><p className="mt-2 max-w-2xl text-[13.5px] leading-[1.8] text-slate-300">Start with a clean ICP, create useful conversations, qualify with discipline, and protect every booked meeting with a clear handoff and follow-up process.</p></div>
          <Button variant="secondary" onClick={() => onNavigate('case-studies')} withArrow>Review the evidence</Button>
        </div>
      </div>
    </Section>

    <Section bordered className="section-photo bg-photo-team">
      <SectionHeading index="01.3" eyebrow="Who I help" title="A sales development partner for" titleAccent="different growth stages." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        {[
          { icon: ClipboardCheck, title: 'For HR managers', subtitle: 'Skill set and team readiness', bullets: ['Senior SDR execution', 'Call coaching and onboarding', 'KPI reporting and CRM hygiene'] },
          { icon: BarChart3, title: 'For business owners', subtitle: 'Revenue-generating conversations', bullets: ['Target-account prospecting', 'Cold calling and appointment setting', 'Qualification and closer handoff'] },
          { icon: Sparkles, title: 'For startups', subtitle: 'Repeatable, scalable outreach', bullets: ['ICP and messaging validation', 'Lean multichannel sequences', 'Process documentation and iteration'] },
        ].map(({ icon: Icon, title, subtitle, bullets }) => (
          <article key={title} className="rounded-xl border border-slate-700/60 bg-slate-950/75 p-6 sm:p-7">
            <Icon className="w-5 h-5 text-violet-300" />
            <h3 className="mt-5 text-[18px] font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[12.5px] text-slate-400">{subtitle}</p>
            <ul className="mt-5 space-y-3">{bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-[13px] leading-relaxed text-slate-300"><CheckCircle2 className="w-4 h-4 shrink-0 text-teal-300 mt-0.5" />{bullet}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>

    <Section bordered className="section-photo bg-photo-laptop" id="lead-magnet">
      <div className="rounded-2xl border border-orange-400/20 bg-slate-950/80 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8"><div className="text-[10.5px] font-mono uppercase tracking-wider text-orange-300">Free resource</div><h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">The B2B Outbound Readiness Checklist</h2><p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-slate-300">Use this practical checklist to review your ICP, list quality, cold-call opener, qualification questions, follow-up cadence, and meeting handoff before your next campaign.</p><ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">{['ICP and list-quality review', 'Cold-call opener checklist', 'BANT discovery prompts', 'No-show prevention steps'].map((item) => <li key={item} className="flex gap-2 text-[13px] text-slate-300"><CheckCircle2 className="w-4 h-4 text-orange-300 shrink-0" />{item}</li>)}</ul></div>
          <div className="lg:col-span-4 rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"><Mail className="w-5 h-5 text-orange-300" /><h3 className="mt-3 text-[17px] font-semibold text-white">Get the checklist</h3><p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">Request the resource and receive a practical next step for your outbound process.</p><Button variant="primary" onClick={() => onOpenContact('Free B2B Outbound Readiness Checklist')} className="mt-5 w-full">Request free checklist <ArrowUpRight className="w-4 h-4" /></Button></div>
        </div>
      </div>
    </Section>

    <Section bordered className="section-photo bg-photo-handshake" id="calendar-booking">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7"><SectionHeading index="01.4" eyebrow="Calendar booking" title="Choose a time to discuss" titleAccent="your next sales target." description="Use the centralized booking flow to share your goals, choose a suitable time, and give me enough context to make the conversation useful." /><div className="mt-6 flex flex-wrap gap-3"><Button variant="primary" onClick={onOpenBooking}>Open calendar booking <ArrowUpRight className="w-4 h-4" /></Button><Button variant="secondary" onClick={() => onOpenContact()} withArrow>Prefer email?</Button></div></div>
        <div className="lg:col-span-5 rounded-xl border border-slate-700/60 bg-slate-950/75 p-6"><div className="text-[10.5px] font-mono uppercase tracking-wider text-teal-300">20-minute working session</div><h3 className="mt-3 text-[19px] font-semibold text-white">Bring your pipeline questions.</h3><ul className="mt-5 space-y-3 text-[13px] text-slate-300"><li>• Current outbound goals and target market</li><li>• Existing scripts, list sources, and tools</li><li>• Recent activity, conversion, or show-rate data</li><li>• The next practical improvement you want to make</li></ul></div>
      </div>
    </Section>
  </>
);
