"use client";

export function FloatingParticles() {
  return (
    <div className="particles">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="particle" />
      ))}
    </div>
  );
}
