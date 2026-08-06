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

export interface ShopLocation {
  id: string;
  city: string;
  label: string;
  addressLine: string;
  streetAddress: string;
  region: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  bookingUrl: string;
  mapEmbedUrl: string;
  mapLinkUrl: string;
  instagramUrl: string;
  rating: string;
  reviewCount: string;
}

const bellmawrBookingUrl =
  "https://booksy.com/en-us/1489481_grandmasterkutz-barbershop_barber-shop_28442_bellmawr";
const glassboroBookingUrl =
  "https://booksy.com/en-us/1333933_grandmaster-kutz_barber-shop_28536_glassboro";

export const site = {
  brand: {
    kicker: "BELLMAWR · GLASSBORO",
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
    title: "GrandmasterKutz Barbershop | Bellmawr & Glassboro, NJ",
    description:
      "Upscale multicultural barbershops in Bellmawr and Glassboro, NJ for sharp fades, beard work, kids cuts and personalized service. Choose your shop and book online.",
    url: "https://grandmasterkutz.netlify.app",
  },

  contact: {
    email: "grandmasterkutz@gmail.com",
  },

  locations: [
    {
      id: "bellmawr",
      city: "Bellmawr",
      label: "Bellmawr Shop",
      addressLine: "805 Creek Rd, Bellmawr, NJ 08031",
      streetAddress: "805 Creek Rd",
      region: "NJ",
      postalCode: "08031",
      phone: "(856) 312-8401",
      phoneHref: "tel:+18563128401",
      bookingUrl: bellmawrBookingUrl,
      mapEmbedUrl:
        "https://www.google.com/maps?q=GrandmasterKutz%20Barbershop%2C%20805%20Creek%20Rd%2C%20Bellmawr%2C%20NJ%2008031&output=embed",
      mapLinkUrl:
        "https://www.google.com/maps?place_id=ChIJi1_HBNPPxokRxFBUgkfA4dE&q=place_id%3AChIJi1_HBNPPxokRxFBUgkfA4dE",
      instagramUrl: "https://www.instagram.com/grandmasterkutz/",
      rating: "5.0",
      reviewCount: "591 reviews",
    },
    {
      id: "glassboro",
      city: "Glassboro",
      label: "Glassboro Shop",
      addressLine: "640 Delsea Dr N, Glassboro, NJ 08028",
      streetAddress: "640 Delsea Dr N",
      region: "NJ",
      postalCode: "08028",
      phone: "(856) 226-3957",
      phoneHref: "tel:+18562263957",
      bookingUrl: glassboroBookingUrl,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Grandmaster%20Kutz%2C%20640%20Delsea%20Dr%20N%2C%20Glassboro%2C%20NJ%2008028&output=embed",
      mapLinkUrl:
        "https://www.google.com/maps/search/?api=1&query=Grandmaster%20Kutz%2C%20640%20Delsea%20Dr%20N%2C%20Glassboro%2C%20NJ%2008028",
      instagramUrl: "https://www.instagram.com/grandmasterkutzbarbershop2/",
      rating: "5.0",
      reviewCount: "252 reviews",
    },
  ] as ShopLocation[],

  booking: {
    url: "#locations",
    label: "CHOOSE YOUR SHOP",
    footerLabel: "Choose a location",
  },

  nav: [
    { label: "Barbers", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Visit", href: "#hours" },
    { label: "Story", href: "#about" },
    { label: "Locations", href: "#locations" },
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
    eyebrow: "UPSCALE · MULTICULTURAL · TWO LOCATIONS",
  },

  reviews: [
    {
      source: "Bellmawr",
      rating: "5.0",
      count: "Booksy · 591 reviews",
      href: bellmawrBookingUrl,
    },
    {
      source: "Glassboro",
      rating: "5.0",
      count: "Booksy · 252 reviews",
      href: glassboroBookingUrl,
    },
  ],

  team: {
    enabled: true,
    title: "Bellmawr Barbers",
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
    joinLabel: "Compare Bellmawr schedules",
    joinHref: bellmawrBookingUrl,
  },

  services: {
    enabled: true,
    title: "Signature Services",
    note: "Representative starting prices from Bellmawr. Pricing, timing and availability vary by barber and location—Booksy always has the live details.",
    items: [
      {
        name: "Men's Haircut",
        price: "FROM $40",
        detail:
          "A tailored cut finished with clean edges and styling. Exact timing varies by barber.",
      },
      {
        name: "Haircut + Beard",
        price: "FROM $45",
        detail: "A complete haircut with beard shaping and a balanced finish.",
      },
      {
        name: "Kids Cut",
        price: "FROM $30",
        detail:
          "Patient, detail-focused cuts for younger clients. Age ranges vary by barber.",
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
    note: "Hours vary by barber and location. Choose your shop below to see live appointment times on Booksy.",
    rows: [
      { day: "Shop hours", short: "Hours", value: "Check Booksy" },
      { day: "Live schedules", short: "Live", value: "By location" },
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
      "GrandmasterKutz is an upscale multicultural barbershop serving Bellmawr, Glassboro and the surrounding South Jersey community. The teams work across hair types and styles, from crisp fades and shape-ups to beard work, kids cuts and complete transformations.",
      "The difference is in the detail: patient consultations, sharp finishes and a shop that welcomes both appointments and walk-ins. With hundreds of five-star Booksy reviews, the work speaks long after the cape comes off.",
    ],
  },

  map: {
    enabled: true,
    title: "Choose Your Shop",
  },
} as const;

export type Site = typeof site;
