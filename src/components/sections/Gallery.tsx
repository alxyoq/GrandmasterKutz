import { site } from "@/config/site";
import { Panel, SmartImage } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";

const SHAPES = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
] as const;

export function Gallery() {
  if (!site.gallery.enabled) return null;

  return (
    <Panel id="gallery" as="section" shape="b" mobileShape="flat" innerClassName="bg-ink">
      <div className="royal-grid absolute inset-0 opacity-20" />
      <div className="relative px-3 py-12 md:px-6 md:py-16">
        <Reveal className="mb-9 flex justify-center">
          <SectionTitle>{site.gallery.title}</SectionTitle>
        </Reveal>

        <ul className="mx-auto grid max-w-6xl auto-rows-[145px] grid-cols-2 gap-2 md:auto-rows-[190px] md:grid-cols-4 md:gap-3">
          {site.gallery.images.map((src, index) => (
            <Reveal
              as="li"
              key={src}
              delay={index * 55}
              className={`group relative overflow-hidden border-[3px] border-brand/55 bg-brand-deep shadow-[4px_4px_0_rgb(var(--brand-deep))] ${SHAPES[index] ?? "col-span-1 row-span-1"}`}
            >
              <SmartImage
                src={src}
                alt={`GrandmasterKutz haircut portfolio image ${index + 1}`}
                variant="scene"
                index={index}
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent transition-opacity group-hover:opacity-30" />
              <span className="ui-font absolute bottom-2 left-2 border border-paper/30 bg-ink/75 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-paper/80 backdrop-blur">
                GMK · {String(index + 1).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={240} className="mt-8 text-center">
          <a
            href="https://www.instagram.com/grandmasterkutz/"
            target="_blank"
            rel="noreferrer"
            className="ui-font link-underline text-xs font-bold uppercase tracking-[0.2em] text-brand-soft"
          >
            More fresh work on Instagram
          </a>
        </Reveal>
      </div>
    </Panel>
  );
}
