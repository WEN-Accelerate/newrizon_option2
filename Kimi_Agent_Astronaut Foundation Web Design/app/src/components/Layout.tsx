import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, pageEndCopy } from '@/data/content';

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
    <Link to="/" aria-label="Earthizen Foundation home" className="select-none">
      <span className="font-display text-lg font-bold uppercase tracking-[0.5em] text-white">Earthizen</span>
    </Link>
  );
}

const allLinks = [...navLinks, { label: 'Contact', to: '/contact' }];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b hairline bg-black/[0.88] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {!scrolled && !open && <div className="scrim-top pointer-events-none absolute inset-x-0 top-0 h-28" />}
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Wordmark />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
          {allLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  isActive ? 'text-white underline decoration-2 underline-offset-8' : 'text-white/75 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="h-svh overflow-y-auto bg-black px-6 pb-16 pt-6 xl:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {allLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `border-b hairline py-5 font-display text-2xl font-bold uppercase tracking-[0.06em] ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/get-involved" className="btn-ghost mt-10 w-full">
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}

export function PageEndBand() {
  return (
    <section className="border-t hairline bg-black px-6 py-20 text-center sm:px-10">
      <p className="mx-auto max-w-3xl text-balance text-lg font-light leading-8 text-white/75" data-reveal>
        {pageEndCopy}
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4" data-reveal>
        <Link to="/get-involved" className="btn-solid">
          Partner A School
        </Link>
        <Link to="/get-involved" className="btn-ghost">
          Join As Earthizen
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline bg-black">
      <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="font-display text-base font-bold uppercase tracking-[0.5em] text-white">Earthizen</span>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer navigation">
            {allLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="max-w-2xl text-xs font-light leading-6 text-white/45">
            Earthizen Foundation — Section 8 Company · India-First, Global Vision. From space, there are no borders — only one
            beautiful, fragile Earth.
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
            © 2026 Earthizen Foundation · CIN [ ] · CSR-1 [ ] · 12A [ ] · 80G [ ]
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
