import { useEffect, useMemo, useState } from "react";
import FluxLines from "./components/FluxLines";
import SplitText from "./components/SplitText";

const TITLE = "AI Daily";
const FOG_PURPLE = "#6B4C9A";
/** Soft lavender / fog-purple tints only — no white/gray that reads as ash */
const FLUX_COLORS = ["#F3ECF8", "#E0D2EE", "#C4B0DC", "#D8C6E8"];

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

/** Flux Lines only — softened so SplitText leads */
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
        speed={0.28}
        scale={1.35}
        turbulence={0.55}
        fluidity={0.16}
        rimWidth={0.28}
        sharpness={1.15}
        shimmer={0.2}
        glow={0.35}
        lineWidth={0.7}
        flowDirection="down"
        opacity={0.34}
        mouseInteraction={false}
        clickSwirl={false}
        intro={!calm}
        paused={calm}
        mixBlendMode="normal"
        style={{ position: "absolute", inset: 0 }}
      />
      {/* Soft cream veil — keeps lines from competing with title */}
      <div className="hero-flux-veil" aria-hidden="true" />
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
