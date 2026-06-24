import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <Services />
    </div>
  );
}
