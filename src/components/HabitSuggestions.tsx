
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SuggestedHabit {
  name: string;
  category: string;
  description: string;
}

const predefinedSuggestions: SuggestedHabit[] = [
  {
    name: "Morning Meditation",
    category: "Mindfulness",
    description: "Start your day with 5 minutes of mindful breathing",
  },
  {
    name: "Daily Learning",
    category: "Growth",
    description: "Spend 15 minutes learning something new",
  },
  {
    name: "Gratitude Journal",
    category: "Mental Health",
    description: "Write down three things you're grateful for",
  },
  {
    name: "Evening Walk",
    category: "Health",
    description: "Take a 10-minute walk after dinner",
  },
  {
    name: "Digital Sunset",
    category: "Wellness",
    description: "No screens 1 hour before bed",
  }
];

const HabitSuggestions = () => {
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState<SuggestedHabit[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSuggestions = () => {
    setIsGenerating(true);
    // Simulate AI generation with a delay
    setTimeout(() => {
      // Randomly select 3 unique suggestions
      const randomSuggestions = [...predefinedSuggestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      setSuggestions(randomSuggestions);
      setIsGenerating(false);
      
      toast({
        title: "New suggestions generated!",
        description: "Try these habits to improve your daily routine.",
        duration: 3000,
      });
    }, 1500);
  };

  const addHabit = (habit: SuggestedHabit) => {
    toast({
      title: "Habit added",
      description: `${habit.name} has been added to your habits.`,
      duration: 3000,
    });
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold">
          Habit Suggestions
          <span className="ml-2 inline-block animate-pulse">
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </span>
        </CardTitle>
        <Button
          onClick={generateSuggestions}
          disabled={isGenerating}
          className="relative overflow-hidden group"
        >
          <Wand className="h-4 w-4 mr-2" />
          {isGenerating ? "Generating..." : "Generate Ideas"}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Click generate to get personalized habit suggestions
            </p>
          ) : (
            suggestions.map((habit, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors duration-200"
              >
                <div>
                  <h3 className="font-semibold">{habit.name}</h3>
                  <p className="text-sm text-muted-foreground">{habit.description}</p>
                  <span className="inline-block px-2 py-1 mt-2 text-xs rounded-full bg-primary/10 text-primary">
                    {habit.category}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addHabit(habit)}
                  className="ml-4"
                >
                  Add Habit
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitSuggestions;
