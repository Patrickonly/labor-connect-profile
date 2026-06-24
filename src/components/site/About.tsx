import { Target, Eye, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const timeline = [
  { step: "Founded", desc: "Built to meet Rwanda's demand for reliable manpower." },
  { step: "Training", desc: "Structured safety & skills training before deployment." },
  { step: "Deployment", desc: "Fast placement of verified, work-ready staff." },
  { step: "Support", desc: "Continuous supervision and performance monitoring." },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title="Professional workforce management built on trust"
          subtitle="Labor Connect Solutions Ltd bridges the gap between employers seeking quality manpower and individuals seeking opportunity — through careful recruitment, professional training, and continuous supervision."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "Connect businesses with skilled, trained, and reliable workers while creating sustainable employment opportunities." },
            { icon: Eye, title: "Our Vision", text: "To become the leading workforce solutions provider in Rwanda and East Africa, recognized for excellence and reliability." },
            { icon: ShieldCheck, title: "Reliability", text: "Verified, professionally trained staff who are ready to perform efficiently from day one." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group card-premium h-full rounded-2xl p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110">
                  <c.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.step} delay={i * 0.1}>
              <div className="card-premium relative rounded-2xl p-6">
                <span className="text-sm font-extrabold text-cta">0{i + 1}</span>
                <h4 className="mt-2 text-base font-bold text-foreground">{t.step}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}