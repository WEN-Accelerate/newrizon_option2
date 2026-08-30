import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { assets, closingQuote, coreValues, fiveYearTargets, photos, programmeVerticals, roadmap, visionMission, visuals } from '@/data/content';
import { CounterStat, GhostLink, ImageSlotCard, OrbitDial, PageHero, PrimaryLink, SectionHeading, Tag } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { usePageIntro, useParallax, useReveal } from '@/hooks/useMotion';

export default function Home() {
  const scope = useReveal<HTMLDivElement>();
  useParallax();
  usePageIntro();

  return (
    <main ref={scope} className="relative z-10">
      <PageHero
        eyebrow="A Section 8 Foundation for planetary citizenship"
        title={
          <>
            No Borders. <span className="text-gradient-orbit">One Earth.</span>
            <br /> Infinite Futures.
          </>
        }
        sub="From space, there are no borders. Only one beautiful, fragile Earth. We build the classrooms that teach children to see it that way, and the tools to act on it."
        image={photos.earthNight}
        showCraft
      >
        <PrimaryLink to="/get-involved">Partner With Us</PrimaryLink>
        <GhostLink to="/programmes">See the Programmes</GhostLink>
      </PageHero>

      <section className="relative mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-panel relative flex flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10" data-reveal>
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.76]">Card 1 · Vision</p>
            <p className="mt-6 flex-1 font-serif-display text-3xl leading-tight text-[#fffdf5] sm:text-4xl">{visionMission.vision}</p>
            <img
              src={visuals.visionTelescope}
              alt="Stargazer at a telescope beneath the Milky Way"
              className="mt-8 aspect-[16/7] w-full rounded-[1.4rem] object-cover"
              loading="lazy"
            />
          </article>
          <article className="glass-panel relative flex flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10" data-reveal>
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.76]">Card 2 · Mission</p>
            <p className="mt-6 flex-1 text-lg leading-9 text-[#e6e6e1]/[0.84]">{visionMission.mission}</p>
            <img
              src={visuals.missionCollaboration}
              alt="Students collaborating around a holographic globe in a maker lab"
              className="mt-8 aspect-[16/7] w-full rounded-[1.4rem] object-cover"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img src={assets.earthDay} alt="" data-parallax={0.14} className="h-full w-full scale-110 object-cover opacity-22" />
          <div className="absolute inset-0 bg-[#05060f]/[0.72]" />
        </div>
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="5 Core Values"
            title="The values that orbit every classroom."
            sub="From space, there are no borders. Only one beautiful, fragile Earth."
            align="center"
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <OrbitDial items={coreValues.map((v) => v.name)} />
            <div className="grid gap-4">
              {coreValues.map((value, index) => (
                <article key={value.name} className="group grid gap-3 border-b hairline py-5 sm:grid-cols-[72px_180px_1fr] sm:items-baseline" data-reveal>
                  <span className="font-mono text-sm text-sky-200/70">#{index + 1}</span>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#fffdf5]">{value.name}</h3>
                  <p className="text-sm leading-7 text-[#c8d4ea]/[0.72]">{value.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Programme Verticals"
            title="Four pillars. One planetary classroom."
            sub="Four interconnected pillars, each distinct, each essential. Together they form a complete education for planetary citizenship."
          />
          <GhostLink to="/programmes">Open Programmes</GhostLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programmeVerticals.map((vertical) => (
            <article key={vertical.id} className="group flex flex-col rounded-[1.8rem] border hairline bg-white/[0.035] p-4 transition hover:-translate-y-2 hover:bg-white/[0.06]" data-reveal>
              <ImageSlotCard slot={{ ...vertical.image, id: vertical.image.id.replace('IMG-P', 'IMG-H') }} ratio="aspect-[16/11]" className="rounded-[1.35rem]" />
              <div className="flex flex-1 flex-col p-3 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-200/[0.68]">{vertical.index} · {vertical.name}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#fffdf5]">{vertical.subtitle}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#c8d4ea]/70">{vertical.body}</p>
                <Link to={`/programmes#${vertical.id}`} className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-amber-100/[0.86] transition hover:text-amber-50">
                  Enter vertical <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Five-Year Targets"
          title="Ambitious goals. Measurable impact. One Earth at a time."
          sub="This is what we are building towards, stated openly, so we can be held to it."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {fiveYearTargets.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img src={photos.orbitalSunriseArrays} alt="" data-parallax={0.16} className="h-full w-full scale-110 object-cover opacity-42" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05060f] via-[#05060f]/[0.58] to-[#05060f]" />
        </div>
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Expansion Roadmap" title="A launch sequence for a borderless movement." />
          <div className="relative mt-14">
            <div className="grid gap-5 lg:grid-cols-3">
              {roadmap.map((phase, index) => (
                <article key={phase.phase} className="glass-panel relative overflow-hidden rounded-[1.8rem] p-7" data-reveal>
                  <span className="absolute right-5 top-5 font-display text-7xl font-semibold tracking-[-0.08em] text-white/[0.06]">0{index + 1}</span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-100/80">{phase.horizon}</p>
                  <h3 className="mt-4 max-w-sm font-display text-2xl font-semibold leading-tight text-[#fffdf5]">{phase.phase}</h3>
                  <ul className="mt-6 space-y-3">
                    {phase.milestones.map((milestone) => (
                      <li key={milestone} className="flex gap-3 text-sm leading-6 text-[#c8d4ea]/[0.72]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center" data-reveal>
          <Tag>Closing transmission</Tag>
          <p className="mt-8 font-serif-display text-4xl leading-tight text-[#fffdf5] sm:text-5xl lg:text-6xl">{closingQuote}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryLink to="/get-involved">Partner A School</PrimaryLink>
            <GhostLink to="/get-involved">CSR & Funding</GhostLink>
            <GhostLink to="/get-involved">Join As An Earthizen</GhostLink>
          </div>
        </div>
      </section>

      <PageEndBand />
    </main>
  );
}
