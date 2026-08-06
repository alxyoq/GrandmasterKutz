import { site } from "@/config/site";
import { Panel, SmartImage } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { Mail, Phone } from "../Icons";

export function ContactBubble() {
  return (
    <Panel
      id="contact"
      as="section"
      shape="top-down"
      mobileShape="flat"
      className="h-full"
      innerClassName="bg-paper"
    >
      <div className="halftone-brand absolute inset-0 opacity-70" />

      <div className="relative flex h-full items-center justify-center px-5 py-12 md:px-7">
        <Reveal className="w-full max-w-[300px]">
          <div className="relative">
            {/* bubble */}
            <div className="relative rounded-[46%_54%_48%_52%/58%_42%_58%_42%] border-[var(--stroke)] border-ink bg-paper px-6 py-8 text-center shadow-ink">
              <p className="ui-font text-xs font-semibold uppercase tracking-[0.26em] text-ink/70">
                {site.contactPanel.heading}
              </p>

              <a
                href={site.booking.url}
                target="_blank"
                rel="noreferrer"
                className="btn-comic mt-4 w-full px-4 py-3 text-xs"
              >
                <span className="display tracking-[0.08em]">
                  {site.booking.label}
                </span>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="ui-font link-underline mt-5 flex items-center justify-center gap-2 text-[13px] font-medium text-ink"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{site.contact.email}</span>
              </a>

              <a
                href={site.contact.phoneHref}
                className="ui-font link-underline mt-1.5 flex items-center justify-center gap-2 text-[13px] font-medium text-ink"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                {site.contact.phone}
              </a>
            </div>

            {/* tail */}
            <svg
              viewBox="0 0 80 90"
              className="absolute -bottom-[62px] left-9 h-[74px] w-[66px]"
              aria-hidden="true"
            >
              <path
                d="M4 2C22 26 30 54 24 86 44 62 62 34 74 6z"
                className="fill-paper stroke-ink"
                strokeWidth="7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

export function Hours() {
  if (!site.hours.enabled) return null;

  return (
    <Panel
      id="hours"
      as="section"
      shape="top-up"
      mobileShape="flat"
      className="h-full"
      innerClassName="bg-ink"
    >
      {/* backdrop */}
      <div className="absolute inset-0 opacity-40 grayscale">
        <SmartImage
          src={site.hours.backgroundImage}
          alt=""
          variant="scene"
          index={5}
        />
      </div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="halftone-light absolute inset-0 opacity-50" />

      <div className="relative flex h-full flex-col justify-center px-5 py-12 md:px-12 md:py-14">
        <Reveal className="mb-7 flex justify-center">
          <SectionTitle size="md">{site.hours.title}</SectionTitle>
        </Reveal>

        <ul className="mx-auto w-full max-w-md">
          {site.hours.rows.map((row, i) => {
            const closed = /closed/i.test(row.value);
            return (
              <Reveal
                as="li"
                key={row.day}
                delay={i * 45}
                className="flex items-baseline gap-3 border-b border-paper/15 py-2 last:border-b-0"
              >
                <span className="ui-font w-[4.5rem] shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-paper/70 sm:w-28 sm:text-base">
                  <span className="sm:hidden">{row.short}</span>
                  <span className="hidden sm:inline">{row.day}</span>
                </span>
                <span className="h-px flex-1 border-b border-dotted border-paper/25" />
                <span
                  className={`ui-font text-right text-sm font-semibold tracking-wide sm:text-base ${
                    closed ? "text-brand-soft" : "text-paper"
                  }`}
                >
                  {row.value}
                </span>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={240} className="mx-auto mt-6 max-w-md">
          <p className="ui-font border-l-[3px] border-brand pl-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-paper/70">
            {site.hours.note}
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}
