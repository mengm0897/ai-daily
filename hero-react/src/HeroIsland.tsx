import { useEffect, useMemo, useState } from "react";
import FluxLines from "./components/FluxLines";
import SplitText from "./components/SplitText";

const TITLE = "AI Daily";
const FOG_PURPLE = "#6B4C9A";
/** cream / fog-purple family — no indigo */
const FLUX_COLORS = ["#FFFFFF", "#6B4C9A", "#C9B8E0", "#F7F4EF"];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isHeroShot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get("heroShot") === "1";
  } catch {
    return false;
  }
}

/** Flux Lines only — Soft Aurora removed */
export function HeroBgMount() {
  const [calm, setCalm] = useState(false);

  useEffect(() => {
    setCalm(prefersReducedMotion() || isHeroShot());
  }, []);

  return (
    <div className="hero-bg-stack">
      <FluxLines
        className="hero-flux-lines"
        colors={FLUX_COLORS}
        lightMode
        transparent
        speed={0.34}
        scale={1.4}
        turbulence={0.75}
        fluidity={0.14}
        rimWidth={0.22}
        sharpness={1.85}
        shimmer={0.6}
        glow={1}
        lineWidth={1.05}
        flowDirection="down"
        opacity={0.62}
        mouseInteraction={false}
        clickSwirl={false}
        intro={!calm}
        paused={calm}
        mixBlendMode="soft-light"
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
  );
}

export function TitleMount({ text = TITLE }: { text?: string }) {
  const [staticMode, setStaticMode] = useState(true);

  useEffect(() => {
    setStaticMode(prefersReducedMotion() || isHeroShot());
  }, []);

  const className = useMemo(
    () => `hero-split-title${staticMode ? " hero-split-title--static" : ""}`,
    [staticMode]
  );

  if (staticMode) {
    return (
      <h1 className={className} style={{ color: FOG_PURPLE, textAlign: "center" }}>
        {text}
      </h1>
    );
  }

  return (
    <SplitText
      text={text}
      tag="h1"
      className={className}
      color={FOG_PURPLE}
      textAlign="center"
      splitType="chars"
      effect="rise"
      trigger="load"
      delay={90}
      duration={1.55}
      staggerFrom="center"
      from={{ opacity: 0, y: 140, scale: 0.55 }}
      to={{ opacity: 1, y: 0, scale: 1 }}
      ease="power3.out"
      threshold={0.1}
      rootMargin="0px"
    />
  );
}

export const HeroAurora = HeroBgMount;
export const HeroTitle = TitleMount;
