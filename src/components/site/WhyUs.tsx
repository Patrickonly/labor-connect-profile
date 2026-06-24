import { GraduationCap, Zap, BadgeCheck, ShieldAlert, Wallet, Handshake } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const points = [
  { icon: GraduationCap, title: "Professionally Trained Workers", desc: "Skilled and prepared for every assignment." },
  { icon: Zap, title: "Fast Deployment", desc: "Quick placement when you need staff most." },
  { icon: BadgeCheck, title: "Verified Staff", desc: "Background-checked and trusted personnel." },
  { icon: ShieldAlert, title: "Safety First Approach", desc: "Strict safety standards on every site." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Cost-effective, flexible staffing options." },
  { icon: Handshake, title: "Reliable Workforce", desc: "Dependable people, consistent results." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Us"
          title="Why companies choose Labor Connect"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta/10">
                  <p.icon className="h-5 w-5 text-cta" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}