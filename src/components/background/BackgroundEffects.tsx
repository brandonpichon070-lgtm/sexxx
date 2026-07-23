"use client";

import { GradientLights } from "./GradientLights";
import { BackgroundNoise } from "./BackgroundNoise";
import { BackgroundCursor } from "./BackgroundCursor";
import { FloatingParticles } from "./FloatingParticles";

export function BackgroundEffects() {
  return (
    <>
      <GradientLights />

      <BackgroundNoise />

      <FloatingParticles />

      <BackgroundCursor />
    </>
  );
}
