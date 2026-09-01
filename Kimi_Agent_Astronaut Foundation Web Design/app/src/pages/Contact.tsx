import { useState } from 'react';
import type { FormEvent } from 'react';
import { assets } from '@/data/content';
import { GhostLink, PageHero, PrimaryLink, SectionHeading } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

export default function Contact() {
  const scope = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  useParallax();
  usePageIntro();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="text-gradient-orbit">us.</span>
          </>
        }
        sub="Schools, funders, volunteers and press: one inbox for each, and a team that replies."
        image={assets.starfield}
        tone="stars"
      >
        <PrimaryLink to="/get-involved">Get involved</PrimaryLink>
        <GhostLink to="/about">About the foundation</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Reach the mission crew" title="One inbox per orbit." />
            <div className="mt-10 space-y-5">
              {[
                ['General', 'hello@earthizen.org'],
                ['Partnerships', 'partnerships@earthizen.org'],
                ['Press', 'press@earthizen.org'],
                ['Registered office', 'New Delhi, India'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-3 border-b hairline pb-4" data-reveal>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-100/70">{label}</p>
                  <p className="text-sm text-[#e6e6e1]/80">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-[1.4rem] border hairline bg-white/[0.035] p-5 text-sm leading-7 text-[#c8d4ea]/[0.78]" data-reveal>
              Writing about a school partnership? Include your school's name, city and board, and the team will match you
              with a partner classroom.
            </p>
          </div>

          <form onSubmit={onSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8" data-reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">Name</span>
                <input required className="rounded-2xl border hairline bg-white/5 px-4 py-3 text-[#f1e9dd] outline-none transition focus:border-sky-200/60" placeholder="Your name" />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">Email</span>
                <input required type="email" className="rounded-2xl border hairline bg-white/5 px-4 py-3 text-[#f1e9dd] outline-none transition focus:border-sky-200/60" placeholder="you@example.org" />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">Organisation</span>
                <input className="rounded-2xl border hairline bg-white/5 px-4 py-3 text-[#f1e9dd] outline-none transition focus:border-sky-200/60" placeholder="School, company, foundation, newsroom…" />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">I am a…</span>
                <select className="rounded-2xl border hairline bg-[#0b0b16] px-4 py-3 text-[#f1e9dd] outline-none transition focus:border-sky-200/60" defaultValue="school">
                  <option value="school">School</option>
                  <option value="funder">Funder</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="press">Press</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">Message</span>
                <textarea required rows={6} className="rounded-2xl border hairline bg-white/5 px-4 py-3 text-[#f1e9dd] outline-none transition focus:border-sky-200/60" placeholder="Tell us what you want to build." />
              </label>
              <label className="flex items-start gap-3 sm:col-span-2">
                <input required type="checkbox" className="mt-1 h-4 w-4 rounded border hairline bg-white/5 accent-sky-300" />
                <span className="text-sm leading-6 text-[#c8d4ea]/[0.72]">
                  I consent to Earthizen Foundation contacting me about this message, as described in the privacy policy.
                </span>
              </label>
            </div>
            <button className="mt-7 w-full rounded-full bg-[#f1e9dd] px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#05060f] transition hover:bg-sky-100">
              Send message
            </button>
            {sent && (
              <p className="mt-5 rounded-2xl border border-sky-200/35 bg-sky-300/10 p-4 text-sm leading-6 text-sky-50/[0.86]" role="status">
                Thank you. Your message has been received, and the team will reply within a few working days.
              </p>
            )}
          </form>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
