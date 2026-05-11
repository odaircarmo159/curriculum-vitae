import type { CSSProperties } from "react";

export function ZigZag({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 60 30" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="2,28 12,4 22,28 32,4 42,28 52,4 58,18" />
    </svg>
  );
}

export function Stairs({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="2,58 2,42 18,42 18,28 34,28 34,14 50,14 50,2" />
    </svg>
  );
}

export function Diamonds({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="block h-3 w-3 border-2 border-current rotate-45" />
      <span className="block h-3 w-3 bg-current rotate-45" />
      <span className="block h-3 w-3 bg-current rotate-45" />
      <span className="block h-3 w-3 bg-current rotate-45" />
    </div>
  );
}
