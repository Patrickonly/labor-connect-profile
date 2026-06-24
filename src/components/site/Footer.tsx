import logoImg from "@/assets/final32-D0XcQR5p.png";
import { Link } from "@tanstack/react-router";
import {
  BriefcaseBusiness,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  MapPin,
  ShieldCheck,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const serviceItems = [
  { label: "Cleaning", icon: ShieldCheck },
  { label: "Logistics", icon: BriefcaseBusiness },
  { label: "Machine Operators", icon: BriefcaseBusiness },
  { label: "Drivers", icon: BriefcaseBusiness },
  { label: "Hospitality", icon: BriefcaseBusiness },
  { label: "Healthcare Support", icon: ShieldCheck },
];

const legalItems = [
  { label: "Privacy Policy", href: "#", icon: FileText },
  { label: "Terms and Conditions", href: "#", icon: FileText },
  { label: "Cookie Policy", href: "#", icon: FileText },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="footer-surface mt-10 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Labor Connect Solutions Logo"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75">
            Trusted workforce solutions connecting businesses with skilled, trained workers in
            Rwanda and beyond.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/72">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              <div>
                <p className="font-semibold text-white">Registered Address</p>
                <p>Kicukiro, Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              <div>
                <p className="font-semibold text-white">Company Information</p>
                <p>Registration and VAT information available on request.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white/80 transition-all hover:scale-110 hover:border-cta/40 hover:bg-cta hover:text-cta-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-white/95">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="focus-ring inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cta" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-white/95">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {serviceItems.map(({ label, icon: Icon }) => (
              <li key={label} className="inline-flex items-start gap-2.5 leading-relaxed">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-white/95">Legal</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {legalItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  className="focus-ring inline-flex items-center gap-2 transition-colors hover:text-white"
                  href={href}
                >
                  <Icon className="h-4 w-4 shrink-0 text-cta" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} Labor Connect Solutions Ltd. All rights reserved.
      </div>
    </footer>
  );
}
