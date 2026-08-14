import { fiveYearTargets, impactStories, photos } from '@/data/content';
import { FullBleed, GhostLink, SectionHeading, SolidLink, StatCounter } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

const measurementRules = [
  'Every Earthizen project produces an artefact — a device, a document, a resolution, a dataset. We publish what worked and what did not.',
  'Every school partnership is reviewed at the end of each term against outcomes agreed at the start.',
  'Every funder receives quarterly briefings and an annual audited impact report.',
  'Where a claim cannot be evidenced, we do not make it.',
];

export default function Impact() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.sharingSpacePhotos}
        alt="Group Captain Shubhanshu Shukla sharing photographs from orbit with reporters"
        eyebrow="Impact"
        title={
          <>
            Learning That
            <br />
            Changes Things.
          </>
        }
        sub="Every number here is a student who thought differently, a community that changed, a border that dissolved a little."
        short
      >
        <SolidLink to="/get-involved">Fund A Classroom</SolidLink>
        <GhostLink to="/gallery">See Field Notes</GhostLink>
      </FullBleed>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Five-Year Targets"
            title="The scale we're building"
            sub="These are targets, not results. They are published so we can be measured against them."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {fiveYearTargets.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Stories of Change"
            title="Impact from the field"
            sub="Six projects. Six places. Each one already finished, and each one documented."
          />
          <div className="mt-14 space-y-20">
            {impactStories.map((story, index) => (
              <article
                key={story.headline}
                className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? 'lg:[&>figure]:order-2' : ''}`}
              >
                <figure data-reveal>
                  <div className="aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                    <img src={story.photo} alt={story.photoAlt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
                    Foundation archive · story-specific image to follow
                  </figcaption>
                </figure>
                <div data-reveal>
                  <p className="eyebrow !text-white/60">{story.tag}</p>
                  <h3 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    {story.headline}
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] font-light leading-8 text-white/70">{story.body}</p>
                  <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.26em] text-white/50">{story.credit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow="How We Measure" title="Plain rules. Public evidence." align="center" />
          <div className="mt-12">
            {measurementRules.map((line) => (
              <p
                key={line}
                className="border-t hairline py-7 text-center text-lg font-light leading-8 text-white/80 sm:text-xl"
                data-reveal
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
