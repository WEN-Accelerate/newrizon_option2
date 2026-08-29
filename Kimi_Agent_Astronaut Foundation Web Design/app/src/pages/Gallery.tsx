import { assets, galleryDispatches } from '@/data/content';
import { GhostLink, ImageSlotCard, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

const dispatchRules = [
  ['Vertical tag', 'ORBIT / NEXUS / BRIDGE / COSMOS · one only'],
  ['Title', 'Place-led, not programme-led'],
  ['Date', 'Month and year, always visible'],
  ['Caption', 'Two sentences maximum: what is happening, and why it mattered'],
  ['Images', 'Three to six per dispatch. Distinct assets; never reused across dispatches.'],
  ['Alt text', 'Required field, cannot be saved empty. Describe the action, not the composition.'],
  ['Credit', 'Photographer name and consent status recorded against every image'],
];

export default function Gallery() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="Field Notes"
        title={
          <>
            Moments from the <span className="text-gradient-orbit">Movement</span>
          </>
        }
        sub="From classrooms in Dharavi to satellite labs in Ladakh: every photograph is a step toward a borderless world."
        image={assets.starfield}
        tone="stars"
      >
        <PrimaryLink to="/get-involved">Partner A School</PrimaryLink>
        <GhostLink to="/impact">Read impact stories</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Dispatch template"
          title="One record. Infinite field notes."
          sub="Every gallery entry uses the same fields, so the CMS record is identical each time and the page grows without a redesign."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {dispatchRules.map(([field, rule]) => (
            <article key={field} className="rounded-[1.4rem] border hairline bg-white/[0.035] p-5" data-reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky-100/[0.72]">{field}</p>
              <p className="mt-4 text-sm leading-7 text-[#c8d4ea]/[0.72]">{rule}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] space-y-20 px-5 pb-28 sm:px-8 lg:px-10">
        {galleryDispatches.map((dispatch) => (
          <article key={dispatch.title} className="rounded-[2.2rem] border hairline bg-white/[0.03] p-5 sm:p-8" data-reveal>
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag>{dispatch.tag}</Tag>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber-100/[0.78]">{dispatch.date}</span>
                  <span className="rounded-full border border-sky-200/35 bg-sky-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100">
                    {dispatch.status}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#fffdf5] sm:text-5xl">{dispatch.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#c8d4ea]/[0.74]">{dispatch.caption}</p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#c8d4ea]/45">{dispatch.images[0].id} – {dispatch.images[dispatch.images.length - 1].id}</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <ImageSlotCard
                slot={{
                  id: dispatch.images[0].id,
                  spec: 'Lead dispatch image · foundation archive photograph.',
                  alt: dispatch.images[0].alt,
                  status: dispatch.status,
                  src: dispatch.images[0].src,
                }}
                ratio="aspect-[16/9]"
                className="rounded-[1.6rem]"
              />
              <div className="grid grid-cols-2 gap-4">
                {dispatch.images.slice(1).map((image) => (
                  <ImageSlotCard
                    key={image.id}
                    slot={{
                      id: image.id,
                      spec: 'Supporting dispatch image · foundation archive photograph.',
                      alt: image.alt,
                      status: dispatch.status,
                      src: image.src,
                    }}
                    ratio="aspect-[4/3]"
                    className="rounded-[1.2rem]"
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <PageEndBand />
    </main>
  );
}
