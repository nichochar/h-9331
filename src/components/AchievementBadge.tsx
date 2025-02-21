
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  description: string;
  unlocked: boolean;
}

const AchievementBadge = ({ title, description, unlocked }: AchievementBadgeProps) => {
  return (
    <div className={cn(
      "flex items-center space-x-4 rounded-lg border p-4 transition-all duration-300",
      unlocked ? "bg-primary/5 border-primary" : "bg-muted/50 border-muted opacity-50"
    )}>
      <Award 
        className={cn(
          "h-8 w-8 transition-all duration-300",
          unlocked ? "text-primary animate-float badge-glow" : "text-muted-foreground"
        )} 
      />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
