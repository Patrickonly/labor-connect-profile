import { createFileRoute } from "@tanstack/react-router";
import { TheProblemWeSolve } from "@/components/site/TheProblemWeSolve";

export const Route = createFileRoute("/the-problem")({
  component: TheProblemPage,
});

function TheProblemPage() {
  return (
    <div className="pt-24 pb-12">
      <TheProblemWeSolve />
    </div>
  );
}
