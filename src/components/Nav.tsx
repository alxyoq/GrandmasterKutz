"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { Wordmark } from "./Wordmark";
import { Close, Menu, SocialIcon } from "./Icons";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const trigger = openButtonRef.current;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const half = Math.ceil(site.nav.length / 2);
  const left = site.nav.slice(0, half);
  const right = site.nav.slice(half);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b-[var(--stroke)] border-ink bg-ink/95 py-2 backdrop-blur"
            : "py-3 md:py-5",
        )}
      >
        <nav className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 md:px-8">
          {/* mobile trigger */}
          <button
            ref={openButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-brand text-paper shadow-ink-sm transition-transform active:translate-x-[2px] active:translate-y-[2px] md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <ul className="hidden flex-1 items-center gap-7 md:flex">
            {left.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>

          <Link href="/" className="shrink-0" aria-label={site.brand.fullName}>
            <Wordmark size={solid ? "sm" : "md"} />
          </Link>

          <ul className="hidden flex-1 items-center justify-end gap-7 md:flex">
            {right.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>

          <span className="h-11 w-11 md:hidden" aria-hidden="true" />
        </nav>
      </header>

      {/* ---------------- mobile drawer ---------------- */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 z-[70] transition-[opacity,visibility] duration-300 md:hidden",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "halftone-light absolute inset-0 transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "relative flex h-full flex-col transition-transform duration-[420ms]",
            open ? "translate-y-0" : "-translate-y-4",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(.2,.9,.3,1.1)" }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <Wordmark size="sm" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center border-[3px] border-paper bg-transparent text-paper"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col justify-center gap-1 px-6">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block py-2 text-5xl uppercase text-paper transition-colors hover:text-pop"
                  style={{
                    transform: "skewX(-8deg)",
                    opacity: open ? 1 : 0,
                    transition: `opacity 320ms ${120 + i * 55}ms, color 160ms`,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-5 px-6 pb-10">
            <a
              href={site.booking.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-comic w-full px-6 py-4 text-base"
            >
              {site.booking.label}
            </a>
            <div className="flex items-center gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.platform === "email" ? undefined : "_blank"}
                  rel={s.platform === "email" ? undefined : "noreferrer"}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center border-[3px] border-paper text-paper transition-colors hover:bg-pop hover:text-ink"
                >
                  <SocialIcon platform={s.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="ui-font text-xs uppercase tracking-[0.24em] text-paper/60">
              {site.contact.addressLine}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="ui-font link-underline text-[13px] font-semibold uppercase tracking-[0.22em] text-paper/85 transition-colors hover:text-paper"
        style={{ textShadow: "0 1px 4px rgb(var(--ink) / .6)" }}
      >
        {label}
      </a>
    </li>
  );
}
