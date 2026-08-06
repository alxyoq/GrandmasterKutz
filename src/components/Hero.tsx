import { site } from "@/config/site";
import { ArrowUpRight, Crown, Pin, SocialIcon } from "./Icons";

export function Hero() {
  const { hero, contact, booking, brand } = site;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink px-4 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36"
    >
      <div className="absolute inset-0 -z-20">
        {hero.video ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image || undefined}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.image}
            alt="A finished haircut at GrandmasterKutz Barbershop"
            className="h-full w-full object-cover object-center md:object-[68%_45%]"
            fetchPriority="high"
          />
        )}
      </div>

      <div
        className="absolute inset-0 -z-10 bg-ink"
        style={{ opacity: hero.overlay }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(var(--ink))_0%,rgb(var(--ink)/.88)_38%,rgb(var(--ink)/.18)_78%)]" />
      <div className="royal-grid absolute inset-0 -z-10 opacity-25" />
      <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full border border-brand/25 md:h-[34rem] md:w-[34rem]" />
      <div className="absolute -right-12 top-36 -z-10 h-56 w-56 rounded-full border border-brand/15 md:h-[28rem] md:w-[28rem]" />

      <div className="mx-auto w-full max-w-page">
        <div className="max-w-3xl text-center md:text-left">
          <p className="stroke-label animate-rise mb-5 text-[10px] text-brand-soft md:text-xs">
            {hero.eyebrow}
          </p>

          <div className="animate-pop mx-auto mb-5 grid h-16 w-16 place-items-center border border-brand/50 bg-ink/70 text-brand shadow-[5px_5px_0_rgb(var(--brand-deep))] backdrop-blur md:mx-0 md:h-20 md:w-20">
            <Crown className="h-10 w-10 md:h-12 md:w-12" />
          </div>

          <h1 className="animate-rise" style={{ animationDelay: "90ms" }}>
            <span className="display block text-[clamp(2.2rem,9vw,8.4rem)] uppercase leading-[0.84] tracking-[-0.04em] text-paper md:tracking-[-0.025em]">
              {brand.nameTop}
            </span>
            <span
              className="display block text-[clamp(4.7rem,13vw,11rem)] uppercase leading-[0.82] tracking-[-0.035em] text-brand"
              style={{
                WebkitTextStroke: "0.015em rgb(var(--paper) / .65)",
                paintOrder: "stroke fill",
                textShadow: "0.06em 0.06em 0 rgb(var(--brand-deep) / .75)",
              }}
            >
              {brand.nameBottom}
            </span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-paper/85 md:mx-0 md:text-xl"
            style={{ animationDelay: "170ms" }}
          >
            A sharp, multicultural Bellmawr barbershop where every cut is
            treated like the main event.
          </p>

          <div
            className="animate-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={booking.url}
              target="_blank"
              rel="noreferrer"
              className="btn-comic px-7 py-4 text-sm"
            >
              {booking.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={contact.phoneHref}
              className="btn-comic btn-ghost px-7 py-4 text-sm"
            >
              CALL {contact.phone}
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex flex-col items-center gap-4 md:flex-row"
            style={{ animationDelay: "310ms" }}
          >
            <a
              href={contact.mapLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-font flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-paper/80 transition-colors hover:text-brand-soft"
            >
              <Pin className="h-4 w-4 shrink-0 text-brand" />
              {contact.addressLine}
            </a>
            <span className="hidden h-5 w-px bg-paper/25 md:block" />
            <ul className="flex items-center gap-2">
              {site.social.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.platform === "email" ? undefined : "_blank"}
                    rel={social.platform === "email" ? undefined : "noreferrer"}
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center border border-paper/35 text-paper/75 transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-ink"
                  >
                    <SocialIcon platform={social.platform} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-y-[var(--stroke)] border-ink bg-brand">
        <div className="mx-auto grid max-w-page grid-cols-2 divide-x divide-ink/30 md:max-w-3xl">
          {site.reviews.map((review) => (
            <a
              key={review.source}
              href={review.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-3 py-3 text-ink transition-colors hover:bg-pop md:px-8"
            >
              <span className="display text-3xl md:text-4xl">{review.rating}</span>
              <span className="ui-font text-left text-[10px] font-bold uppercase leading-tight tracking-[0.14em] md:text-xs">
                {review.source}
                <br />
                <span className="font-medium opacity-70">{review.count}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
