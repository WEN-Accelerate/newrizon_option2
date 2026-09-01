import { assets, galleryDispatches } from '@/data/content';
import { GhostLink, ImageSlotCard, PageHero, PrimaryLink, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

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

      <section className="mx-auto max-w-[1500px] space-y-20 px-5 py-28 sm:px-8 lg:px-10">
        {galleryDispatches.map((dispatch) => (
          <article key={dispatch.title} className="rounded-[2.2rem] border hairline bg-white/[0.03] p-5 sm:p-8" data-reveal>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Tag>{dispatch.tag}</Tag>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber-100/[0.78]">{dispatch.date}</span>
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#fffdf5] sm:text-5xl">{dispatch.title}</h2>
              <p className="mt-5 text-base leading-8 text-[#c8d4ea]/[0.74]">{dispatch.caption}</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <ImageSlotCard
                slot={{
                  id: dispatch.images[0].id,
                  spec: 'Foundation archive photograph.',
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
                      spec: 'Foundation archive photograph.',
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
