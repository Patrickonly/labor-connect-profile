import {
  Sparkles,
  PackageOpen,
  Cog,
  Truck,
  UtensilsCrossed,
  Wrench,
  HeartPulse,
  HardHat,
  Home,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const services = [
  { icon: Sparkles, title: "Professional Cleaners", desc: "Office, industrial, commercial and deep cleaning teams." },
  { icon: PackageOpen, title: "Loaders & Off-loaders", desc: "Warehouse, packaging and inventory support staff." },
  { icon: Cog, title: "Machine Operators", desc: "Production line, CNC and equipment handling experts." },
  { icon: Truck, title: "Forklift & Truck Drivers", desc: "Licensed drivers and heavy equipment operators." },
  { icon: UtensilsCrossed, title: "Hospitality Staff", desc: "Waiters, housekeepers, kitchen and reception staff." },
  { icon: Wrench, title: "Electrical & Mechanical Technicians", desc: "Skilled technicians for maintenance and repairs." },
  { icon: HeartPulse, title: "Healthcare Support Workers", desc: "Care assistants, caregivers and social support." },
  { icon: HardHat, title: "General Laborers", desc: "Flexible manpower for construction and projects." },
  { icon: Home, title: "Domestic Workers", desc: "Housekeepers, gardeners and reliable home assistants." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Skilled people for every operation"
          subtitle="Flexible, efficient and cost-effective workforce solutions across nine core categories."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <s.icon className="h-6 w-6 text-accent" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition-colors hover:text-cta-hover"
                >
                  Request Service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}