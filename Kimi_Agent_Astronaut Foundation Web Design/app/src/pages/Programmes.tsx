import { assets, programmeVerticals } from '@/data/content';
import { GhostLink, ImageSlotCard, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

export default function Programmes() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="Programmes"
        title={
          <>
            Four Programme <span className="text-gradient-orbit">Verticals</span>
          </>
        }
        sub="Four interconnected pillars, each distinct, each essential. Together they form a complete education for planetary citizenship."
        image={assets.starfield}
        tone="stars"
      >
        <PrimaryLink to="/get-involved">Partner With Us</PrimaryLink>
        <GhostLink to="/impact">See the Evidence</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.74]">Vertical map</p>
            <div className="mt-5 grid gap-3">
              {programmeVerticals.map((vertical) => (
                <a
                  key={vertical.id}
                  href={`#${vertical.id}`}
                  className="rounded-2xl border hairline bg-white/[0.035] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c8d4ea]/70 transition hover:border-sky-200/45 hover:text-sky-100"
                >
                  {vertical.index} · {vertical.name}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-28">
            {programmeVerticals.map((vertical, index) => (
              <section key={vertical.id} id={vertical.id} className="scroll-mt-28">
                <div className={`grid items-start gap-8 ${index % 2 ? 'lg:grid-cols-[0.9fr_1.1fr]' : 'lg:grid-cols-[1.1fr_0.9fr]'}`}>
                  <div className={index % 2 ? 'lg:order-2' : ''}>
                    <Tag>{vertical.subtitle}</Tag>
                    <h2 className="mt-5 font-display text-5xl font-semibold tracking-[-0.05em] text-[#fffdf5] sm:text-6xl">
                      {vertical.index} · {vertical.name}
                    </h2>
                    <p className="mt-6 text-lg leading-9 text-[#e6e6e1]/80">{vertical.intro}</p>
                    <div className="mt-8 grid gap-4">
                      {vertical.initiatives.map((initiative) => (
                        <article key={initiative.title} className="rounded-[1.4rem] border hairline bg-white/[0.035] p-5 transition hover:bg-white/[0.06]" data-reveal>
                          <h3 className="font-display text-xl font-semibold text-[#fffdf5]">{initiative.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-[#c8d4ea]/[0.72]">{initiative.copy}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 ? 'lg:order-1' : ''}>
                    <ImageSlotCard slot={vertical.image} ratio="aspect-[3/2]" className="rounded-[2rem]" />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-28 sm:px-8 lg:px-10">
        <div className="glass-panel rounded-[2rem] p-8 text-center sm:p-12" data-reveal>
          <SectionHeading
            eyebrow="Build with us"
            title="Every vertical needs schools, funders and mentors."
            sub="Bring one pillar into a classroom, or help launch the whole constellation."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryLink to="/get-involved">Partner A School</PrimaryLink>
            <GhostLink to="/contact">Talk to the team</GhostLink>
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
