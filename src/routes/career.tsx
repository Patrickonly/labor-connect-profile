import { createFileRoute } from "@tanstack/react-router";
import { Career } from "@/components/site/Career";

export const Route = createFileRoute("/career")({
  component: CareerPage,
});

function CareerPage() {
  return (
    <div className="pt-24 pb-12">
      <Career />
    </div>
  );
}
