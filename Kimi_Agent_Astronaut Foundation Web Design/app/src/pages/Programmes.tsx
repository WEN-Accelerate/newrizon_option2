import { impactStories, photos, programmeVerticals } from '@/data/content';
import { FullBleed, GhostLink, SolidLink } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

export default function Programmes() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.earthNightCityLights}
        alt="Networks of night-time city lights tracing the planet below"
        eyebrow="Programmes"
        title={
          <>
            Four Verticals.
            <br />
            One Planetary Classroom.
          </>
        }
        sub="Four interconnected pillars — each distinct, each essential. Together they form a complete education for planetary citizenship."
        short
      >
        <SolidLink to="/get-involved">Partner With Us</SolidLink>
        <GhostLink to="/impact">See The Evidence</GhostLink>
      </FullBleed>

      {programmeVerticals.map((vertical) => (
        <article key={vertical.id} id={vertical.id} className="scroll-mt-16">
          <FullBleed
            image={vertical.image.src ?? photos.earthNight}
            alt={vertical.image.alt}
            eyebrow={`EF-${vertical.index} · ${vertical.subtitle}`}
            title={vertical.name}
            sub={vertical.intro}
            short
          />
          <section className="border-t hairline bg-black px-6 py-20 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div data-reveal>
                <p className="eyebrow">Initiatives</p>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  Inside {vertical.name}
                </h2>
              </div>
              <div>
                {vertical.initiatives.map((initiative) => (
                  <div key={initiative.title} className="border-t hairline py-6 first:border-t-0 first:pt-0" data-reveal>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">{initiative.title}</h3>
                    <p className="mt-3 max-w-3xl text-[15px] font-light leading-7 text-white/70">{initiative.copy}</p>
                  </div>
                ))}
                {(() => {
                  const story = impactStories.find((s) => s.tag.startsWith(vertical.name));
                  if (!story) return null;
                  return (
                    <div className="mt-4 border-t-2 border-white/80 pt-6" data-reveal>
                      <p className="eyebrow !text-white/60">From the field · {story.credit}</p>
                      <p className="mt-3 max-w-3xl text-lg font-light leading-8 text-white/85">
                        {story.headline} {story.body}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>
        </article>
      ))}

      <PageEndBand />
    </main>
  );
}
