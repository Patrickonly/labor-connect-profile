import { Factory, Truck, Building2, UtensilsCrossed, HeartPulse, Pickaxe, ShoppingBag, HandHeart, Landmark } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Truck, label: "Logistics" },
  { icon: Building2, label: "Construction" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Pickaxe, label: "Mining" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: HandHeart, label: "NGOs" },
  { icon: Landmark, label: "Government Projects" },
];

export function Industries() {
  return (
    <section id="industries" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Sectors we proudly serve"
          subtitle="From factories to government projects, we supply the right people for the job."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={(i % 3) * 0.08}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </span>
                <span className="text-sm font-semibold text-foreground">{ind.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}