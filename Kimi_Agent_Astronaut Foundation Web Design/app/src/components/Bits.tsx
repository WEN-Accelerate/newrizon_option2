import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ImageSlot } from '@/data/content';
import { assets } from '@/data/content';
import { useCountUp } from '@/hooks/useMotion';

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
      <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-sky-200/[0.78]">■ {eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[#fffdf5] sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-base leading-8 text-[#c8d4ea]/[0.72] sm:text-lg">{sub}</p>}
    </div>
  );
}

export function PrimaryLink({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
        dark
          ? 'bg-[#05060f] text-[#f1e9dd] hover:bg-violet-950'
          : 'bg-[#f1e9dd] text-[#05060f] hover:bg-sky-100'
      }`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full border border-[#f1e9dd]/30 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f1e9dd] transition hover:border-sky-200/70 hover:bg-sky-300/10 hover:text-sky-100"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  tone = 'night',
  children,
  showCraft = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  image: string;
  tone?: 'night' | 'day' | 'stars';
  children?: ReactNode;
  showCraft?: boolean;
}) {
  return (
    <section className="hero-vignette relative flex min-h-[92vh] items-end overflow-hidden pt-32">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          data-parallax={tone === 'day' ? 0.08 : 0.12}
          className="h-full w-full scale-105 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(134,66,255,0.22),transparent_28rem)]" />
      </div>
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      {showCraft && (
        <img
          src={assets.astronaut}
          alt="Stylised astronaut graphic"
          className="float-slow absolute right-[8%] top-[22%] hidden w-52 select-none drop-shadow-[0_0_42px_rgba(134,66,255,0.35)] md:block lg:w-64"
          data-parallax={-0.08}
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-10">
        <p data-page-intro className="font-mono text-[11px] uppercase tracking-[0.42em] text-sky-200/[0.82]">
          {eyebrow}
        </p>
        <h1 data-page-intro className="mt-5 max-w-6xl text-balance font-display text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-[#fffdf5] sm:text-6xl lg:text-7xl xl:text-8xl">
          {title}
        </h1>
        <p data-page-intro className="mt-7 max-w-2xl text-lg leading-8 text-[#e6e6e1]/[0.82] sm:text-xl">
          {sub}
        </p>
        {children && <div data-page-intro className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function ImageSlotCard({ slot, ratio = 'aspect-[16/10]', className = '' }: { slot: ImageSlot; ratio?: string; className?: string }) {
  const statusTone =
    slot.status === 'BLOCKING'
      ? 'text-red-200 border-red-200/40 bg-red-400/10'
      : slot.status === 'PERMISSION REQUIRED'
        ? 'text-amber-100 border-amber-200/40 bg-amber-300/10'
        : 'text-sky-100 border-sky-200/35 bg-sky-300/10';

  return (
    <figure className={`image-slot group relative ${ratio} overflow-hidden rounded-[1.6rem] ${className}`} data-reveal>
      {slot.src ? (
        <img src={slot.src} alt={slot.alt} className="h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-sky-100/80">{slot.id}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#c8d4ea]/[0.72]">{slot.spec}</p>
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05060f]/95 via-[#05060f]/[0.58] to-transparent p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#f1e9dd]/[0.24] bg-[#05060f]/[0.72] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1e9dd]">
            {slot.id}
          </span>
          <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${statusTone}`}>{slot.status}</span>
        </div>
        <figcaption className="mt-2 line-clamp-2 text-xs leading-5 text-[#e6e6e1]/[0.74]">{slot.alt}</figcaption>
      </div>
    </figure>
  );
}

export function OrbitDial({ items }: { items: string[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]" data-reveal>
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.24),rgba(134,66,255,0.12)_42%,transparent_70%)] animate-pulse-glow" />
      <div className="absolute inset-[16%] orbit-ring" />
      <div className="absolute inset-[28%] orbit-ring orbit-ring-reverse" />
      <div className="absolute inset-[40%] orbit-ring" />
      <div className="absolute left-1/2 top-1/2 grid h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-sky-100/25 bg-[#08111f] shadow-[0_0_70px_rgba(56,189,248,0.28)]">
        <img src={assets.earthDay} alt="Earth from orbit" className="h-full w-full object-cover opacity-90" />
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.26),transparent_32%)]" />
      </div>
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 43;
        const y = 50 + Math.sin(angle) * 43;
        return (
          <div
            key={item}
            className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border hairline bg-[#0b0b16]/[0.84] px-3 py-2 text-center shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-100/[0.82]">{String(i + 1).padStart(2, '0')}</span>
            <p className="mt-1 font-display text-sm font-semibold text-[#fffdf5]">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export function CounterStat({ value, suffix, label, copy }: { value: number; suffix: string; label: string; copy: string }) {
  const ref = useCountUp(value);
  return (
    <div className="glass-panel scanline rounded-[1.6rem] p-6" data-reveal>
      <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-[#fffdf5] sm:text-6xl">
        <span ref={ref}>{value.toLocaleString('en-IN')}</span>
        <span className="text-gradient-orbit">{suffix}</span>
      </p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-sky-100/70">{label}</p>
      <p className="mt-4 text-sm leading-7 text-[#c8d4ea]/[0.72]">{copy}</p>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-sky-200/[0.28] bg-sky-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100/[0.86]">
      {children}
    </span>
  );
}
