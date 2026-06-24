import { About } from "@/components/site/About";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Services } from "@/components/site/Services";
import { SplashScreen } from "@/components/site/SplashScreen";
import { WhyUs } from "@/components/site/WhyUs";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Labor Connect Solutions Ltd — Trusted Workforce Solutions in Rwanda" },
      {
        name: "description",
        content:
          "Trained, reliable workforce solutions in Rwanda: cleaning, logistics, machine operators, hospitality, healthcare support and general labor outsourcing.",
      },
      { property: "og:title", content: "Labor Connect Solutions Ltd" },
      {
        property: "og:description",
        content: "Connecting businesses with skilled, trained workers in Rwanda and beyond.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("splashShown");
  });

  useEffect(() => {
    if (showSplash) {
      const t = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3200);
      return () => clearTimeout(t);
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Industries />
      <ScrollToTop />
    </>
  );
}
