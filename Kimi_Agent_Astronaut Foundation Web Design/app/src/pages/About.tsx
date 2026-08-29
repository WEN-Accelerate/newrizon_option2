import { assets, complianceCards, founderQuote, leadershipTiers, photos, visionMission } from '@/data/content';
import { GhostLink, ImageSlotCard, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

export default function About() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="About Us"
        title={
          <>
            The Spark Behind <span className="text-gradient-orbit">Earthizen</span>
          </>
        }
        sub="One perspective, seen from orbit, turned into a curriculum."
        image={assets.starfield}
        tone="stars"
        showCraft
      >
        <PrimaryLink to="/programmes">Explore the programmes</PrimaryLink>
        <GhostLink to="/get-involved">Join the movement</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ImageSlotCard
            slot={{
              id: 'IMG-A-02',
              spec: 'Portrait, 4:3. Existing portrait against a dark background, flight suit, three-quarter turn.',
              alt: 'Group Captain Shubhanshu Shukla, official mission portrait in flight suit',
              status: 'AVAILABLE',
              src: founderQuote.portrait,
            }}
            ratio="aspect-[4/3]"
            className="rounded-[2rem]"
          />
          <figure className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-12" data-reveal>
            <Tag>Founding quote</Tag>
            <blockquote className="mt-8 font-serif-display text-4xl leading-tight text-[#fffdf5] sm:text-5xl">
              {founderQuote.quote}
            </blockquote>
            <figcaption className="mt-8 border-t hairline pt-6">
              <p className="font-display text-xl font-semibold text-[#fffdf5]">{founderQuote.attribution}</p>
              <p className="mt-3 text-sm leading-7 text-amber-100/[0.78]">{founderQuote.relationship}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="How it started" title="The origin story" />
            <div className="mt-8 rounded-[2rem] border border-amber-200/30 bg-amber-300/[0.08] p-7" data-reveal>
              <p className="text-lg leading-9 text-[#e6e6e1]/[0.82]">
                [Approximately 200 words, first person if possible. Required from the Foundation: who started Earthizen, what they saw that made them start it, what the first classroom was, and what happened in it.]
              </p>
            </div>
          </div>
          <ImageSlotCard
            slot={{
              id: 'IMG-A-03',
              spec: 'The first classroom, or the founding moment the story describes. Documentary, unpolished, dated.',
              alt: 'Group Captain Shubhanshu Shukla with young students in their classroom',
              status: 'AVAILABLE',
              src: photos.classroomChildren,
            }}
            ratio="aspect-[3/2]"
            className="rounded-[2rem]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="What we are for" title="Vision & Mission" align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border hairline bg-white/[0.035] p-8" data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.76]">Vision</p>
            <p className="mt-6 font-serif-display text-3xl leading-tight text-[#fffdf5]">{visionMission.vision}</p>
          </article>
          <article className="rounded-[2rem] border hairline bg-white/[0.035] p-8" data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.76]">Mission</p>
            <p className="mt-6 text-lg leading-9 text-[#e6e6e1]/[0.82]">{visionMission.mission}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The people behind"
          title="The team and Leadership"
          sub="Five portrait slots are intentionally held until real names, roles and photographs are cleared."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {leadershipTiers.map((leader, index) => (
            <article key={leader.tier} className="rounded-[1.6rem] border hairline bg-white/[0.035] p-5" data-reveal>
              <div className="image-slot grid aspect-square place-items-center rounded-[1.2rem] p-4 text-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.78]">IMG-A-{String(index + 4).padStart(2, '0')}</p>
                  <p className="mt-3 text-xs leading-6 text-[#c8d4ea]/[0.62]">Portrait of [name], [role], Earthizen Foundation</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-red-100/[0.78]">BLOCKING</p>
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#fffdf5]">{leader.tier}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c8d4ea]/70">{leader.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Legal & Registration" title="Registered & Compliant" align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {complianceCards.map((card) => (
            <article key={card.title} className="glass-panel rounded-[1.6rem] p-6" data-reveal>
              <h3 className="font-display text-xl font-semibold text-[#fffdf5]">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#c8d4ea]/[0.72]">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
