import { assets, boardMembers, complianceCards, founderQuote, photos, visionMission } from '@/data/content';
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
              spec: 'Portrait. Official portrait in the blue flight suit, direct gaze.',
              alt: 'Group Captain Shubhanshu Shukla, official portrait in his blue flight suit',
              status: 'AVAILABLE',
              src: founderQuote.portrait,
            }}
            ratio="aspect-[5/6]"
            className="mx-auto w-full max-w-[460px] rounded-[2rem]"
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
            <div className="mt-8 rounded-[2rem] border hairline bg-white/[0.035] p-7" data-reveal>
              <p className="text-lg leading-9 text-[#e6e6e1]/[0.82]">
                It began with a view. On his mission to the International Space Station, Group Captain Shubhanshu Shukla
                looked down at Earth and saw what every astronaut before him has seen: one planet, whole and borderless.
                He came home convinced that the perspective itself could be taught, and that the place to teach it was the
                classroom. The first sessions were simple: a school hall, a projector, and children asking whether the lines
                on their maps were visible from space. They are not. From that answer grew the Earthizen Foundation, and a
                curriculum that connects classrooms to communities, technology to purpose, and every child to the one home
                we share.
              </p>
            </div>
          </div>
          <ImageSlotCard
            slot={{
              id: 'IMG-A-03',
              spec: 'The first classroom, or the founding moment the story describes.',
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
            <p className="mt-6 text-xl leading-9 text-[#fffdf5]/[0.92]">{visionMission.vision}</p>
          </article>
          <article className="rounded-[2rem] border hairline bg-white/[0.035] p-8" data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-sky-200/[0.76]">Mission</p>
            <p className="mt-6 text-xl leading-9 text-[#fffdf5]/[0.92]">{visionMission.mission}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The people behind"
          title="Leadership & Advisory Board"
          sub="Astronauts, scientists and leaders guiding the foundation's mission, governance and global reach."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {boardMembers.map((member) => (
            <article key={member.name} className="flex flex-col overflow-hidden rounded-[1.6rem] border hairline bg-white/[0.035] transition hover:bg-white/[0.06]" data-reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.title}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-[#fffdf5]">{member.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-100/[0.78]">
                  {member.role} · {member.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#c8d4ea]/70">{member.bio}</p>
              </div>
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
