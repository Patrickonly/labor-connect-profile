import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Briefcase, BadgeCheck, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-workforce.jpg";

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
      className="relative overflow-hidden pt-28 pb-20 text-primary-foreground sm:pt-32"
      style={{
        backgroundImage:
          "radial-gradient(900px 500px at 80% -10%, rgba(189,114,23,0.28), transparent), var(--gradient-hero)",
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cta/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
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
            Trusted Workforce Solutions in{" "}
            <span className="text-gradient-cta">Rwanda and Beyond</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/75 sm:text-lg">
            We connect businesses with trained, reliable, and skilled workers —
            from cleaning and logistics to machine operators, hospitality and
            healthcare support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-cta inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              Request Workers <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              View Services
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-primary-foreground/70">
            <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-cta" /> Verified & trained staff</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-cta" /> Safety-first deployment</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-lift">
            <img
              src={heroImg}
              alt="Professional trained workforce in Rwanda"
              width={1280}
              height={853}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142430]/70 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-6 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-2 gap-3 rounded-2xl border border-primary-foreground/15 bg-[#1c2e3a]/85 p-4 backdrop-blur-md sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-cta sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="h-8" />
    </section>
  );
}