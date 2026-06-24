import { createFileRoute } from "@tanstack/react-router";
import { Training } from "@/components/site/Training";

export const Route = createFileRoute("/training")({
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <div className="pt-24 pb-12">
      <Training />
    </div>
  );
}
