import { useState } from 'react';
import type { FormEvent } from 'react';
import { photos } from '@/data/content';
import { FullBleed, GhostLink, SolidLink } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

const contactRows = [
  ['General', 'hello@[domain]'],
  ['Partnerships', 'partnerships@[domain]'],
  ['Press', 'press@[domain]'],
  ['Registered office', '[full address, New Delhi]'],
  ['Phone', '[number, with hours]'],
];

const inputClass =
  'w-full border hairline bg-transparent px-4 py-3.5 text-[15px] font-light text-white outline-none transition-colors placeholder:text-white/35 focus:border-white';

export default function Contact() {
  const scope = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.leadersMeeting}
        alt="Group Captain Shubhanshu Shukla in conversation with community and institutional leaders"
        eyebrow="Contact"
        title="Talk To Us."
        sub="One inbox per orbit — schools, funders, volunteers and press."
        short
        focus="top"
      >
        <SolidLink to="/get-involved">Get Involved</SolidLink>
        <GhostLink to="/about">About The Foundation</GhostLink>
      </FullBleed>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <p className="eyebrow">Reach the mission crew</p>
            <div className="mt-8">
              {contactRows.map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-3 border-t hairline py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">{label}</p>
                  <p className="text-[15px] font-light text-white/70">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t-2 border-white/80 pt-5 text-sm font-light leading-7 text-white/60">
              This preview keeps the form in the browser only. For launch, connect it to the Foundation's CRM or inbox
              workflow.
            </p>
          </div>

          <form onSubmit={onSubmit} data-reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2.5">
                <span className="eyebrow !text-[11px]">Name</span>
                <input required className={inputClass} placeholder="Your name" />
              </label>
              <label className="grid gap-2.5">
                <span className="eyebrow !text-[11px]">Email</span>
                <input required type="email" className={inputClass} placeholder="you@example.org" />
              </label>
              <label className="grid gap-2.5 sm:col-span-2">
                <span className="eyebrow !text-[11px]">Organisation</span>
                <input className={inputClass} placeholder="School, company, foundation, newsroom…" />
              </label>
              <label className="grid gap-2.5 sm:col-span-2">
                <span className="eyebrow !text-[11px]">I am a…</span>
                <select className={`${inputClass} bg-black`} defaultValue="school">
                  <option value="school">School</option>
                  <option value="funder">Funder</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="press">Press</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="grid gap-2.5 sm:col-span-2">
                <span className="eyebrow !text-[11px]">Message</span>
                <textarea required rows={6} className={inputClass} placeholder="Tell us what you want to build." />
              </label>
              <label className="flex items-start gap-3 sm:col-span-2">
                <input required type="checkbox" className="mt-1 h-4 w-4 accent-white" />
                <span className="text-sm font-light leading-6 text-white/65">
                  I consent to Earthizen Foundation contacting me about this message, as described in the privacy policy.
                </span>
              </label>
            </div>
            <button type="submit" className="btn-solid mt-8 w-full">
              Send Message
            </button>
            {sent && (
              <p className="mt-5 border hairline p-4 text-sm font-light leading-6 text-white/75" role="status">
                Message captured for this preview. Connect a backend or form service before launch to store and route
                submissions.
              </p>
            )}
          </form>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
