import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/site/WhyUs";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <div className="pt-24 pb-12">
      <WhyUs />
    </div>
  );
}
