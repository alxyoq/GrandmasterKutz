import { site } from "@/config/site";
import { Panel } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { ArrowUpRight, Crown } from "../Icons";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Team() {
  if (!site.team.enabled) return null;

  return (
    <Panel
      id="team"
      as="section"
      shape="a"
      mobileShape="top-down"
      className="h-full"
      innerClassName="grain bg-ink"
    >
      <div className="royal-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_75%_at_50%_0%,rgb(var(--brand-deep)/.45),transparent_70%)]" />

      <div className="relative flex h-full flex-col px-5 py-12 md:px-9 md:py-16">
        <Reveal className="mb-4 flex justify-center">
          <SectionTitle>{site.team.title}</SectionTitle>
        </Reveal>
        <Reveal delay={70}>
          <p className="mx-auto mb-9 max-w-lg text-center text-sm leading-relaxed text-paper/70">
            Meet the barbers currently connected through the shop&apos;s Booksy
            profile. Choose one to see live schedules, services and reviews.
          </p>
        </Reveal>

        <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
          {site.team.members.map((member, index) => (
            <Reveal as="li" key={member.name} delay={index * 65}>
              <a
                href={member.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-44 flex-col overflow-hidden border-[3px] border-brand/45 bg-ink/85 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pop hover:bg-brand-deep/30 hover:shadow-[5px_5px_0_rgb(var(--brand))]"
              >
                <span className="absolute -right-5 -top-7 select-none text-[6.5rem] font-black leading-none text-brand/[0.07]">
                  {index + 1}
                </span>
                <span className="mb-auto flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center border border-brand/50 bg-brand/10 text-brand">
                    <Crown className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-paper/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pop" />
                </span>
                <span className="display mt-6 text-3xl uppercase leading-none text-paper">
                  {initials(member.name)}
                </span>
                <span className="ui-font mt-2 text-sm font-bold uppercase leading-tight tracking-[0.08em] text-brand-soft">
                  {member.name}
                </span>
                <span className="ui-font mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                  {member.handle}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-9 flex justify-center" delay={180}>
          <a
            href={site.team.joinHref}
            target="_blank"
            rel="noreferrer"
            className="ui-font group inline-flex items-center gap-2 border-b-[3px] border-pop pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:text-pop"
          >
            {site.team.joinLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </Panel>
  );
}
