"use client";

import { ReactNode } from "react";
import { BackgroundEffects } from "@/components/background/BackgroundEffects";

interface Props {
  children: ReactNode;
}

export function BackgroundProvider({ children }: Props) {
  return (
    <>
      <BackgroundEffects />
      {children}
    </>
  );
}
