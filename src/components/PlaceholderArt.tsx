import { cn } from "@/lib/utils";

export type ArtVariant = "portrait" | "scene" | "map" | "badge" | "burst";

interface Props {
  variant?: ArtVariant;
  /** Stable index -> deterministic colour/shape variation (no hydration drift). */
  index?: number;
  label?: string;
  className?: string;
}

const FILLS = ["fill-brand", "fill-ink", "fill-brand-deep", "fill-pop"];

/* ------------------------------------------------------------------ */
/*  Reusable halftone pattern                                          */
/* ------------------------------------------------------------------ */
function Halftone({ id, size = 12, r = 2.6 }: { id: string; size?: number; r?: number }) {
  return (
    <pattern
      id={id}
      width={size}
      height={size}
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(22)"
    >
      <circle cx={size / 2} cy={size / 2} r={r} className="fill-ink" opacity="0.5" />
    </pattern>
  );
}

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */
function Portrait({ i, uid }: { i: number; uid: string }) {
  const bg = FILLS[i % FILLS.length];
  const alt = FILLS[(i + 2) % FILLS.length];
  return (
    <svg
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <Halftone id={`ht-${uid}`} size={13} r={3} />
      </defs>
      <rect width="300" height="400" className={bg} />
      <rect width="300" height="400" fill={`url(#ht-${uid})`} opacity="0.45" />
      <path
        d={`M0 ${250 + (i % 3) * 22} L300 ${190 + (i % 4) * 20} L300 400 L0 400 Z`}
        className={alt}
        opacity="0.5"
      />
      {/* bust silhouette */}
      <g className="fill-ink" opacity="0.9">
        <circle cx="150" cy="150" r="62" />
        <path d="M150 224c-62 0-110 40-118 96-1.5 10 0 22 0 26h236c0-4 1.5-16 0-26-8-56-56-96-118-96z" />
      </g>
      <circle
        cx="150"
        cy="150"
        r="86"
        className="stroke-ink"
        strokeWidth="4"
        fill="none"
        opacity="0.35"
        strokeDasharray="10 9"
      />
    </svg>
  );
}

function Scene({ i, uid }: { i: number; uid: string }) {
  const bg = FILLS[(i + 1) % FILLS.length];
  const shape = FILLS[(i + 3) % FILLS.length];
  const rays = 22;
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <Halftone id={`ht-${uid}`} size={11} r={2.4} />
      </defs>
      <rect width="400" height="400" className={bg} />
      <g opacity="0.4">
        {Array.from({ length: rays }).map((_, k) => {
          const a = (k / rays) * Math.PI * 2 + (i % 5) * 0.12;
          const w = k % 2 === 0 ? 0.055 : 0.028;
          const x1 = 200 + Math.cos(a - w) * 460;
          const y1 = 200 + Math.sin(a - w) * 460;
          const x2 = 200 + Math.cos(a + w) * 460;
          const y2 = 200 + Math.sin(a + w) * 460;
          return (
            <path
              key={`ray-${a.toFixed(3)}`}
              d={`M200 200 L${x1} ${y1} L${x2} ${y2} Z`}
              className="fill-ink"
            />
          );
        })}
      </g>
      <rect width="400" height="400" fill={`url(#ht-${uid})`} opacity="0.3" />
      <g className={shape} opacity="0.9">
        {i % 3 === 0 && <circle cx="200" cy="200" r="86" />}
        {i % 3 === 1 && (
          <rect x="118" y="118" width="164" height="164" transform="rotate(12 200 200)" />
        )}
        {i % 3 === 2 && <path d="M200 96l92 168H108z" />}
      </g>
      <g className="stroke-ink" fill="none" strokeWidth="5">
        {i % 3 === 0 && <circle cx="200" cy="200" r="86" />}
        {i % 3 === 1 && (
          <rect x="118" y="118" width="164" height="164" transform="rotate(12 200 200)" />
        )}
        {i % 3 === 2 && <path d="M200 96l92 168H108z" />}
      </g>
    </svg>
  );
}

function Burst({ uid }: { uid: string }) {
  const rays = 34;
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <Halftone id={`ht-${uid}`} size={16} r={4} />
        <radialGradient id={`rg-${uid}`} cx="50%" cy="42%" r="72%">
          <stop offset="0%" stopColor="rgb(var(--brand-soft))" />
          <stop offset="58%" stopColor="rgb(var(--brand))" />
          <stop offset="100%" stopColor="rgb(var(--brand-deep))" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill={`url(#rg-${uid})`} />
      <g opacity="0.28" className="animate-spin-slow" style={{ transformOrigin: "600px 336px" }}>
        {Array.from({ length: rays }).map((_, k) => {
          const a = (k / rays) * Math.PI * 2;
          const w = k % 2 === 0 ? 0.036 : 0.016;
          const x1 = 600 + Math.cos(a - w) * 1500;
          const y1 = 336 + Math.sin(a - w) * 1500;
          const x2 = 600 + Math.cos(a + w) * 1500;
          const y2 = 336 + Math.sin(a + w) * 1500;
          return (
            <path
              key={`br-${a.toFixed(3)}`}
              d={`M600 336 L${x1} ${y1} L${x2} ${y2} Z`}
              className="fill-ink"
            />
          );
        })}
      </g>
      <rect width="1200" height="800" fill={`url(#ht-${uid})`} opacity="0.24" />
      <rect
        y="640"
        width="1200"
        height="160"
        className="fill-ink"
        opacity="0.18"
      />
    </svg>
  );
}

function MapArt({ uid }: { uid: string }) {
  const v = [70, 190, 300, 420, 560, 690, 820, 940, 1070];
  const h = [80, 175, 268, 360, 452, 545];
  return (
    <svg
      viewBox="0 0 1160 620"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <Halftone id={`ht-${uid}`} size={14} r={2.6} />
      </defs>
      <rect width="1160" height="620" className="fill-paper" />
      <rect width="1160" height="620" fill={`url(#ht-${uid})`} opacity="0.18" />
      {/* blocks */}
      <g className="fill-ink" opacity="0.07">
        {v.slice(0, -1).map((x, xi) =>
          h.slice(0, -1).map((y, yi) => (
            <rect
              key={`bk-${x}-${y}`}
              x={x + 10}
              y={y + 10}
              width={v[xi + 1] - x - 20}
              height={h[yi + 1] - y - 20}
            />
          )),
        )}
      </g>
      {/* streets */}
      <g className="stroke-ink" strokeWidth="5" opacity="0.5">
        {v.map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x - 26} y2="620" />
        ))}
        {h.map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="1160" y2={y + 14} />
        ))}
      </g>
      {/* main road */}
      <line
        x1="0"
        y1="330"
        x2="1160"
        y2="352"
        className="stroke-pop"
        strokeWidth="16"
        opacity="0.9"
      />
      <line
        x1="0"
        y1="330"
        x2="1160"
        y2="352"
        className="stroke-ink"
        strokeWidth="20"
        opacity="0.25"
      />
      {/* pin */}
      <g transform="translate(548 236)">
        <path
          d="M32 108S64 66 64 40A32 32 0 1 0 0 40c0 26 32 68 32 68z"
          className="fill-brand stroke-ink"
          strokeWidth="6"
        />
        <circle cx="32" cy="39" r="12" className="fill-paper stroke-ink" strokeWidth="5" />
      </g>
    </svg>
  );
}

function Badge({ initials, uid }: { initials: string; uid: string }) {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <Halftone id={`ht-${uid}`} size={10} r={2.2} />
      </defs>
      <path
        d="M120 10l96 30v82c0 58-42 92-96 108-54-16-96-50-96-108V40z"
        className="fill-brand stroke-ink"
        strokeWidth="8"
      />
      <path
        d="M120 10l96 30v82c0 58-42 92-96 108-54-16-96-50-96-108V40z"
        fill={`url(#ht-${uid})`}
        opacity="0.3"
      />
      <path
        d="M120 34l74 23v66c0 45-33 71-74 84-41-13-74-39-74-84V57z"
        fill="none"
        className="stroke-paper"
        strokeWidth="5"
        opacity="0.8"
      />
      <text
        x="120"
        y="146"
        textAnchor="middle"
        className="fill-paper display"
        style={{ fontSize: 76, letterSpacing: "0.04em" }}
      >
        {initials}
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
export function PlaceholderArt({
  variant = "scene",
  index = 0,
  label,
  className,
}: Props) {
  const uid = `${variant}-${index}`;
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-ink", className)}>
      {variant === "portrait" && <Portrait i={index} uid={uid} />}
      {variant === "scene" && <Scene i={index} uid={uid} />}
      {variant === "burst" && <Burst uid={uid} />}
      {variant === "map" && <MapArt uid={uid} />}
      {variant === "badge" && <Badge initials={label ?? "AB"} uid={uid} />}

      {label && variant !== "badge" && (
        <span className="ui-font pointer-events-none absolute bottom-0 left-0 z-10 bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-paper">
          {label}
        </span>
      )}
    </div>
  );
}

