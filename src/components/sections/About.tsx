import { site } from "@/config/site";
import { Panel } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";

export function About() {
  if (!site.about.enabled) return null;

  return (
    <Panel id="about" as="section" shape="flat" innerClassName="grain bg-brand">
      <div className="halftone absolute inset-0 opacity-[0.14]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 20% 0%, rgb(var(--brand-soft) / .55), transparent 55%)",
        }}
      />

      <div className="relative px-5 py-14 md:px-10 md:py-20">
        <Reveal className="mb-9 flex justify-center md:mb-12">
          <SectionTitle>{site.about.title}</SectionTitle>
        </Reveal>

        <Reveal delay={90} className="mx-auto max-w-4xl">
          <div className="relative border-[var(--stroke)] border-ink bg-brand-deep/70 p-6 shadow-ink md:p-11">
            <span
              className="display pointer-events-none absolute -left-1 -top-8 select-none text-[7rem] leading-none text-pop/70 md:-top-12 md:text-[10rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            {site.about.paragraphs.map((p, i) => (
              <p
                key={p.slice(0, 24)}
                className={`text-[15px] leading-[1.75] text-paper/90 md:text-lg md:leading-[1.8] ${
                  i > 0 ? "mt-5" : ""
                }`}
              >
                {p}
              </p>
            ))}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-pop" />
              <span className="ui-font text-[11px] font-semibold uppercase tracking-[0.28em] text-pop">
                {site.brand.fullName}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

