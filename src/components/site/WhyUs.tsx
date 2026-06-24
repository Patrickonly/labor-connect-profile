import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  GraduationCap,
  Handshake,
  ShieldAlert,
  Zap,
  Users,
  Clock,
  Building,
  Award,
  Globe,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 98, suffix: "%", label: "Client Satisfaction Rate", icon: Award },
  { value: 24, suffix: "h", label: "Average Response Time", icon: Clock },
  { value: 500, suffix: "+", label: "Companies Served", icon: Building },
  { value: 2, suffix: "+", label: "Years of Excellence", icon: Users },
];

const advantages = [
  {
    icon: GraduationCap,
    title: "Professionally Trained Workers",
    desc: "Every worker undergoes comprehensive training before deployment, ensuring they are skilled, safe, and ready to perform.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    desc: "Need workers quickly? Our pool of trained professionals can be deployed rapidly to meet urgent requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Vetted & Reliable",
    desc: "Thorough background screening and verification processes ensure you receive trustworthy, dependable workers.",
  },
  {
    icon: Handshake,
    title: "Flexible Contracts",
    desc: "Whether you need daily, temporary, or long-term workers, we provide flexible arrangements that suit your operations.",
  },
  {
    icon: Globe,
    title: "Local Expertise, Global Standards",
    desc: "Rwandan workforce expertise combined with internationally recognized best practices in labor management.",
  },
  {
    icon: ShieldAlert,
    title: "Dedicated Support",
    desc: "A dedicated account manager for every client ensures personalized service and rapid issue resolution.",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 2000;
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

export function WhyUs() {
  return (
    <section id="why-us" className="bg-secondary/50 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Stats Section */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) * 0.1} type="fadeUp">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group card-premium flex h-full flex-col items-center gap-4 rounded-2xl p-6 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cta/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-cta-foreground">
                  <stat.icon className="h-7 w-7 text-cta transition-colors duration-300 group-hover:text-cta-foreground" />
                </span>
                <div className="text-4xl font-extrabold text-cta">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Our Advantages Section */}
        <SectionHeading
          eyebrow="Our Advantages"
          title="Why Businesses Choose Us"
          subtitle="We don't just supply workers - we deliver trained professionals who add value from day one."
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 3) * 0.1} type="fadeUp">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group card-premium flex h-full flex-col items-start gap-4 rounded-2xl p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cta/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-cta-foreground">
                  <adv.icon className="h-7 w-7 text-cta transition-colors duration-300 group-hover:text-cta-foreground" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{adv.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{adv.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
