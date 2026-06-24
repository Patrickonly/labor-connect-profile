import { Users2, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const quick = ["Home", "About Us", "Services", "Training", "Industries", "Career", "Contact"];
const services = ["Cleaning", "Logistics", "Machine Operators", "Drivers", "Hospitality", "Healthcare Support"];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cta">
              <Users2 className="h-5 w-5 text-cta-foreground" />
            </span>
            <span className="font-extrabold">Labor Connect</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Connecting businesses with skilled, trained and reliable workers in Rwanda and beyond.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-cta">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {quick.map((q) => (
              <li key={q}><a href={`#${q.toLowerCase().replace(/ /g, "-").replace("us", "us")}`} className="transition-colors hover:text-cta">{q}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/90">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {services.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/90">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>+250 786 485 989</li>
            <li>info@labor-connect.com</li>
            <li>Kicukiro, Kigali — Rwanda</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Labor Connect Solutions Ltd. All rights reserved.
      </div>
    </footer>
  );
}