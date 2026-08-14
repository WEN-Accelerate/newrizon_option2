import { Link } from 'react-router-dom';
import { involvementDoors, photos } from '@/data/content';
import { FullBleed, GhostLink, PhotoFigure, SectionHeading, SolidLink } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

const partnershipTiers = [
  {
    name: 'One Classroom Orbit',
    cost: '[cost]',
    schools: '1 school',
    scope: 'Earthizen Curriculum, teacher onboarding, one partner-classroom match.',
    reporting: 'Term review + annual impact note',
  },
  {
    name: 'City Constellation',
    cost: '[cost]',
    schools: '10 schools',
    scope: 'Curriculum + NEXUS bootcamp + Community Lab in one city cluster.',
    reporting: 'Quarterly briefings + audited annual report',
  },
  {
    name: 'National Mission',
    cost: '[cost]',
    schools: '100 schools',
    scope: 'Multi-city rollout, makerspaces, summit delegation and platform access.',
    reporting: 'Quarterly dashboard + annual audited impact report',
  },
];

const scheduleVII = [
  ['Education', 'Earthizen Curriculum, Borderless Classroom Network'],
  ['Skill development', 'Code the Future, Maker Bharat, Impact Portfolio'],
  ['Environmental sustainability', 'Community Lab, Civic Watch, Future Earth Explorers'],
];

export default function GetInvolved() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.studentsGroup}
        alt="Students and teachers with Group Captain Shubhanshu Shukla in a school courtyard"
        eyebrow="Get Involved"
        title="Four Ways In."
        sub="Whether you run a school, a CSR budget, or just have a Saturday — there is a way to build this."
        short
      >
        <SolidLink to="/contact">Talk To Us</SolidLink>
        <GhostLink to="/programmes">See The Programmes</GhostLink>
      </FullBleed>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
            {involvementDoors.map((door, index) => (
              <div key={door.title} className="flex flex-col border-t-2 border-white/80 pt-5" data-reveal>
                <span className="tabular font-condensed text-5xl font-semibold text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.02em]">{door.title}</h2>
                <p className="mt-4 flex-1 text-[15px] font-light leading-7 text-white/70">{door.copy}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-block text-[12px] font-semibold uppercase tracking-[0.24em] text-white underline decoration-2 underline-offset-8 hover:text-white/70"
                >
                  {door.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <PhotoFigure
              src={photos.schoolVisit}
              alt="A classroom full of students with Group Captain Shubhanshu Shukla during a school outreach session"
              caption="A school outreach session — where every partnership starts"
              ratio="aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="CSR & Funding"
            title="Fund a classroom. Measure the change."
            sub="Earthizen partnerships are scoped, costed and reported like any other line in your budget — because that is what makes them defensible."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {partnershipTiers.map((tier) => (
              <div key={tier.name} className="border-t-2 border-white/80 pt-5" data-reveal>
                <p className="eyebrow !text-white/60">{tier.schools}</p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.02em]">{tier.name}</h3>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/50">{tier.cost}</p>
                <p className="mt-4 text-[15px] font-light leading-7 text-white/70">{tier.scope}</p>
                <p className="mt-4 border-t hairline pt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                  {tier.reporting}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-2">
            <div data-reveal>
              <p className="eyebrow">Schedule VII clause-mapping</p>
              <div className="mt-6">
                {scheduleVII.map(([clause, mapping]) => (
                  <div key={clause} className="grid gap-2 border-t hairline py-5 sm:grid-cols-[240px_1fr]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">{clause}</p>
                    <p className="text-[15px] font-light leading-7 text-white/70">{mapping}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal>
              <p className="eyebrow">Partnership pack</p>
              <p className="mt-6 max-w-xl text-[15px] font-light leading-8 text-white/70">
                Cost per child: [cost]. Downloadable partnership pack: [gated behind name and email]. Book a call with the
                partnerships team to scope a defensible CSR line.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <SolidLink to="/contact">Book A Call</SolidLink>
                <GhostLink to="/impact">Review Evidence</GhostLink>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <PhotoFigure
              src={photos.studentInnovation}
              alt="A student demonstrating a working wearable-device prototype at an innovation showcase"
              caption="Evidence-led — a student demonstrating a working build"
              ratio="aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
