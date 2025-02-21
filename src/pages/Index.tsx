
import { useState } from "react";
import HabitList from "@/components/HabitList";
import AchievementBadge from "@/components/AchievementBadge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [habits, setHabits] = useState([
    { id: "1", name: "Morning Meditation", category: "Wellness", streak: 3, completed: false },
    { id: "2", name: "Read 30 mins", category: "Learning", streak: 5, completed: false },
    { id: "3", name: "Exercise", category: "Health", streak: 2, completed: false },
  ]);

  const [date, setDate] = useState<Date>(new Date());

  const handleComplete = (id: string) => {
    setHabits(habits.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed, streak: !habit.completed ? habit.streak + 1 : habit.streak - 1 }
        : habit
    ));
  };

  return (
    <div className="container mx-auto py-6 space-y-8 max-w-6xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Habit Tracker</h1>
        <p className="text-muted-foreground">Track your daily habits and build streaks.</p>
      </div>

      <Tabs defaultValue="habits" className="space-y-4">
        <TabsList>
          <TabsTrigger value="habits">Daily Habits</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="habits" className="space-y-4">
          <HabitList habits={habits} onComplete={handleComplete} />
        </TabsContent>

        <TabsContent value="calendar">
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && setDate(date)}
              className="rounded-md border"
            />
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <AchievementBadge
              title="First Step"
              description="Complete your first habit"
              unlocked={habits.some(h => h.completed)}
            />
            <AchievementBadge
              title="Consistency King"
              description="Maintain a 5-day streak"
              unlocked={habits.some(h => h.streak >= 5)}
            />
            <AchievementBadge
              title="Habit Master"
              description="Complete all habits in a day"
              unlocked={habits.every(h => h.completed)}
            />
            <AchievementBadge
              title="Perfect Week"
              description="Complete all habits for 7 days straight"
              unlocked={false}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
