import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Trained Workers" },
  { value: 50, suffix: "+", label: "Partner Companies" },
  { value: 9, suffix: "+", label: "Service Categories" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-28 pb-20 text-primary-foreground sm:pt-32"
      style={{
        backgroundImage:
          "radial-gradient(900px 500px at 80% -10%, rgba(189,114,23,0.28), transparent), linear-gradient(160deg, #25455c 0%, #1c2e3a 100%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Briefcase className="h-3.5 w-3.5" /> Workforce Solutions • Rwanda
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Trusted Workforce Solutions in Rwanda and Beyond
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/75 sm:text-lg">
            We connect businesses with trained, reliable, and skilled workers —
            from cleaning and logistics to machine operators, hospitality and
            healthcare support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-cta-hover"
            >
              Request Workers <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold text-cta sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}