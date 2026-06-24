import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  HandHeart,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const impactStats = [
  { icon: Briefcase, value: "1,000+", label: "Jobs Created" },
  { icon: ShieldCheck, value: "70%", label: "Reduction in Accidents" },
  { icon: Users, value: "500+", label: "Lives Transformed" },
  { icon: Award, value: "100%", label: "Fair Labor Practices" },
];

const communityItems = [
  "1,000+ trained youth from underserved communities",
  "Free vocational workshops and skills programs",
  "Job placement assistance after graduation",
  "Micro-enterprise and self-employment support",
];

const growthItems = [
  "Certified, marketable skills for every worker",
  "Safety training reducing workplace accidents by 70%",
  "Elevating worker livelihoods and career progression",
  "Contributing to Rwanda's Vision 2050 workforce goals",
];

export function SocialImpact() {
  return (
    <section id="social-impact" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Our Social Impact"
          subtitle="Labor Connect Solutions creates meaningful social value by investing in Rwanda's workforce and communities."
        />

        {/* Intro */}
        <Reveal type="fadeUp">
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Through structured training programs, the company has created 1,000+ jobs and equipped
              workers with certified, marketable skills. Safety training reduces workplace accidents
              by up to 70%. By prioritizing worker welfare and professional development, Labor
              Connect elevates livelihoods, reduces unemployment, and contributes to Rwanda's
              broader economic growth and vision for a skilled, competitive workforce in Africa.
            </p>
          </div>
        </Reveal>

        {/* Impact numbers */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} type="fadeUp">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-premium flex flex-col items-center gap-2 rounded-2xl p-6 text-center"
              >
                <s.icon className="h-8 w-8 text-cta" />
                <div className="text-3xl font-extrabold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Two columns */}
        <div className="mb-10 grid gap-5 lg:grid-cols-2">
          <Reveal type="fadeUp">
            <div className="card-premium h-full rounded-2xl border-t-4 border-t-cta p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10">
                  <HandHeart className="h-5 w-5 text-cta" />
                </span>
                <h3 className="text-lg font-extrabold text-foreground">Community Programs</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                We provide free skills training for youth from underserved communities in Rwanda,
                helping them access better job opportunities and build sustainable livelihoods.
              </p>
              <ul className="space-y-3">
                {communityItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal type="fadeUp" delay={0.1}>
            <div className="card-premium h-full rounded-2xl border-t-4 border-t-cta p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10">
                  <TrendingUp className="h-5 w-5 text-cta" />
                </span>
                <h3 className="text-lg font-extrabold text-foreground">
                  Economic Growth Contribution
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Every placement contributes to Rwanda's national development goals by building a
                qualified, competitive workforce ready for today's and tomorrow's economy.
              </p>
              <ul className="space-y-3">
                {growthItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal type="fadeUp">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-cta focus-ring inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-cta hover:text-cta"
            >
              Learn About Our Mission
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
