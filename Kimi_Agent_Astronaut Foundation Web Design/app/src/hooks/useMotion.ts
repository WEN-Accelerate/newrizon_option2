import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReveal<T extends HTMLElement>(selector = '[data-reveal]') {
  const scope = useRef<T | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el, index) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            delay: (index % 4) * 0.05,
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [selector]);

  return scope;
}

export function useParallax<T extends HTMLElement>() {
  const scope = useRef<T | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax || 0.18);
        gsap.to(el, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}

export function useCountUp(target: number, start = 'top 82%') {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.textContent = target.toLocaleString('en-IN');
    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: node,
        start,
        once: true,
      },
      onStart: () => {
        node.textContent = '0';
      },
      onUpdate: () => {
        node.textContent = Math.round(counter.value).toLocaleString('en-IN');
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, start]);

  return ref;
}

export function usePageIntro() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-page-intro]',
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.07, ease: 'power2.out' },
      );
    });
    return () => ctx.revert();
  }, []);
}
