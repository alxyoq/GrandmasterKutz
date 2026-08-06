import type { CSSProperties } from "react";

/** Convert "#RRGGBB" (or "#RGB") to the "r g b" triple Tailwind needs. */
export function hexToRgbTriple(hex: string): string {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = Number.parseInt(h, 16);
  if (Number.isNaN(int)) return "0 0 0";
  return `${(int >> 16) & 255} ${(int >> 8) & 255} ${int & 255}`;
}

type ThemeShape = {
  ink: string;
  paper: string;
  brand: string;
  brandDeep: string;
  brandSoft: string;
  pop: string;
};

/** Theme block from site config -> CSS custom properties for <html>. */
export function themeStyle(theme: ThemeShape): CSSProperties {
  return {
    "--ink": hexToRgbTriple(theme.ink),
    "--paper": hexToRgbTriple(theme.paper),
    "--brand": hexToRgbTriple(theme.brand),
    "--brand-deep": hexToRgbTriple(theme.brandDeep),
    "--brand-soft": hexToRgbTriple(theme.brandSoft),
    "--pop": hexToRgbTriple(theme.pop),
  } as CSSProperties;
}
