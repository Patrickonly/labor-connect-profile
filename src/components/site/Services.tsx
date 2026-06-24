import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cog,
  HardHat,
  HeartPulse,
  Home,
  PackageOpen,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const services = [
  {
    icon: Sparkles,
    title: "Professional Cleaners",
    desc: "Trained professionals in comprehensive cleaning and sanitation, maintaining high standards of hygiene in offices, facilities, and commercial spaces with efficient and thorough service delivery.",
  },
  {
    icon: PackageOpen,
    title: "Loaders & Off-loaders",
    desc: "Efficient handling of cargo, goods, and equipment. Our teams are trained in proper lifting techniques and warehouse operations to support logistics operations.",
  },
  {
    icon: Cog,
    title: "Machine Operators",
    desc: "Skilled operators trained to efficiently run various industrial equipment with precision and maintenance knowledge. Trained to maximize productivity and minimize downtime.",
  },
  {
    icon: Truck,
    title: "Forklift & Truck Drivers",
    desc: "Licensed drivers with experience on all types of commercial and passenger vehicles, trained in defensive driving and customer service excellence.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality Staff",
    desc: "Professionally trained hospitality staff delivering exceptional customer service and maintaining high service standards in food and beverage operations.",
  },
  {
    icon: Wrench,
    title: "Electrical & Mechanical Technicians",
    desc: "Certified technicians skilled in installation, maintenance, and repair of electrical and mechanical systems, delivering reliable and efficient service.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Support Workers",
    desc: "Care assistants, caregivers and social support personnel trained in compassionate care and professional patient support.",
  },
  {
    icon: HardHat,
    title: "General Laborers",
    desc: "Flexible manpower for construction, projects, and general support tasks, trained in safety and efficient work practices.",
  },
  {
    icon: Home,
    title: "Domestic Workers",
    desc: "Housekeepers, gardeners and reliable home assistants for residential needs, trained in professionalism and confidentiality.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Workforce Solutions"
          subtitle="Browse our full range of professional workforce services. Click any service card to request instantly."
        />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.12} type="fadeUp">
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group card-premium h-full rounded-3xl p-8 border-t-4 border-t-cta"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-cta">
                  <s.icon className="h-8 w-8 text-cta transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-foreground">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cta transition-colors hover:text-cta-hover"
                >
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
