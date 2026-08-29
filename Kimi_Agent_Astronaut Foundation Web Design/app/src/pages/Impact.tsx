import { assets, fiveYearTargets, impactStories } from '@/data/content';
import { CounterStat, GhostLink, ImageSlotCard, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

export default function Impact() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="Impact"
        title={
          <>
            Learning that <span className="text-gradient-orbit">changes things.</span>
          </>
        }
        sub="Every number here is a student who thought differently, a community that changed, a border that dissolved a little."
        image={assets.starfield}
        tone="stars"
      >
        <PrimaryLink to="/get-involved">Fund a classroom</PrimaryLink>
        <GhostLink to="/gallery">See field notes</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Five-Year Targets"
          title="The Scale We're Building"
          sub="These are targets, not results. They are published so we can be measured against them."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {fiveYearTargets.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Stories of Change"
          title="Impact from the Field"
          sub="Six projects. Six places. Each one already finished, and each one documented."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {impactStories.map((story, index) => (
            <article key={story.headline} className="group overflow-hidden rounded-[2rem] border hairline bg-white/[0.035]" data-reveal>
              <ImageSlotCard
                slot={{
                  id: story.image,
                  spec: 'Foundation archive photograph · story-specific image to follow; guardian consent required before publication.',
                  alt: story.photoAlt,
                  status: 'REPLACE',
                  src: story.photo,
                }}
                ratio="aspect-[4/3]"
                className="rounded-none border-0"
              />
              <div className="p-7">
                <Tag>{story.tag}</Tag>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#fffdf5]">
                  {story.headline}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#c8d4ea]/[0.72]">{story.body}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t hairline pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-sky-100/[0.68]">{story.credit}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-100/70">Evidence: [required]</p>
                </div>
                <p className="sr-only">Story {index + 1}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="How we measure" title="Plain rules. Public evidence." align="center" />
        <div className="mt-14">
          {[
            ['Artefacts, not claims', 'Every Earthizen project produces an artefact: a device, a document, a resolution, a dataset. We publish what worked and what did not.'],
            ['Term-end reviews', 'Every school partnership is reviewed at the end of each term against outcomes agreed at the start.'],
            ['Audited reporting', 'Every funder receives quarterly briefings and an annual audited impact report.'],
            ['Evidence first', 'Where a claim cannot be evidenced, we do not make it.'],
          ].map(([rule, line], index) => (
            <div key={rule} className="grid gap-3 border-t hairline py-7 sm:grid-cols-[64px_240px_1fr] sm:items-baseline" data-reveal>
              <span className="font-display text-2xl font-semibold text-sky-200/50">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg font-semibold text-[#fffdf5]">{rule}</h3>
              <p className="text-base leading-8 text-[#c8d4ea]/[0.78]">{line}</p>
            </div>
          ))}
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
