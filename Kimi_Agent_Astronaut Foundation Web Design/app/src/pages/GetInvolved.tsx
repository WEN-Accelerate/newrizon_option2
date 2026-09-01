import { assets, involvementDoors } from '@/data/content';
import { GhostLink, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

const partnershipTiers = [
  {
    name: 'One Classroom Orbit',
    cost: 'On request',
    schools: '1 school',
    scope: 'Earthizen Curriculum, teacher onboarding, one partner-classroom match.',
    reporting: 'Term review + annual impact note',
  },
  {
    name: 'City Constellation',
    cost: 'On request',
    schools: '10 schools',
    scope: 'Curriculum + NEXUS bootcamp + Community Lab in one city cluster.',
    reporting: 'Quarterly briefings + audited annual report',
  },
  {
    name: 'National Mission',
    cost: 'On request',
    schools: '100 schools',
    scope: 'Multi-city rollout, makerspaces, summit delegation and platform access.',
    reporting: 'Quarterly dashboard + annual audited impact report',
  },
];

export default function GetInvolved() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="Get Involved"
        title={
          <>
            Four ways <span className="text-gradient-orbit">in.</span>
          </>
        }
        sub="Whether you run a school, a CSR budget, or just have a Saturday, there is a way to build this."
        image={assets.starfield}
        tone="stars"
      >
        <PrimaryLink to="/contact">Talk to us</PrimaryLink>
        <GhostLink to="/programmes">See the programmes</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {involvementDoors.map((door, index) => (
            <article key={door.title} className="group relative overflow-hidden rounded-[1.8rem] border hairline bg-white/[0.035] p-7 transition hover:-translate-y-2 hover:bg-white/[0.06]" data-reveal>
              <span className="absolute -right-4 -top-6 font-display text-8xl font-semibold tracking-[-0.08em] text-white/[0.05]">0{index + 1}</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-200/70">Door {index + 1}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[#fffdf5]">{door.title}</h2>
              <p className="mt-5 min-h-32 text-sm leading-7 text-[#c8d4ea]/[0.72]">{door.copy}</p>
              <PrimaryLink to="/contact" dark>{door.cta}</PrimaryLink>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img src={assets.orbitalSunrise} alt="" data-parallax={0.14} className="h-full w-full scale-110 object-cover opacity-28" />
          <div className="absolute inset-0 bg-[#05060f]/[0.78]" />
        </div>
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="CSR & Funding"
            title="Fund a classroom. Measure the change."
            sub="Earthizen partnerships are scoped, costed and reported like any other line in your budget, because that is what makes them defensible."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {partnershipTiers.map((tier) => (
              <article key={tier.name} className="glass-panel rounded-[1.8rem] p-7" data-reveal>
                <Tag>{tier.schools}</Tag>
                <h3 className="mt-5 font-display text-3xl font-semibold text-[#fffdf5]">{tier.name}</h3>
                <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-amber-100/[0.82]">{tier.cost}</p>
                <p className="mt-5 text-sm leading-7 text-[#c8d4ea]/[0.72]">{tier.scope}</p>
                <p className="mt-5 border-t hairline pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-100/[0.68]">{tier.reporting}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border hairline bg-white/[0.035] p-7" data-reveal>
              <h3 className="font-display text-2xl font-semibold text-[#fffdf5]">Schedule VII clause-mapping</h3>
              <div className="mt-6 overflow-hidden rounded-[1.2rem] border hairline">
                {[
                  ['Education', 'Earthizen Curriculum, Borderless Classroom Network'],
                  ['Skill development', 'Code the Future, Maker Bharat, Impact Portfolio'],
                  ['Environmental sustainability', 'Community Lab, Civic Watch, Future Earth Explorers'],
                ].map(([clause, mapping]) => (
                  <div key={clause} className="grid gap-2 border-b hairline p-4 last:border-b-0 sm:grid-cols-[180px_1fr]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-sky-100/[0.72]">{clause}</p>
                    <p className="text-sm leading-6 text-[#c8d4ea]/[0.72]">{mapping}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-amber-200/30 bg-amber-300/[0.08] p-7" data-reveal>
              <h3 className="font-display text-2xl font-semibold text-[#fffdf5]">Partnership pack</h3>
              <p className="mt-4 text-sm leading-7 text-[#e6e6e1]/[0.78]">
                Every partnership is scoped and costed per school cluster, with reporting agreed up front. Book a call with the partnerships team to build a defensible CSR line for your budget.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryLink to="/contact" dark>Book a call</PrimaryLink>
                <GhostLink to="/impact">Review evidence</GhostLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
