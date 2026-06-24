import {
  ShieldCheck,
  Wrench,
  MessageSquare,
  GraduationCap,
  UserCheck,
  Building2,
  BookOpen,
  HandHelping,
  TrendingUp,
  ShieldAlert,
  Star,
  Users,
  Repeat,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { SVGProps } from "react";

const trainingFeatures = [
  {
    icon: UserCheck,
    title: "Certified Instructors",
  },
  {
    icon: Building2,
    title: "Modern Training Facilities",
  },
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
  },
  {
    icon: HandHelping,
    title: "Hands-On Learning",
  },
];

const whyTrainingMatters = [
  {
    icon: ShieldAlert,
    title: "Reduces workplace accidents and safety incidents",
  },
  {
    icon: TrendingUp,
    title: "Increases productivity and efficiency from day one",
  },
  {
    icon: Star,
    title: "Ensures consistent quality of service delivery",
  },
  {
    icon: Users,
    title: "Builds worker confidence and professionalism",
  },
  {
    icon: Repeat,
    title: "Reduces turnover and increases job satisfaction",
  },
];

const trainingPrograms = [
  {
    icon: GraduationCap,
    title: "Safety & Compliance Training",
    desc: "Comprehensive workplace safety including first aid, hazard identification, risk assessment, and regulatory compliance.",
    duration: "1-2 Weeks",
    certification: "Safety Certification",
  },
  {
    icon: Wrench,
    title: "Technical Skills Training",
    desc: "Specialized training tailored to specific job functions, from machine operation to hospitality service excellence.",
    duration: "2-4 Weeks",
    certification: "Skills Certification",
  },
  {
    icon: MessageSquare,
    title: "Customer Service Excellence",
    desc: "Communication skills, conflict resolution, and client management for frontline workers.",
    duration: "1 Week",
    certification: "Service Certification",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    desc: "Leadership, time management, teamwork, and career advancement preparation.",
    duration: "Ongoing",
    certification: "Development Certificate",
  },
];

const benefits = [
  {
    title: "Increased Productivity",
    desc: "Trained workers complete tasks faster with fewer errors.",
  },
  {
    title: "Reduced Accidents",
    desc: "Safety training reduces workplace incidents by up to 70%.",
  },
  {
    title: "Higher Quality Work",
    desc: "Skilled workers deliver consistent, high-quality outputs.",
  },
  {
    title: "Employee Retention",
    desc: "Investment in training increases job satisfaction and reduces turnover.",
  },
  {
    title: "Greater Flexibility",
    desc: "Cross-trained workers can adapt to different roles as needed.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Certified workers demonstrate compliance with industry regulations.",
  },
];

export function Training() {
  return (
    <section id="training" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Our Approach */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Our Approach"
            title="Training That Sets Apart"
            subtitle="At Labor Connect Solutions, we believe comprehensive training is the foundation of reliable workers. Our training programs are designed to bridge the gap between raw potential and industry-ready professionals."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 4) * 0.1} type="fadeUp">
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card-premium flex flex-col items-center gap-4 rounded-2xl p-6 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cta/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-cta-foreground">
                    <feature.icon className="h-7 w-7 text-cta transition-colors duration-300 group-hover:text-cta-foreground" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every worker who joins Labor Connect Solutions undergoes rigorous training before
              deployment. This investment in human capital ensures our clients receive workers who
              are not just skilled, but safe, professional, and aligned with industry best
              practices.
            </p>
          </div>
        </div>

        {/* Why Training Matters */}
        <div className="mb-20 bg-secondary/50 rounded-3xl p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            Why Training Matters
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyTrainingMatters.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1} type="fadeUp">
                <div className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 text-cta shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Our Programs */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Our Programs"
            title="Comprehensive Training"
            subtitle="Our complete training pathway from safety fundamentals to specialized technical skills."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {trainingPrograms.map((program, i) => (
              <Reveal key={program.title} delay={(i % 2) * 0.12} type="fadeUp">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-full rounded-2xl border border-border bg-card p-6 card-premium"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cta/10 transition-all duration-300 hover:scale-110 hover:bg-cta hover:text-cta-foreground">
                      <program.icon className="h-7 w-7 text-cta transition-colors duration-300 hover:text-cta-foreground" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{program.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
                          <ClockIcon className="h-3.5 w-3.5" />
                          {program.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {program.certification}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Invest in Trained Workers?"
            subtitle="Comprehensive training delivers measurable benefits to both businesses and workers."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1} type="fadeUp">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card-premium h-full rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ready to Partner CTA */}
        <div>
          <Reveal type="fadeUp">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-cta/10 p-6 sm:p-10 text-center"
            >
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                Ready to Partner
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">Invest in Trained Workforce</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Experience the difference professionally trained workers can make in your business
                operations.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-cta" />
                  <span className="text-xs font-semibold text-foreground">
                    100% Certified Workers
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <Zap className="h-4 w-4 text-cta" />
                  <span className="text-xs font-semibold text-foreground">
                    Immediate Deployment
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cta/30 px-4 py-2">
                  <Star className="h-4 w-4 text-cta" />
                  <span className="text-xs font-semibold text-foreground">Guaranteed Quality</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-cta inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  Request Trained Workers
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary hover:border-cta hover:text-cta transition-all"
                >
                  Learn About Training
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
