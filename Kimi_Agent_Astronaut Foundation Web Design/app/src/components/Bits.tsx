import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useCountUp } from '@/hooks/useMotion';

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="btn-ghost">
      {children}
    </Link>
  );
}

export function SolidLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="btn-solid">
      {children}
    </Link>
  );
}

/**
 * Full-viewport photographic section — the core device of this design.
 * Content sits bottom-left over a legibility scrim, SpaceX-style.
 */
export function FullBleed({
  image,
  alt = '',
  eyebrow,
  title,
  sub,
  children,
  short = false,
  focus = 'center',
}: {
  image: string;
  alt?: string;
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
  short?: boolean;
  focus?: 'center' | 'top';
}) {
  return (
    <section className={`relative flex w-full items-end overflow-hidden ${short ? 'min-h-[72svh]' : 'min-h-[100svh]'}`}>
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${focus === 'top' ? 'object-top' : 'object-center'}`}
      />
      <div className="scrim-hero absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 sm:px-10 sm:pb-20 lg:px-16">
        {eyebrow && (
          <p className="eyebrow" data-reveal>
            {eyebrow}
          </p>
        )}
        <h1
          className="mt-4 max-w-5xl text-balance font-display text-5xl font-bold uppercase leading-[0.98] tracking-[0.01em] sm:text-6xl lg:text-7xl"
          data-reveal
        >
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-base font-light leading-7 text-white/[0.82] sm:text-lg sm:leading-8" data-reveal>
            {sub}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-wrap gap-4" data-reveal>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-4xl`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[1.02] tracking-[0.01em] sm:text-5xl">
        {title}
      </h2>
      {sub && <p className={`mt-5 max-w-2xl text-base font-light leading-7 text-white/70 ${align === 'center' ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  );
}

export function StatCounter({ value, suffix, label, copy }: { value: number; suffix: string; label: string; copy: string }) {
  const ref = useCountUp(value);
  const unit = suffix.startsWith('K') ? 'K' : suffix.trim().startsWith('+') ? '+' : '';
  return (
    <div className="border-t-2 border-white/80 pt-5" data-reveal>
      <p className="tabular font-condensed text-6xl font-semibold leading-none sm:text-7xl">
        <span ref={ref}>{value.toLocaleString('en-IN')}</span>
        {unit && <span className="text-white/60">{unit}</span>}
      </p>
      <p className="mt-3 eyebrow !text-white">{label}</p>
      <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/60">{copy}</p>
    </div>
  );
}

export function PhotoFigure({
  src,
  alt,
  caption,
  ratio = 'aspect-[3/2]',
  className = '',
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <figure className={className} data-reveal>
      <div className={`${ratio} overflow-hidden bg-[#0a0a0a]`}>
        <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">{caption}</figcaption>
      )}
    </figure>
  );
}

export function CtaBand({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t hairline bg-black px-6 py-24 text-center sm:px-10">
      <p className="mx-auto max-w-4xl text-balance font-display text-3xl font-bold uppercase leading-tight tracking-[0.01em] sm:text-4xl" data-reveal>
        {title}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4" data-reveal>
        {children}
      </div>
    </section>
  );
}
