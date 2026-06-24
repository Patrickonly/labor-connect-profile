import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Clock, ShieldAlert, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const problems = [
  {
    icon: AlertCircle,
    title: "Unreliable Staffing",
    desc: "Finding and retaining skilled workers is time-consuming and inconsistent for many businesses, causing operational disruptions.",
  },
  {
    icon: Users,
    title: "Untrained Workers",
    desc: "Many available staff lack proper training, leading to lower quality work, productivity losses, and costly mistakes.",
  },
  {
    icon: Clock,
    title: "Slow Hiring Processes",
    desc: "Recruiting, screening, and onboarding takes weeks or months when positions need filling immediately.",
  },
  {
    icon: ShieldAlert,
    title: "Safety Concerns",
    desc: "Untrained workers increase workplace accident risks and potential liability for employers across all sectors.",
  },
];

const solutions = [
  "Rigorous pre-deployment training for every worker",
  "Thorough background screening and vetting",
  "Rapid deployment to meet urgent workforce needs",
  "Safety certification before workers start on site",
  "Dedicated account management for every client",
  "Flexible short-term and long-term staffing contracts",
];

export function TheProblemWeSolve() {
  return (
    <section id="the-problem" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="The Problem We Solve"
          subtitle="Rwanda's growing industries face a persistent gap between available labor and job-ready, skilled workers."
        />

        {/* Problem statement */}
        <Reveal type="fadeUp">
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Rwanda's growing industries — manufacturing, mining, hospitality, and logistics — face
              a persistent gap between available labor and job-ready, skilled workers. Businesses
              struggle to find reliable, trained, and vetted personnel quickly, leading to
              operational downtime, safety incidents, and inconsistent service quality. Without
              structured training and screening, workers lack the professional skills, safety
              awareness, and industry knowledge that employers require, leaving both businesses and
              workers underserved.
            </p>
          </div>
        </Reveal>

        {/* Problem cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.09} type="fadeUp">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-premium flex h-full flex-col gap-4 rounded-2xl p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10">
                  <item.icon className="h-6 w-6 text-cta" />
                </span>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Our solution */}
        <Reveal type="fadeUp">
          <div className="mb-10 rounded-2xl border border-cta/20 bg-cta/5 p-6 sm:p-8">
            <h3 className="mb-5 text-xl font-extrabold text-foreground">How We Solve It</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal type="fadeUp">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-cta focus-ring inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              Get Trained Workers Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/training"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-cta hover:text-cta"
            >
              See Our Training Process
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
