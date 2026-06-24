import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const info = [
  { icon: Phone, label: "Phone", value: "+250 786 485 989", href: "tel:+250786485989" },
  { icon: Mail, label: "Email", value: "info@labor-connect.com", href: "mailto:info@labor-connect.com" },
  { icon: MapPin, label: "Location", value: "Kicukiro, Kigali — Rwanda" },
];

const fieldClass =
  "rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Request your workforce today"
          subtitle="Tell us what you need and our team will respond promptly."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {info.map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 break-words font-semibold text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm sm:grid-cols-2"
            >
              <input className={fieldClass} placeholder="Full name" />
              <input className={fieldClass} placeholder="Email address" type="email" />
              <input className={`${fieldClass} sm:col-span-2`} placeholder="Service needed" />
              <textarea className={`${fieldClass} sm:col-span-2`} rows={4} placeholder="Your message" />
              <button className="rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover sm:col-span-2">
                Request Workforce
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}