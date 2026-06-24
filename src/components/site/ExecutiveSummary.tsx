import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const highlights = [
  { icon: Users, value: "500+", label: "Trained Workers" },
  { icon: BriefcaseBusiness, value: "50+", label: "Partner Companies" },
  { icon: Star, value: "5.0", label: "Star Rating" },
  { icon: Award, value: "9", label: "Service Categories" },
];

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: "What We Do",
    body: "We provide skilled, trained workforce solutions including cleaning, logistics staff, machine operators, hospitality workers, healthcare support, and general labor — all deployment-ready from day one.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    body: "We support businesses across Rwanda and beyond, from SMEs to large enterprises, in manufacturing, hospitality, logistics, healthcare, construction, and more.",
  },
  {
    icon: TrendingUp,
    title: "Our Value",
    body: "Our clients benefit from reduced operational costs, improved productivity, faster staffing, and access to pre-trained, safety-certified professionals.",
  },
];

const services = [
  "Cleaning & Sanitation",
  "Logistics & Loading",
  "Machine Operators",
  "Forklift & Truck Drivers",
  "Hospitality Staff",
  "Electrical & Mechanical Technicians",
  "Healthcare Support Workers",
  "General Laborers",
  "Domestic Workers",
];

export function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <SectionHeading
          title="Executive Summary"
          subtitle="Labor Connect Solutions is Rwanda's premier professional workforce management company, headquartered in Kicukiro, Kigali."
        />

        {/* Intro block */}
        <Reveal type="fadeUp">
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-border bg-card p-6 text-center shadow-soft sm:p-8">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-cta" />
              <span>Kicukiro, Kigali, Rwanda</span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Founded over 5 years ago, the company bridges the gap between skilled workers and the
              industries that need them across Rwanda and beyond. Every worker undergoes rigorous
              training before deployment, ensuring clients receive industry-ready professionals from
              day one.
            </p>
          </div>
        </Reveal>

        {/* Key numbers */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08} type="fadeUp">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-premium flex flex-col items-center gap-2 rounded-2xl p-6 text-center"
              >
                <h.icon className="h-8 w-8 text-cta" />
                <div className="text-3xl font-extrabold text-foreground">{h.value}</div>
                <div className="text-sm text-muted-foreground">{h.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Three pillars */}
        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} type="fadeUp">
              <div className="card-premium h-full rounded-2xl border-t-4 border-t-cta p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10">
                    <p.icon className="h-5 w-5 text-cta" />
                  </span>
                  <h3 className="font-extrabold text-foreground">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Services list */}
        <Reveal type="fadeUp">
          <div className="mb-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-extrabold text-foreground">
              Our 9 Service Categories
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
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
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-cta hover:text-cta"
            >
              View All Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
