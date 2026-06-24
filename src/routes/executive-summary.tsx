import { createFileRoute } from "@tanstack/react-router";
import { ExecutiveSummary } from "@/components/site/ExecutiveSummary";

export const Route = createFileRoute("/executive-summary")({
  component: ExecutiveSummaryPage,
});

function ExecutiveSummaryPage() {
  return (
    <div className="pt-24 pb-12">
      <ExecutiveSummary />
    </div>
  );
}
