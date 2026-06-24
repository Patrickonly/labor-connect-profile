import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./ui";

const testimonials = [
  {
    name: "Jean-Paul M.",
    role: "Operations Manager, Manufacturing",
    text: "Labor Connect delivered trained operators within days. Reliable, professional and a real partner to our plant.",
  },
  {
    name: "Aline U.",
    role: "Hotel General Manager",
    text: "Their hospitality staff are courteous and well-prepared. Our service quality improved noticeably.",
  },
  {
    name: "David K.",
    role: "Logistics Director",
    text: "Fast deployment of loaders and warehouse staff during peak season. Exactly the flexibility we needed.",
  },
  {
    name: "Grace I.",
    role: "Facilities Lead",
    text: "The cleaning teams are thorough and dependable. Communication and supervision are excellent.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full bg-cta/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cta">
          Testimonials
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Trusted by leading companies
        </h2>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-10 backdrop-blur-lg shadow-xl"
            >
              <Quote className="mx-auto h-10 w-10 text-cta" />
              <div className="mt-4 flex justify-center gap-1.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-6 w-6 fill-cta text-cta" />
                ))}
              </div>
              <p className="mt-6 text-xl leading-relaxed text-primary-foreground/95">"{t.text}"</p>
              <div className="mt-7">
                <div className="text-lg font-extrabold">{t.name}</div>
                <div className="mt-1 text-sm text-primary-foreground/70">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="rounded-full border border-primary-foreground/20 p-3 transition-all hover:bg-primary-foreground/10 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to ${k + 1}`}
                className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-cta" : "w-2.5 bg-primary-foreground/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="rounded-full border border-primary-foreground/20 p-3 transition-all hover:bg-primary-foreground/10 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
