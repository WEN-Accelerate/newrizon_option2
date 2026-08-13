import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  base: number;
  amp: number;
  speed: number;
  phase: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let stars: Star[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(180, Math.floor((width * height) / 11000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.7 + 0.35,
        base: Math.random() * 0.18 + 0.05,
        amp: Math.random() * 0.72 + 0.16,
        speed: Math.random() * 0.9 + 0.25,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const tw = reduced ? 0.5 : (Math.sin(time * 0.001 * star.speed + star.phase) + 1) / 2;
        const alpha = star.base + star.amp * tw;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * (reduced ? 1 : 0.9 + tw * 0.35), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 236, 248, ${Math.min(alpha, 0.92)})`;
        ctx.fill();
        if (star.r > 1.55) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 3.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(134, 66, 255, ${alpha * 0.08})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true" />;
}
