import { closingQuote, fiveYearTargets, founderQuote, photos, programmeVerticals } from '@/data/content';
import { FullBleed, GhostLink, SectionHeading, SolidLink, StatCounter } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

export default function Home() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.earthNight}
        alt="City lights across Earth at night, photographed from orbit"
        eyebrow="Earthizen Foundation · Section 8 Company"
        title={
          <>
            No Borders.
            <br />
            One Earth.
            <br />
            Infinite Futures.
          </>
        }
        sub="From space, there are no borders — only one beautiful, fragile Earth. We build the classrooms that teach children to see it that way, and the tools to act on it."
      >
        <SolidLink to="/get-involved">Partner With Us</SolidLink>
        <GhostLink to="/programmes">See The Programmes</GhostLink>
      </FullBleed>

      {programmeVerticals.map((vertical) => (
        <FullBleed
          key={vertical.id}
          image={vertical.image.src ?? photos.earthNight}
          alt={vertical.image.alt}
          eyebrow={`EF-${vertical.index} · ${vertical.subtitle}`}
          title={vertical.name}
          sub={vertical.body}
        >
          <GhostLink to={`/programmes#${vertical.id}`}>Learn More</GhostLink>
        </FullBleed>
      ))}

      <section className="border-t hairline bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Five-Year Targets"
            title="The scale we're building"
            sub="These are targets, not results — published openly so we can be held to them."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {fiveYearTargets.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <FullBleed
        image={photos.orbitEarth}
        alt="Earth's limb from orbit beside the station's solar arrays"
        eyebrow="The Founder"
        title={
          <span className="normal-case tracking-normal">
            “I looked down at Earth. I could not see any borders.”
          </span>
        }
        sub={`${founderQuote.attribution} — ${founderQuote.relationship}. One perspective, seen from orbit, turned into a curriculum.`}
      >
        <GhostLink to="/about">The Founder's Story</GhostLink>
      </FullBleed>

      <FullBleed
        image={photos.orbitalSunriseArrays}
        alt="An orbital sunrise breaking over Earth beyond the station's solar arrays"
        eyebrow="Closing Transmission"
        title={
          <>
            One Child at a Time.
            <br />
            One Classroom at a Time.
            <br />
            One Earth.
          </>
        }
        sub={closingQuote}
        short
      >
        <SolidLink to="/get-involved">Join The Movement</SolidLink>
        <GhostLink to="/impact">See The Evidence</GhostLink>
      </FullBleed>

      <PageEndBand />
    </main>
  );
}
