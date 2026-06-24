import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Trained Workers" },
  { value: 50, suffix: "+", label: "Partner Companies" },
  { value: 9, suffix: "+", label: "Service Categories" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 4)) * value));
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
      className="relative overflow-hidden bg-transparent pt-24 pb-10 text-foreground sm:pt-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.1 }}
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Trusted Workforce Solutions in <span className="text-cta">Rwanda</span> and
              <span className="text-cta"> Beyond</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              We connect businesses with trained, reliable, and skilled workers from cleaning and
              logistics to machine operators, hospitality, and healthcare support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="focus-ring btn-cta inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold"
              >
                Request Workers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-cta hover:bg-secondary hover:text-cta"
              >
                View Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cta" />
                <span>Verified and trained staff</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-cta" />
                <span>Safety-first deployment</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mt-3 overflow-hidden rounded-3xl shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1581093588451-319a0c09f4e8?auto=format&fit=crop&q=80&w=1200"
                alt="Professional African trained workforce"
                width={1200}
                height={800}
                className="h-125 w-full rounded-3xl object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.56 }}
                className="surface-glass absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 rounded-2xl p-4 sm:grid-cols-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.58 + i * 0.08, duration: 0.4 }}
                    className="rounded-xl px-2 py-1 text-center"
                  >
                    <div className="text-3xl font-extrabold text-cta">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs leading-tight text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
