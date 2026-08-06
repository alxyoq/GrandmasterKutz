import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/sections/Team";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { ContactBubble, Hours } from "@/components/sections/HoursContact";
import { About } from "@/components/sections/About";
import { MapPanel } from "@/components/sections/MapPanel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* comic page: panels separated by paper gutters */}
        <div className="mx-auto flex max-w-page flex-col gap-[var(--gutter)] px-[var(--gutter)] pb-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Team />
            <Services />
          </div>

          <Gallery />

          <div className="grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-[minmax(0,0.4fr)_minmax(0,1.6fr)]">
            <ContactBubble />
            <Hours />
          </div>

          <About />
          <MapPanel />
        </div>
      </main>
      <Footer />
    </>
  );
}

