"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroWord.module.sass";

type HeroWordProps = {
  fontFamily: string;
};

const TEXT = {
  x: 800,
  y: 268,
  textAnchor: "middle" as const,
  fontWeight: 900,
  fontSize: 292,
  textLength: 1590,
  lengthAdjust: "spacingAndGlyphs" as const,
};

export function HeroWord({ fontFamily }: HeroWordProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const face = `${fontFamily}, sans-serif`;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  function reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function toSvg(event: { clientX: number; clientY: number }) {
    const svg = svgRef.current;
    if (!svg) return null;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const matrix = svg.getScreenCTM();
    if (!matrix) return null;
    return point.matrixTransform(matrix.inverse());
  }

  function placeLens(event: { clientX: number; clientY: number }, open: boolean) {
    const svg = svgRef.current;
    const point = toSvg(event);
    if (!svg || !point) return;
    const pos = svg.querySelector<SVGGElement>('[data-lens="pos"]');
    const scale = svg.querySelector<SVGGElement>('[data-lens="scale"]');
    if (!pos || !scale) return;
    pos.style.transform = `translate(${point.x}px, ${point.y}px)`;
    scale.style.transform = open ? "scale(1)" : "scale(0)";
  }

  return (
    <svg
      ref={svgRef}
      className={styles.word}
      viewBox="0 0 1600 300"
      width="100%"
      role="img"
      aria-label="RECURSIA"
      onMouseMove={(event) => {
        if (reduced()) return;
        placeLens(event, true);
      }}
      onMouseLeave={() => {
        const svg = svgRef.current;
        const scale = svg?.querySelector<SVGGElement>('[data-lens="scale"]');
        if (scale) scale.style.transform = "scale(0)";
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" || reduced()) return;
        placeLens(event, true);
      }}
      onPointerUp={(event) => {
        if (event.pointerType === "mouse") return;
        const svg = svgRef.current;
        window.setTimeout(() => {
          const scale = svg?.querySelector<SVGGElement>('[data-lens="scale"]');
          if (scale) scale.style.transform = "scale(0)";
        }, 280);
      }}
      onClick={(event) => {
        const svg = svgRef.current;
        if (!svg || reduced()) return;
        const point = toSvg(event);
        if (!point) return;
        const splash = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        splash.setAttribute("cx", String(point.x));
        splash.setAttribute("cy", String(point.y));
        splash.setAttribute("fill", "none");
        splash.setAttribute("stroke", "#fff");
        splash.setAttribute("stroke-width", "36");
        svg.querySelector('[data-lens="splashes"]')?.appendChild(splash);
        const started = performance.now();
        const step = (now: number) => {
          const progress = Math.min(1, (now - started) / 1100);
          splash.setAttribute("r", String(40 + progress * 900));
          splash.setAttribute("stroke-opacity", String(1 - progress));
          if (progress < 1) requestAnimationFrame(step);
          else splash.remove();
        };
        requestAnimationFrame(step);
      }}
    >
      <defs>
        <pattern id="rpat2" width="210" height="56" patternUnits="userSpaceOnUse">
          <rect width="210" height="56" fill="#0e0e0f" />
          <text x="4" y="23" fontFamily={face} fontWeight="800" fontSize="21" fill="#ffd400">
            RECURSIA
          </text>
          <text x="-101" y="51" fontFamily={face} fontWeight="800" fontSize="21" fill="#ffd400">
            RECURSIA
          </text>
          <text x="109" y="51" fontFamily={face} fontWeight="800" fontSize="21" fill="#ffd400">
            RECURSIA
          </text>
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="-210 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </pattern>
        <mask id="lensMask" maskUnits="userSpaceOnUse" x="-200" y="-200" width="2000" height="700">
          <g data-lens="pos" className={styles.pos}>
            <g data-lens="scale" className={styles.scale}>
              <circle r="120" fill="#fff" />
              <circle r="20" fill="none" stroke="#fff" strokeWidth="14">
                <animate attributeName="r" values="120;230" dur="1.6s" repeatCount="indefinite" />
                <animate
                  attributeName="stroke-opacity"
                  values="1;0"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="20" fill="none" stroke="#fff" strokeWidth="8">
                <animate
                  attributeName="r"
                  values="120;230"
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="1;0"
                  dur="1.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
          <g data-lens="splashes" />
        </mask>
        <pattern id="rpat" width="124" height="34" patternUnits="userSpaceOnUse">
          <rect width="124" height="34" fill="#ffd400" />
          <text x="2" y="14" fontFamily={face} fontWeight="800" fontSize="12.5" fill="#0e0e0f">
            RECURSIA
          </text>
          <text x="-60" y="31" fontFamily={face} fontWeight="800" fontSize="12.5" fill="#0e0e0f">
            RECURSIA
          </text>
          <text x="64" y="31" fontFamily={face} fontWeight="800" fontSize="12.5" fill="#0e0e0f">
            RECURSIA
          </text>
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="124 0"
            dur="8s"
            repeatCount="indefinite"
          />
        </pattern>
      </defs>
      <filter id="outline" x="-5%" y="-20%" width="110%" height="140%">
        <feMorphology operator="dilate" radius="2.5" />
      </filter>
      <text {...TEXT} fontFamily={face} fill="#0e0e0f" filter="url(#outline)">
        RECURSIA
      </text>
      <text {...TEXT} fontFamily={face} fill="url(#rpat)">
        RECURSIA
      </text>
      <text
        {...TEXT}
        fontFamily={face}
        fill="url(#rpat2)"
        mask="url(#lensMask)"
        style={{ pointerEvents: "none" }}
      >
        RECURSIA
      </text>
    </svg>
  );
}
