const CHECKOUT_URL =
  "https://buy.stripe.com/7sYbJ28Jp5S87ak1c6dwc05?prefilled_promo_code=FIRST10FREE3&client_reference_id=grandmaster_kutz";

export function PurchaseWebsiteButton() {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Buy this website securely through Stripe"
      className="fixed right-4 bottom-5 z-[65] inline-flex min-h-16 items-center justify-center rounded-full border-2 border-[#C79A3B] bg-[#070707] px-7 py-4 font-[var(--font-ui)] text-base font-bold tracking-wide text-[#F4EBD8] shadow-[0_12px_32px_rgba(7,7,7,0.42)] transition hover:-translate-y-0.5 hover:bg-[#704A10] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C79A3B] sm:right-6 sm:bottom-6"
    >
      Buy This Website
    </a>
  );
}
