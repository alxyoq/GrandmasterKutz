import type { SVGProps } from "react";
import type { SocialLink } from "@/config/site";

type Props = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Instagram(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14.5 8.5V6.9c0-.9.3-1.4 1.4-1.4h1.6V2.6c-.6-.1-1.5-.2-2.5-.2-2.6 0-4.2 1.5-4.2 4.3v1.8H8v3.1h2.8V21h3.7v-9.4h2.7l.4-3.1z" />
    </svg>
  );
}

export function Yelp(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M11 3.4v8.2L5.8 8.9c-.6-.3-.8-1.1-.4-1.7A9.4 9.4 0 0 1 9.6 3c.7-.3 1.4.2 1.4.9z" />
      <path d="M13.6 13.2l4.6-1.6c.7-.2 1.1-1 .8-1.6a8.6 8.6 0 0 0-1.6-2.6c-.4-.5-1.2-.5-1.7 0l-3.3 3.7c-.7.8 0 2.1 1.2 2.1z" />
      <path d="M12.6 15.3l3 4c.4.6 1.3.6 1.7 0a8.6 8.6 0 0 0 1.3-2.8c.2-.7-.3-1.4-1-1.5l-4-.5c-1.1-.1-1.7 1-1 1.8z" />
      <path d="M10.2 15.7l-3.9 1.6c-.7.3-.9 1.1-.5 1.7a8.6 8.6 0 0 0 2.2 2.1c.6.4 1.4 0 1.6-.7l1.1-3.5c.3-1-.6-1.7-1.5-1.2z" />
    </svg>
  );
}

export function TikTok(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M15 3.5c.4 2.3 1.9 3.8 4.2 4v3c-1.6 0-3.1-.5-4.3-1.4v6.1c0 3.4-2.6 5.8-5.7 5.8A5.6 5.6 0 0 1 3.6 15c0-3.4 3-6.1 6.6-5.6v3.1c-.4-.1-.8-.2-1.2-.2A2.6 2.6 0 0 0 6.6 15c0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.1 2.7-2.8V3.5z" />
    </svg>
  );
}

export function XIcon(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 3.5l7.2 9.1L4.4 20.5h2.2l5.6-6.3 4.9 6.3h4.9l-7.6-9.6 6.4-7.4h-2.2l-5.2 5.9-4.6-5.9z" />
    </svg>
  );
}

export function YouTube(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10.5 9.3l4.6 2.7-4.6 2.7z" />
    </svg>
  );
}

export function Mail(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.2 6.7L12 13l8.8-6.3" />
    </svg>
  );
}

export function Phone(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7 3.5h3l1.6 4-2 1.5a11.5 11.5 0 0 0 5.4 5.4l1.5-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7 2 2 0 0 1 5.5 3.5z" />
    </svg>
  );
}

export function Pin(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 21.5s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10.4" r="2.6" />
    </svg>
  );
}

export function Crown(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3.5 7.2l4.4 3.2L12 4l4.1 6.4 4.4-3.2-1.8 10.3H5.3z" />
      <path d="M5.3 17.5h13.4v2.3H5.3z" />
      <circle cx="3.5" cy="6.4" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="3.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="6.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowUpRight(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7.5 16.5L16.5 7.5" />
      <path d="M9 7.5h7.5V15" />
    </svg>
  );
}

export function Plus(props: Props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 5.5v13M5.5 12h13" />
    </svg>
  );
}

export function Menu(props: Props) {
  return (
    <svg {...base} strokeWidth={2.6} {...props} aria-hidden="true">
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function Close(props: Props) {
  return (
    <svg {...base} strokeWidth={2.6} {...props} aria-hidden="true">
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

const SOCIAL_MAP = {
  instagram: Instagram,
  facebook: Facebook,
  yelp: Yelp,
  tiktok: TikTok,
  x: XIcon,
  youtube: YouTube,
  email: Mail,
  phone: Phone,
} as const;

export function SocialIcon({
  platform,
  ...props
}: { platform: SocialLink["platform"] } & Props) {
  const Cmp = SOCIAL_MAP[platform] ?? Mail;
  return <Cmp {...props} />;
}
