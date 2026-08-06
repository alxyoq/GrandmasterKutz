export type MediaSrc = string;

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform:
    | "instagram"
    | "facebook"
    | "yelp"
    | "tiktok"
    | "x"
    | "youtube"
    | "email"
    | "phone";
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  handle: string;
  role: string;
  photo: MediaSrc;
  href: string;
}

export interface ServiceItem {
  name: string;
  price: string;
  detail?: string;
}

export interface HoursRow {
  day: string;
  short: string;
  value: string;
}

const bookingUrl =
  "https://booksy.com/en-us/1489481_grandmasterkutz-barbershop_barber-shop_28442_bellmawr";

export const site = {
  brand: {
    kicker: "BELLMAWR · NEW JERSEY",
    nameTop: "GRANDMASTER",
    nameBottom: "KUTZ",
    fullName: "GrandmasterKutz Barbershop",
    tagline: "Sharp cuts. Master-level detail.",
    logo: "/brand-mark.svg" as MediaSrc,
    foundedYear: 0,
  },

  theme: {
    ink: "#070707",
    paper: "#F4EBD8",
    brand: "#C79A3B",
    brandDeep: "#704A10",
    brandSoft: "#E2C272",
    pop: "#F7E5A6",
  },

  seo: {
    title: "GrandmasterKutz Barbershop | Bellmawr, NJ",
    description:
      "An upscale multicultural barbershop in Bellmawr, NJ for sharp fades, beard work, kids cuts and personalized service. Walk in or book online.",
    url: "https://grandmasterkutz.netlify.app",
  },

  contact: {
    addressLine: "805 Creek Rd, Bellmawr, NJ 08031",
    phone: "(856) 312-8401",
    phoneHref: "tel:+18563128401",
    email: "grandmasterkutz@gmail.com",
    mapEmbedUrl:
      "https://www.google.com/maps?q=GrandmasterKutz%20Barbershop%2C%20805%20Creek%20Rd%2C%20Bellmawr%2C%20NJ%2008031&output=embed",
    mapLinkUrl:
      "https://www.google.com/maps?place_id=ChIJi1_HBNPPxokRxFBUgkfA4dE&q=place_id%3AChIJi1_HBNPPxokRxFBUgkfA4dE",
  },

  booking: {
    url: bookingUrl,
    label: "BOOK YOUR CUT",
    footerLabel: "See live availability",
  },

  nav: [
    { label: "Barbers", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Visit", href: "#hours" },
    { label: "Story", href: "#about" },
    { label: "Directions", href: "#map" },
  ] as NavItem[],

  social: [
    {
      platform: "instagram",
      href: "https://www.instagram.com/grandmasterkutz/",
      label: "GrandmasterKutz Bellmawr on Instagram",
    },
    {
      platform: "facebook",
      href: "https://www.facebook.com/GrandmasterKutz/",
      label: "GrandmasterKutz on Facebook",
    },
    {
      platform: "email",
      href: "mailto:grandmasterkutz@gmail.com",
      label: "Email GrandmasterKutz",
    },
  ] as SocialLink[],

  hero: {
    image: "/gallery/luis-cut-2.jpg" as MediaSrc,
    video: "" as MediaSrc,
    overlay: 0.62,
    eyebrow: "UPSCALE · MULTICULTURAL · BELLMAWR",
  },

  reviews: [
    {
      source: "Booksy",
      rating: "5.0",
      count: "591 reviews",
      href: bookingUrl,
    },
    {
      source: "Google",
      rating: "4.8",
      count: "139 reviews",
      href: "https://www.google.com/maps?place_id=ChIJi1_HBNPPxokRxFBUgkfA4dE&q=place_id%3AChIJi1_HBNPPxokRxFBUgkfA4dE",
    },
  ],

  team: {
    enabled: true,
    title: "Choose Your Barber",
    members: [
      {
        name: "Luis Manuel",
        handle: "luix_xbarber",
        role: "Barber",
        photo: "",
        href: "https://booksy.com/en-us/1512691_luix-xbarber_barber-shop_28442_bellmawr",
      },
      {
        name: "Tj",
        handle: "Tj",
        role: "Barber",
        photo: "",
        href: "https://booksy.com/en-us/775678_tj_barber-shop_28442_bellmawr",
      },
      {
        name: "Craig VIP Cuts",
        handle: "Craig VIP Cuts",
        role: "Barber",
        photo: "",
        href: "https://booksy.com/en-us/1321977_craig-vip-cuts-grand-master-kutz-barbershop-bellmawr-nj_barber-shop_28442_bellmawr",
      },
      {
        name: "Shawn Sharp",
        handle: "Shawn Sharp",
        role: "Barber",
        photo: "",
        href: "https://booksy.com/en-us/1122398_shawn-sharp_barber-shop_28442_bellmawr",
      },
      {
        name: "Mandi Fresh",
        handle: "Mandi fresh",
        role: "Barber",
        photo: "",
        href: "https://booksy.com/en-us/1027253_mandi-fresh_barber-shop_28442_bellmawr",
      },
    ] as TeamMember[],
    joinLabel: "Compare schedules on Booksy",
    joinHref: bookingUrl,
  },

  services: {
    enabled: true,
    title: "Signature Services",
    note:
      "Starting prices shown. Each barber sets their own pricing, timing and availability—Booksy always has the live details.",
    items: [
      {
        name: "Men's Haircut",
        price: "FROM $40",
        detail: "A tailored cut finished with clean edges and styling. Exact timing varies by barber.",
      },
      {
        name: "Haircut + Beard",
        price: "FROM $45",
        detail: "A complete haircut with beard shaping and a balanced finish.",
      },
      {
        name: "Kids Cut",
        price: "FROM $30",
        detail: "Patient, detail-focused cuts for younger clients. Age ranges vary by barber.",
      },
      {
        name: "Under-18 Cut",
        price: "FROM $35",
      },
      {
        name: "Beard Shaping",
        price: "FROM $25",
      },
      {
        name: "Shape Up",
        price: "FROM $20",
      },
      {
        name: "Head Shave",
        price: "FROM $30",
      },
    ] as ServiceItem[],
  },

  gallery: {
    enabled: true,
    title: "Fresh From The Chair",
    images: [
      "/gallery/luis-cut-1.jpg",
      "/gallery/luis-cut-2.jpg",
      "/gallery/luis-kids-cut.jpg",
      "/gallery/craig-cut-3.jpg",
      "/gallery/craig-cut-4.jpg",
      "/gallery/craig-cut-1.jpg",
      "/gallery/craig-cut-2.jpg",
    ] as MediaSrc[],
  },

  hours: {
    enabled: true,
    title: "Plan Your Visit",
    backgroundImage: "/gallery/luis-cut-1.jpg" as MediaSrc,
    note: "Hours vary by barber. Book online to see live appointment times.",
    rows: [
      { day: "Listed hours", short: "Hours", value: "Mon–Fri · 9am–6pm" },
      { day: "Weekend", short: "Weekend", value: "Check Booksy" },
      { day: "Walk-ins", short: "Walk-ins", value: "Welcome" },
      { day: "Appointments", short: "Appts", value: "Book online 24/7" },
      { day: "Parking", short: "Parking", value: "Available" },
      { day: "Families", short: "Families", value: "Child-friendly" },
      { day: "Wi-Fi", short: "Wi-Fi", value: "Available" },
    ] as HoursRow[],
  },

  contactPanel: {
    heading: "READY FOR YOUR NEXT MOVE?",
  },

  about: {
    enabled: true,
    title: "The Grandmaster Standard",
    paragraphs: [
      "GrandmasterKutz is an upscale multicultural barbershop built for Bellmawr and the people who move through it. The team works across hair types and styles, from crisp fades and shape-ups to beard work, kids cuts and complete transformations.",
      "The difference is in the detail: patient consultations, sharp finishes and a shop that welcomes both appointments and walk-ins. With hundreds of five-star Booksy reviews, the work speaks long after the cape comes off.",
    ],
  },

  map: {
    enabled: true,
    title: "Find The Shop",
  },

} as const;

export type Site = typeof site;
