import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { motion } from "framer-motion";

const info = [
  { icon: Phone, label: "Phone", value: "+250 786 485 989", href: "tel:+250786485989" },
  {
    icon: Mail,
    label: "Email",
    value: "info@labor-connect.com",
    href: "mailto:info@labor-connect.com",
  },
  { icon: MapPin, label: "Location", value: "Kicukiro, Kigali Rwanda" },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+250 786 485 989",
    href: "https://wa.me/250786485989",
  },
];

const fieldClass =
  "rounded-xl border border-input bg-background px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-cta transition-all duration-200";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Request your workforce today"
          subtitle="Tell us what you need and our team will respond promptly."
        />
        <div className="grid gap-10 lg:grid-cols-5 mt-12">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {info.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  target={c.label === "WhatsApp" ? "_blank" : "_self"}
                  rel={c.label === "WhatsApp" ? "noopener noreferrer" : ""}
                  className="flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-md transition-all hover:border-primary/40 hover:shadow-xl"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cta/10 transition-all hover:bg-cta hover:text-cta-foreground">
                    <c.icon className="h-6 w-6 text-cta transition-colors hover:text-cta-foreground" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 break-words font-bold text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}

              {/* Google Maps Placeholder */}
              <div className="mt-4 rounded-3xl overflow-hidden border border-border shadow-md">
                <iframe
                  title="Labor Connect Office Location"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d30.0!3d-1.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTgnMTIuMCJTIDDCsDM0JzAwLjAiRQ!5e0!3m2!1sen!2srw!4v1719000000000!5m2!1sen!2srw"
                ></iframe>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-5 card-premium rounded-3xl p-8 sm:grid-cols-2 shadow-xl border-t-4 border-t-cta"
            >
              <input className={fieldClass} placeholder="Full name" />
              <input className={fieldClass} placeholder="Email address" type="email" />
              <input className={`${fieldClass} sm:col-span-2`} placeholder="Service needed" />
              <textarea
                className={`${fieldClass} sm:col-span-2`}
                rows={5}
                placeholder="Tell us about your requirements..."
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cta rounded-xl px-8 py-4 text-sm font-semibold sm:col-span-2 flex items-center justify-center gap-2"
              >
                <span>Request Workers</span>
                <Send className="h-4.5 w-4.5" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
