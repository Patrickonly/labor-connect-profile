import { useState } from "react";
import { Upload, Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const categories = [
  "Cleaning", "Logistics", "Machine Operators", "Drivers",
  "Hospitality", "Technicians", "Healthcare Support", "Domestic", "General Labor",
];

export function Career() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section id="career" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career / Jobs"
          title="Looking for Work?"
          subtitle="Join our pool of trained professionals. Browse categories and submit your application."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-premium rounded-2xl p-7">
              <h3 className="text-lg font-bold text-foreground">Browse Job Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="card-premium rounded-2xl p-7"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Briefcase className="h-5 w-5 text-cta" /> Apply Now
              </h3>
              <div className="mt-4 grid gap-4">
                <input className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Full name" />
                <input className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Phone number" />
                <select className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select job category</option>
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-input px-4 py-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                  <Upload className="h-4 w-4" />
                  {fileName ?? "Upload CV (PDF / DOC)"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
                <button className="btn-cta rounded-xl px-6 py-3.5 text-sm font-semibold">
                  Submit Application
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}