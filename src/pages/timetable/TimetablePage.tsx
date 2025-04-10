
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TimetablePage = () => {
  // Sample timetable data
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { id: "1", subject: "Database Systems", time: "09:00 - 10:30", room: "Room 101", batch: "CSE-A" },
        { id: "2", subject: "Web Technologies", time: "11:00 - 12:30", room: "Lab 2", batch: "CSE-B" },
        { id: "3", subject: "Computer Networks", time: "14:00 - 15:30", room: "Room 203", batch: "CSE-C" },
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { id: "4", subject: "Artificial Intelligence", time: "10:00 - 11:30", room: "Room 105", batch: "CSE-A" },
        { id: "5", subject: "Web Technologies", time: "13:00 - 14:30", room: "Lab 2", batch: "CSE-C" },
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { id: "6", subject: "Database Systems", time: "09:00 - 10:30", room: "Room 101", batch: "CSE-B" },
        { id: "7", subject: "Computer Networks", time: "11:00 - 12:30", room: "Room 203", batch: "CSE-A" },
      ]
    },
    {
      day: "Thursday",
      classes: [
        { id: "8", subject: "Web Technologies", time: "09:00 - 10:30", room: "Lab 2", batch: "CSE-A" },
        { id: "9", subject: "Artificial Intelligence", time: "13:00 - 14:30", room: "Room 105", batch: "CSE-C" },
      ]
    },
    {
      day: "Friday",
      classes: [
        { id: "10", subject: "Computer Networks", time: "10:00 - 11:30", room: "Room 203", batch: "CSE-B" },
        { id: "11", subject: "Database Systems", time: "14:00 - 15:30", room: "Room 101", batch: "CSE-C" },
      ]
    },
  ];

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Timetable Management</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Today's Schedule</CardTitle>
                  <CardDescription>Thursday, October 12, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Web Technologies</p>
                        <p className="text-xs text-facultyhub-text-secondary">09:00 - 10:30 | Lab 2 | CSE-A</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Artificial Intelligence</p>
                        <p className="text-xs text-facultyhub-text-secondary">13:00 - 14:30 | Room 105 | CSE-C</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>Special classes & meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Department Meeting</p>
                        <p className="text-xs text-facultyhub-text-secondary">Oct 15 | 14:00 - 15:30 | Conference Room</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Guest Lecture: ML Research</p>
                        <p className="text-xs text-facultyhub-text-secondary">Oct 20 | 11:00 - 13:00 | Auditorium</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Class Statistics</CardTitle>
                  <CardDescription>Weekly distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-facultyhub-primary/10 rounded-lg">
                      <p className="text-xl font-bold text-facultyhub-primary">12</p>
                      <p className="text-xs text-facultyhub-text-secondary">Total Classes</p>
                    </div>
                    <div className="text-center p-3 bg-green-500/10 rounded-lg">
                      <p className="text-xl font-bold text-green-500">3</p>
                      <p className="text-xs text-facultyhub-text-secondary">Lab Sessions</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-500/10 rounded-lg">
                      <p className="text-xl font-bold text-yellow-500">2</p>
                      <p className="text-xs text-facultyhub-text-secondary">Events</p>
                    </div>
                    <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                      <p className="text-xl font-bold text-purple-500">4</p>
                      <p className="text-xs text-facultyhub-text-secondary">Subjects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your teaching schedule for the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklySchedule.map((day) => (
                    <div key={day.day} className="border border-facultyhub-card rounded-lg p-4">
                      <h3 className="font-medium text-facultyhub-text-primary mb-3">{day.day}</h3>
                      <div className="space-y-3">
                        {day.classes.map((cls) => (
                          <div key={cls.id} className="flex justify-between items-center p-3 bg-facultyhub-card/50 rounded-md">
                            <div>
                              <p className="font-medium">{cls.subject}</p>
                              <p className="text-xs text-facultyhub-text-secondary">{cls.time} | {cls.room}</p>
                            </div>
                            <Badge className="bg-facultyhub-primary">{cls.batch}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimetablePage;
