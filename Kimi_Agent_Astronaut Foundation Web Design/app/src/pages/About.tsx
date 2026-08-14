import { complianceCards, coreValues, founderQuote, leadershipTiers, photos, visionMission } from '@/data/content';
import { FullBleed, GhostLink, PhotoFigure, SectionHeading, SolidLink } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

export default function About() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.orbitEarth}
        alt="Earth's limb from orbit beside the station's solar arrays"
        eyebrow="About Us"
        title={
          <>
            The Spark
            <br />
            Behind Earthizen
          </>
        }
        sub="One perspective, seen from orbit, turned into a curriculum."
        short
      >
        <SolidLink to="/programmes">Explore The Programmes</SolidLink>
        <GhostLink to="/get-involved">Join The Movement</GhostLink>
      </FullBleed>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <PhotoFigure
            src={founderQuote.portrait}
            alt="Group Captain Shubhanshu Shukla — official mission portrait in flight suit"
            caption={`${founderQuote.attribution} · ${founderQuote.relationship}`}
            ratio="aspect-[16/9]"
          />
          <blockquote data-reveal>
            <p className="eyebrow">Founding Quote</p>
            <p className="mt-6 max-w-2xl text-balance font-display text-3xl font-light leading-snug text-white sm:text-4xl">
              {founderQuote.quote}
            </p>
            <footer className="mt-8 border-t-2 border-white/80 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">{founderQuote.attribution}</p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.26em] text-white/55">{founderQuote.relationship}</p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] items-start gap-14 lg:grid-cols-2">
          <div data-reveal>
            <SectionHeading eyebrow="How It Started" title="The origin story" />
            <p className="mt-8 max-w-xl text-[15px] font-light leading-8 text-white/70">
              [Approximately 200 words, first person if possible. Required from the Foundation: who started Earthizen, what
              they saw that made them start it, what the first classroom was, and what happened in it.]
            </p>
          </div>
          <PhotoFigure
            src={photos.classroomChildren}
            alt="Group Captain Shubhanshu Shukla with young students in their classroom"
            caption="The classroom where it begins"
            ratio="aspect-[3/2]"
          />
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2">
          <div className="border-t-2 border-white/80 pt-6" data-reveal>
            <p className="eyebrow">Vision</p>
            <p className="mt-5 text-balance font-display text-2xl font-light leading-snug text-white/90 sm:text-3xl">
              {visionMission.vision}
            </p>
          </div>
          <div className="border-t-2 border-white/80 pt-6" data-reveal>
            <p className="eyebrow">Mission</p>
            <p className="mt-5 max-w-xl text-base font-light leading-8 text-white/75">{visionMission.mission}</p>
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Core Values" title="Five values. One planet." />
          <div className="mt-12">
            {coreValues.map((value, index) => (
              <div
                key={value.name}
                className="grid gap-3 border-t hairline py-6 sm:grid-cols-[80px_260px_1fr] sm:items-baseline"
                data-reveal
              >
                <span className="tabular font-condensed text-2xl font-semibold text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{value.name}</h3>
                <p className="max-w-3xl text-[15px] font-light leading-7 text-white/70">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="The People Behind"
            title="Team & leadership"
            sub="Names, roles and photographs are published only once cleared — no placeholders pretending to be people."
          />
          <div className="mt-12">
            {leadershipTiers.map((leader) => (
              <div key={leader.tier} className="grid gap-3 border-t hairline py-6 sm:grid-cols-[320px_1fr] sm:items-baseline" data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{leader.tier}</h3>
                <p className="max-w-3xl text-[15px] font-light leading-7 text-white/70">{leader.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Legal & Registration" title="Registered & compliant" />
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
            {complianceCards.map((card) => (
              <div key={card.title} className="border-t-2 border-white/80 pt-5" data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{card.title}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-white/65">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
