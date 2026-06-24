import { Phone } from "lucide-react";

export function MobileCTA() {
  return (
    <a
      href="#contact"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-xl bg-cta py-3.5 text-sm font-semibold text-cta-foreground shadow-lg lg:hidden"
    >
      <Phone className="h-4 w-4" /> Request Workforce
    </a>
  );
}