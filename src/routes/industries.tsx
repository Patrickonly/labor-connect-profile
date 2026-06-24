import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="pt-24 pb-12">
      <Industries />
    </div>
  );
}
