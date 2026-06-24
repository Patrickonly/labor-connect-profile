import { motion } from "framer-motion";

// We'll use placeholder company names for now; replace with actual logos as needed
const clients = [
  { name: "Tech Rwanda Ltd" },
  { name: "Kigali Hotels Group" },
  { name: "Rwanda Logistics Co." },
  { name: "Healthcare Rwanda" },
  { name: "Industrial Solutions RW" },
  { name: "Office Cleaning Pros" },
];

export function ClientLogos() {
  return (
    <section className="bg-secondary/40 py-12 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by leading companies in Rwanda
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12 sm:gap-16"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ x: { duration: 25, ease: "linear", repeat: Infinity } }}
          >
            {/* Duplicate list for seamless infinite scroll */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <span className="text-xl font-bold text-muted-foreground/60 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
