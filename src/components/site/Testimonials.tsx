import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./ui";

const testimonials = [
  { name: "Jean-Paul M.", role: "Operations Manager, Manufacturing", text: "Labor Connect delivered trained operators within days. Reliable, professional and a real partner to our plant." },
  { name: "Aline U.", role: "Hotel General Manager", text: "Their hospitality staff are courteous and well-prepared. Our service quality improved noticeably." },
  { name: "David K.", role: "Logistics Director", text: "Fast deployment of loaders and warehouse staff during peak season. Exactly the flexibility we needed." },
  { name: "Grace I.", role: "Facilities Lead", text: "The cleaning teams are thorough and dependable. Communication and supervision are excellent." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Trusted by leading companies
        </h2>

        <div className="relative mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm"
            >
              <Quote className="mx-auto h-8 w-8 text-cta" />
              <div className="mt-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-cta text-cta" />
                ))}
              </div>
              <p className="mt-5 text-lg text-primary-foreground/90">"{t.text}"</p>
              <div className="mt-5">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-primary-foreground/60">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous" className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/10">
            <ChevronLeft className="h-5 w-5" />
          </button>
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-cta" : "w-2 bg-primary-foreground/30"}`}
            />
          ))}
          <button onClick={() => go(1)} aria-label="Next" className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/10">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}