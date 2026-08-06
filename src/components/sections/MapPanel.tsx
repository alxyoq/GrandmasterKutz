import { site } from "@/config/site";
import { Panel } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { ArrowUpRight, Phone, Pin } from "../Icons";

export function MapPanel() {
  if (!site.map.enabled) return null;

  return (
    <Panel
      id="locations"
      as="section"
      shape="flat"
      className="scroll-mt-24"
      innerClassName="bg-paper"
    >
      <div className="relative bg-ink px-5 py-10 text-center md:py-12">
        <div className="royal-grid absolute inset-0 opacity-25" />
        <Reveal className="relative flex flex-col items-center">
          <SectionTitle>{site.map.title}</SectionTitle>
          <p className="ui-font mt-5 max-w-xl text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-paper/65 md:text-sm">
            Bellmawr and Glassboro have separate schedules. Pick your location
            before booking.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {site.locations.map((location, index) => (
          <article
            id={`location-${location.id}`}
            key={location.id}
            className="scroll-mt-24 border-b-[var(--stroke)] border-ink bg-paper last:border-b-0 lg:border-b-0 lg:border-r-[var(--stroke)] lg:last:border-r-0"
          >
            <div className="relative min-h-[300px] border-b-[var(--stroke)] border-ink">
              <iframe
                title={`Map to ${site.brand.fullName} in ${location.city}`}
                src={location.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full grayscale-[0.35] contrast-[1.05]"
                style={{ border: 0 }}
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 border-[3px] border-ink bg-paper px-4 py-3 shadow-ink-sm">
                <Pin className="h-5 w-5 shrink-0 text-brand-deep" />
                <span className="ui-font whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-ink">
                  GrandmasterKutz · {location.city}
                </span>
              </div>
            </div>

            <div
              className={`relative min-h-[370px] overflow-hidden px-6 py-10 md:px-9 ${
                index % 2 === 0 ? "bg-brand" : "bg-paper"
              }`}
            >
              <div className="halftone absolute inset-0 opacity-[0.1]" />
              <Reveal className="relative flex h-full flex-col">
                <p className="ui-font text-[10px] font-bold uppercase tracking-[0.28em] text-ink/65">
                  {location.label}
                </p>
                <h3 className="display mt-3 text-5xl uppercase leading-none text-ink md:text-6xl">
                  {location.city}
                </h3>

                <a
                  href={location.mapLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-font mt-6 flex items-start gap-3 text-base font-bold uppercase leading-snug tracking-[0.06em] text-ink transition-colors hover:text-brand-deep"
                >
                  <Pin className="mt-0.5 h-5 w-5 shrink-0" />
                  {location.addressLine}
                </a>
                <a
                  href={location.phoneHref}
                  className="ui-font mt-4 flex items-center gap-3 text-base font-bold text-ink transition-colors hover:text-brand-deep"
                >
                  <Phone className="h-5 w-5" />
                  {location.phone}
                </a>

                <a
                  href={location.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-font mt-4 text-xs font-bold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-ink"
                >
                  {location.rating} on Booksy · {location.reviewCount}
                </a>

                <div className="mt-auto grid grid-cols-1 gap-3 pt-8 sm:grid-cols-2">
                  <a
                    href={location.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-comic px-5 py-3 text-xs"
                  >
                    Book {location.city}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={location.mapLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-comic btn-pop px-5 py-3 text-xs"
                  >
                    Directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <a
                  href={location.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-font link-underline mt-6 w-fit text-xs font-bold uppercase tracking-[0.16em] text-ink"
                >
                  {location.city} on Instagram
                </a>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}
