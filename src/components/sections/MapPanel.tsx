import { site } from "@/config/site";
import { Panel } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { ArrowUpRight, Phone, Pin } from "../Icons";

export function MapPanel() {
  if (!site.map.enabled) return null;
  const { mapEmbedUrl, mapLinkUrl, addressLine } = site.contact;

  return (
    <Panel id="map" as="section" shape="flat" innerClassName="bg-paper">
      <div className="relative bg-ink px-5 py-10 text-center md:py-12">
        <div className="royal-grid absolute inset-0 opacity-25" />
        <Reveal className="relative flex justify-center">
          <SectionTitle>{site.map.title}</SectionTitle>
        </Reveal>
      </div>

      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(340px,.5fr)]">
        <div className="relative min-h-[360px] border-b-[var(--stroke)] border-ink lg:min-h-[520px] lg:border-b-0 lg:border-r-[var(--stroke)]">
          <iframe
            title={`Map to ${site.brand.fullName}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full grayscale-[0.35] contrast-[1.05] lg:min-h-[520px]"
            style={{ border: 0 }}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 border-[3px] border-ink bg-paper px-4 py-3 shadow-ink-sm">
            <Pin className="h-5 w-5 shrink-0 text-brand-deep" />
            <span className="ui-font whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-ink">
              GrandmasterKutz · Bellmawr
            </span>
          </div>
        </div>

        <div className="relative flex items-center overflow-hidden bg-brand px-6 py-12 md:px-10">
          <div className="halftone absolute inset-0 opacity-[0.12]" />
          <div className="relative w-full">
            <p className="ui-font text-[10px] font-bold uppercase tracking-[0.28em] text-ink/70">
              Bellmawr shop
            </p>
            <h3 className="display mt-3 text-4xl uppercase leading-[0.95] text-ink md:text-5xl">
              Your next cut is at
              <br />
              805 Creek Road.
            </h3>

            <p className="ui-font mt-7 flex items-start gap-3 text-base font-bold uppercase leading-snug tracking-[0.08em] text-ink">
              <Pin className="mt-0.5 h-5 w-5 shrink-0" />
              {addressLine}
            </p>
            <a
              href={site.contact.phoneHref}
              className="ui-font mt-4 flex items-center gap-3 text-base font-bold text-ink transition-colors hover:text-paper"
            >
              <Phone className="h-5 w-5" />
              {site.contact.phone}
            </a>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-comic btn-pop px-5 py-3 text-xs"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={site.booking.url}
                target="_blank"
                rel="noreferrer"
                className="btn-comic px-5 py-3 text-xs"
              >
                See live appointments
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
