import { galleryDispatches, photos } from '@/data/content';
import { FullBleed, GhostLink, PhotoFigure, SolidLink } from '@/components/Bits';
import { PageEndBand } from '@/components/Layout';
import { useReveal } from '@/hooks/useMotion';

export default function Gallery() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <main ref={scope} className="bg-black">
      <FullBleed
        image={photos.pressInteraction}
        alt="Group Captain Shubhanshu Shukla speaking with national media"
        eyebrow="Gallery"
        title={
          <>
            Moments From
            <br />
            The Movement
          </>
        }
        sub="From classrooms to villages to orbit — every photograph is a step toward a borderless world."
        short
      >
        <SolidLink to="/get-involved">Partner A School</SolidLink>
        <GhostLink to="/impact">Read Impact Stories</GhostLink>
      </FullBleed>

      {galleryDispatches.map((dispatch) => (
        <section key={dispatch.title} className="border-t hairline bg-black px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl" data-reveal>
              <p className="eyebrow !text-white/60">
                {dispatch.tag} · {dispatch.date}
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                {dispatch.title}
              </h2>
              <p className="mt-5 text-[15px] font-light leading-8 text-white/70">{dispatch.caption}</p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <PhotoFigure
                src={dispatch.images[0].src}
                alt={dispatch.images[0].alt}
                caption={dispatch.images[0].alt}
                ratio="aspect-[16/9]"
              />
              <div className="grid grid-cols-2 gap-4">
                {dispatch.images.slice(1).map((image) => (
                  <PhotoFigure key={image.id} src={image.src} alt={image.alt} ratio="aspect-[4/3]" />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <PageEndBand />
    </main>
  );
}
