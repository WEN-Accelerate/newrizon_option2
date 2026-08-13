import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, pageEndCopy } from '@/data/content';
import Starfield from '@/components/Starfield';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Earthizen Foundation home">
      <span className="relative grid h-11 w-11 place-items-center rounded-full border border-sky-200/30 bg-sky-300/10 shadow-[0_0_28px_rgba(56,189,248,0.22)]">
        <span className="absolute inset-1 rounded-full border border-violet-300/30 orbit-ring" />
        <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-sky-300 via-violet-400 to-amber-300" />
      </span>
      <span className="leading-none">
        <span className="block font-mono text-[10px] uppercase tracking-[0.42em] text-sky-100/70">Earthizen</span>
        <span className="mt-1 block font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#f1e9dd]">Foundation</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[#05060f]/[0.68] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] transition-colors ${
                  isActive ? 'bg-sky-300/[0.12] text-sky-100' : 'text-[#c8d4ea]/[0.72] hover:bg-white/5 hover:text-[#f1e9dd]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/get-involved"
            className="group inline-flex items-center gap-2 rounded-full border border-sky-200/30 bg-sky-300/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-sky-100 transition hover:border-amber-200/50 hover:bg-amber-300/15 hover:text-amber-100"
          >
            Partner With Us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border hairline bg-white/5 text-[#f1e9dd] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t hairline bg-[#05060f]/[0.94] px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-[1500px] gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] ${
                    isActive ? 'bg-sky-300/[0.12] text-sky-100' : 'text-[#c8d4ea]/75'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="mt-2 rounded-2xl border border-amber-200/40 bg-amber-300/[0.12] px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] text-amber-100"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function PageEndBand() {
  return (
    <section className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-10">
      <div className="image-slot scanline relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-10 lg:px-16" data-reveal>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(134,66,255,0.35),transparent_55%)]" />
        <p className="relative mx-auto max-w-4xl font-serif-display text-3xl leading-tight text-[#fffdf5] sm:text-4xl lg:text-5xl">
          {pageEndCopy}
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/get-involved"
            className="rounded-full bg-[#f1e9dd] px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#05060f] transition hover:bg-sky-100"
          >
            Partner A School
          </Link>
          <Link
            to="/get-involved"
            className="rounded-full border border-[#f1e9dd]/35 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f1e9dd] transition hover:border-sky-200/70 hover:text-sky-100"
          >
            Join As An Earthizen
          </Link>
        </div>
        <p className="relative mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[#c8d4ea]/[0.52]">IMG-X-04 · page-end band placeholder · TO COMMISSION</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t hairline bg-[#04050c]/90">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-md text-sm leading-7 text-[#c8d4ea]/[0.72]">
            EARTHIZEN FOUNDATION — Section 8 Company · India-First, Global Vision. From space, there are no borders — only one beautiful, fragile Earth.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#c8d4ea]/[0.48]">
            CIN [ ] · CSR-1 [ ] · 12A [ ] · 80G [ ]
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky-100/80">Navigate</p>
          <div className="mt-5 grid gap-3">
            {[...navLinks, { label: 'Contact', to: '/contact' }].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-[#c8d4ea]/[0.72] transition hover:text-[#f1e9dd]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky-100/80">Dispatches from the movement</p>
          <form className="mt-5 flex overflow-hidden rounded-full border hairline bg-white/5 p-1" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email for monthly field notes"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#f1e9dd] outline-none placeholder:text-[#c8d4ea]/[0.42]"
            />
            <button className="rounded-full bg-sky-300 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#05060f]">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs leading-6 text-[#c8d4ea]/55">
            Contact: [Registered address, New Delhi] · hello@[domain] · partnerships@[domain] · [phone]
          </p>
        </div>
      </div>
      <div className="border-t hairline py-5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#c8d4ea]/[0.42]">
        © 2026 Earthizen Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Starfield />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
