
import HabitCard from "./HabitCard";

interface Habit {
  id: string;
  name: string;
  category: string;
  streak: number;
  completed: boolean;
}

interface HabitListProps {
  habits: Habit[];
  onComplete: (id: string) => void;
}

const HabitList = ({ habits, onComplete }: HabitListProps) => {
  return (
    <div className="habit-grid">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onComplete={onComplete} />
      ))}
    </div>
  );
};

export default HabitList;
