
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, UserRound, Award } from "lucide-react";

const Profile = () => {
  // This would typically come from your auth/user management system
  const userProfile = {
    name: "Jane Smith",
    joinedDate: "January 2024",
    totalHabits: 8,
    completedHabits: 124,
    longestStreak: 15,
    achievements: 3,
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col gap-8">
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <UserRound className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-muted-foreground">Member since {userProfile.joinedDate}</p>
            </div>
          </div>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Total Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{userProfile.totalHabits}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{userProfile.completedHabits}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Longest Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{userProfile.longestStreak} days</p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl">Achievements</CardTitle>
            <Award className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="badge-glow">Starter</Badge>
              <Badge variant="secondary">7 Day Streak</Badge>
              <Badge variant="outline">Early Bird</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
