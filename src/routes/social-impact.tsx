import { createFileRoute } from "@tanstack/react-router";
import { SocialImpact } from "@/components/site/SocialImpact";

export const Route = createFileRoute("/social-impact")({
  component: SocialImpactPage,
});

function SocialImpactPage() {
  return (
    <div className="pt-24 pb-12">
      <SocialImpact />
    </div>
  );
}
