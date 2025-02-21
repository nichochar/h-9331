
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HabitCardProps {
  habit: {
    id: string;
    name: string;
    category: string;
    streak: number;
    completed: boolean;
  };
  onComplete: (id: string) => void;
}

const HabitCard = ({ habit, onComplete }: HabitCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{habit.name}</CardTitle>
        <Badge 
          variant="secondary" 
          className="transition-colors duration-300"
        >
          {habit.category}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Current streak: {habit.streak} days
            </span>
          </div>
          <Button
            size="sm"
            onClick={() => onComplete(habit.id)}
            className={cn(
              "transition-all duration-300",
              habit.completed && "bg-primary hover:bg-primary/90"
            )}
          >
            {habit.completed ? (
              <Check className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitCard;
