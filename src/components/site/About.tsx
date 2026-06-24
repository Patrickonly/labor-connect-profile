import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Earth,
  Globe,
  GraduationCap,
  HandHeart,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "./ui";

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We pursue the highest standards in training and worker placement.",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    desc: "Ethical, transparent, and honest business practices in everything we do.",
  },
  {
    icon: HandHeart,
    title: "People First",
    desc: "Our workers are our greatest asset, and we invest in their success.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Local expertise combined with internationally recognized best practices.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Trained Professionals", icon: Users },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 50, suffix: "+", label: "Industries Served", icon: TrendingUp },
  { value: 1000, suffix: "+", label: "Jobs Created", icon: Zap },
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

export function About() {
  return (
    <section id="about" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero / Our Story */}
        <div className="mb-10">
          <SectionHeading eyebrow="Our Story" title="Building Africa's Trusted Workforce" />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <Reveal type="fadeUp">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200"
                  alt="Workers in professional training"
                  className="h-112.5 w-full rounded-3xl object-cover shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cta p-6 text-cta-foreground shadow-xl">
                  <div className="text-4xl font-extrabold">10+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </Reveal>
            <Reveal type="fadeUp" delay={0.1}>
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Labor Connect Solutions was founded with a clear mission: bridge the gap between
                  skilled workers and the industries that need them. Based in Rwanda, we understand
                  both the challenges and opportunities of the African labor market.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  What sets us apart is our commitment to training. Every worker who joins Labor
                  Connect Solutions undergoes rigorous training before deployment. This ensures our
                  clients don't just receive workers - they receive trained professionals ready to
                  deliver from day one.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <span className="font-semibold text-foreground">5.0 Star Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-cta" />
                    <span className="font-semibold text-foreground">100% Safety Certified</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          <Reveal type="fadeUp">
            <div className="group card-premium h-full rounded-3xl border-l-4 border-l-cta p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-10 w-10 text-cta" />
                <h3 className="text-2xl font-extrabold text-foreground">Our Mission</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                To provide businesses in Rwanda and beyond with access to skilled, professionally
                trained, and reliable workers. We are committed to elevating industry standards
                through rigorous training, safety compliance, and exceptional service delivery.
              </p>
            </div>
          </Reveal>
          <Reveal type="fadeUp" delay={0.1}>
            <div className="group card-premium h-full rounded-3xl border-l-4 border-l-cta p-8">
              <div className="flex items-center gap-3">
                <Earth className="h-10 w-10 text-cta" />
                <h3 className="text-2xl font-extrabold text-foreground">Our Vision</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                To become the leading provider of workforce solutions in Africa, recognized for our
                commitment to professional training, worker welfare, and operational excellence. We
                envision a future where every business has access to the skilled workers they need
                to thrive.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) * 0.1} type="fadeUp">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="card-premium flex flex-col items-center gap-3 rounded-3xl p-8 text-center"
              >
                <stat.icon className="h-12 w-12 text-cta" />
                <div className="text-4xl font-extrabold text-foreground">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <div className="mb-10">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us Forward"
            subtitle="Our values define who we are and guide every decision we make."
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 0.1} type="fadeUp">
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group card-premium h-full flex flex-col items-start gap-4 rounded-2xl p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-cta">
                    <value.icon className="h-8 w-8 text-cta transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <Reveal type="fadeUp">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-cta/8 border border-cta/15 p-8 text-center sm:p-10"
            >
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Ready to Partner With Rwanda's Workforce Leaders?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join the growing list of companies trusting Labor Connect Solutions for their
                workforce needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <Zap className="h-4 w-4 text-cta" />
                  <span className="text-sm font-semibold text-foreground">Fast Response</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <HandHeart className="h-4 w-4 text-cta" />
                  <span className="text-sm font-semibold text-foreground">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-cta" />
                  <span className="text-sm font-semibold text-foreground">No Commitment</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="btn-cta mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
