import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <About />
    </div>
  );
}
