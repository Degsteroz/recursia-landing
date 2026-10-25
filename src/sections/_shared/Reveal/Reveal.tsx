"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.sass";

type RevealProps = {
  className?: string;
  children: ReactNode;
};

export function Reveal({ className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (CSS.supports("animation-timeline: view()")) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.dataset.shown = "true";
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `${styles.reveal} ${className}` : styles.reveal}
    >
      {children}
    </div>
  );
}
