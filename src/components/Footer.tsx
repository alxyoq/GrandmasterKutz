import { site } from "@/config/site";
import { PlaceholderArt } from "./PlaceholderArt";
import { SocialIcon } from "./Icons";

function initials() {
  const src = `${site.brand.nameTop} ${site.brand.nameBottom}`.trim();
  return src
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Footer() {
  const year = new Date().getFullYear();
  const start = site.brand.foundedYear;
  const range = start && start < year ? `${start}–${year}` : `${year}`;

  return (
    <footer className="relative overflow-hidden bg-ink pb-10 pt-14 text-paper">
      <div className="halftone-light absolute inset-0 opacity-40" />

      {/* marquee rule */}
      <div className="relative mb-12 flex overflow-hidden border-y-[3px] border-paper/20 py-2">
        <div className="animate-marquee flex shrink-0 gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={`m-${dup}`} className="flex shrink-0 gap-10">
              {Array.from({ length: 6 }).map((__, k) => (
                <span
                  key={`t-${dup}-${k}`}
                  className="display text-2xl uppercase tracking-[0.06em] text-paper/40"
                >
                  {site.brand.tagline}
                  <span className="mx-8 text-brand">/</span>
                  {site.contact.phone}
                  <span className="mx-8 text-brand">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-10 px-6 md:grid-cols-3 md:px-10">
        {/* links */}
        <nav>
          <ul className="flex flex-col gap-1.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="ui-font link-underline text-sm font-medium uppercase tracking-[0.2em] text-paper/70 transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* badge */}
        <div className="order-first flex flex-col items-center gap-3 md:order-none">
          <div className="h-24 w-24 md:h-28 md:w-28">
            {site.brand.logo ? (
              <img
                src={site.brand.logo}
                alt={`${site.brand.fullName} logo`}
                className="h-full w-full object-contain"
              />
            ) : (
              <PlaceholderArt variant="badge" label={initials()} className="bg-transparent" />
            )}
          </div>
          <p className="ui-font text-center text-[11px] uppercase tracking-[0.22em] text-paper/50">
            © {range} {site.brand.fullName}
          </p>
        </div>

        {/* cta + socials */}
        <div className="flex flex-col items-start gap-5 md:items-end">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noreferrer"
            className="btn-comic px-6 py-3.5 text-xs"
          >
            {site.booking.footerLabel}
          </a>
          <ul className="flex items-center gap-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.platform === "email" ? undefined : "_blank"}
                  rel={s.platform === "email" ? undefined : "noreferrer"}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center border-[3px] border-paper/70 text-paper transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:bg-pop hover:text-ink"
                >
                  <SocialIcon platform={s.platform} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="ui-font relative mt-12 text-center text-[10px] uppercase tracking-[0.24em] text-paper/50">
        805 Creek Road · Bellmawr, New Jersey · Walk-ins + appointments
      </p>
    </footer>
  );
}
