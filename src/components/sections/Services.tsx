"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { Panel } from "../Panel";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { Plus } from "../Icons";
import { cn } from "@/lib/utils";

export function Services() {
  const [open, setOpen] = useState<number | null>(null);
  if (!site.services.enabled) return null;

  return (
    <Panel
      id="services"
      as="section"
      shape="b"
      mobileShape="top-up"
      className="h-full"
      innerClassName="grain bg-brand"
    >
      <div className="halftone absolute inset-0 opacity-[0.16]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgb(var(--brand-soft) / .5), transparent 45%, rgb(var(--brand-deep) / .7))",
        }}
      />

      <div className="relative flex h-full flex-col px-5 py-12 md:px-10 md:py-16">
        <Reveal className="mb-8 flex justify-center md:mb-11">
          <SectionTitle>{site.services.title}</SectionTitle>
        </Reveal>

        <ul className="mx-auto w-full max-w-xl">
          {site.services.items.map((item, i) => {
            const expandable = Boolean(item.detail);
            const isOpen = open === i;
            return (
              <Reveal
                as="li"
                key={item.name}
                delay={Math.min(i * 35, 320)}
                className="border-b border-ink/25 last:border-b-0"
              >
                <button
                  type="button"
                  disabled={!expandable}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    "group flex w-full items-start gap-3 py-3 text-left transition-colors",
                    expandable ? "cursor-pointer" : "cursor-default",
                  )}
                  aria-expanded={expandable ? isOpen : undefined}
                >
                  <span
                    className={cn(
                      "mt-[3px] grid h-5 w-5 shrink-0 place-items-center border-2 border-ink/65 text-ink transition-all duration-200",
                      expandable
                        ? "opacity-100 group-hover:border-pop group-hover:bg-pop group-hover:text-ink"
                        : "opacity-0",
                      isOpen && "rotate-45 border-pop bg-pop text-ink",
                    )}
                    aria-hidden="true"
                  >
                    <Plus className="h-3 w-3" />
                  </span>

                  <span className="ui-font flex-1 text-lg font-semibold leading-snug text-ink md:text-xl">
                    {item.name}
                  </span>

                  <span
                    className="display shrink-0 text-xl leading-none text-ink md:text-2xl"
                  >
                    {item.price}
                  </span>
                </button>

                {expandable && (
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pl-8 pr-10 text-sm font-medium leading-relaxed text-ink/80">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </ul>

        {site.services.note && (
          <Reveal delay={200} className="mx-auto mt-8 max-w-xl">
            <p className="ui-font border-l-[3px] border-ink pl-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80">
              {site.services.note}
            </p>
          </Reveal>
        )}
      </div>
    </Panel>
  );
}
