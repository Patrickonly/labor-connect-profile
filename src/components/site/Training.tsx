import { ShieldCheck, Wrench, MessageSquare, Scale, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const items = [
  { icon: ShieldCheck, title: "Safety Training", desc: "Workplace safety, PPE use and regulatory compliance." },
  { icon: Wrench, title: "Technical Skills", desc: "Hands-on, industry-specific technical preparation." },
  { icon: MessageSquare, title: "Customer Service", desc: "Communication and service excellence for every role." },
  { icon: Scale, title: "Professional Ethics", desc: "Integrity, discipline and workplace conduct." },
];

export function Training() {
  return (
    <section id="training" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Training & Quality
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Every worker is trained before deployment
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              All staff complete structured training so they arrive ready to perform.
              We monitor performance continuously to maintain high service quality.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <GraduationCap className="h-8 w-8 text-cta" />
              <p className="text-sm font-medium text-foreground">
                95% client satisfaction rate across deployed workforce.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <it.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}