import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/site/SplashScreen";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Training } from "@/components/site/Training";
import { WhyUs } from "@/components/site/WhyUs";
import { Industries } from "@/components/site/Industries";
import { Career } from "@/components/site/Career";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Labor Connect Solutions Ltd — Trusted Workforce Solutions in Rwanda" },
      { name: "description", content: "Trained, reliable workforce solutions in Rwanda: cleaning, logistics, machine operators, hospitality, healthcare support and general labor outsourcing." },
      { property: "og:title", content: "Labor Connect Solutions Ltd" },
      { property: "og:description", content: "Connecting businesses with skilled, trained workers in Rwanda and beyond." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Labor Connect Solutions Ltd",
          description: "Workforce and staffing solutions in Rwanda and beyond.",
          telephone: "+250786485989",
          email: "info@labor-connect.com",
          address: { "@type": "PostalAddress", addressLocality: "Kicukiro, Kigali", addressCountry: "RW" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <SplashScreen />}</AnimatePresence>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Training />
          <WhyUs />
          <Industries />
          <Career />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
}
