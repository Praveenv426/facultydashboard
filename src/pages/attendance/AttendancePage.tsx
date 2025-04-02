
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckSquare, Upload, DownloadCloud, Clock, Calendar } from "lucide-react";

const AttendancePage = () => {
  // Sample today's classes
  const todayClasses = [
    {
      id: "1",
      course: "CS401: Database Systems",
      time: "09:30 - 10:45 AM",
      room: "Room 302",
      status: "Completed"
    },
    {
      id: "2",
      course: "CS305: Web Development",
      time: "11:00 - 12:15 PM",
      room: "Lab 201",
      status: "Pending"
    },
    {
      id: "3",
      course: "CS502: Artificial Intelligence",
      time: "02:00 - 03:15 PM",
      room: "Room 405",
      status: "Upcoming"
    }
  ];

  // Sample student attendance data
  const students = [
    { id: "1", name: "John Smith", rollNo: "CS2201", status: "present" },
    { id: "2", name: "Emily Johnson", rollNo: "CS2202", status: "present" },
    { id: "3", name: "Michael Brown", rollNo: "CS2203", status: "absent" },
    { id: "4", name: "Sarah Davis", rollNo: "CS2204", status: "present" },
    { id: "5", name: "David Wilson", rollNo: "CS2205", status: "late" },
    { id: "6", name: "Jennifer Lee", rollNo: "CS2206", status: "present" },
    { id: "7", name: "Robert Taylor", rollNo: "CS2207", status: "absent" },
    { id: "8", name: "Lisa Anderson", rollNo: "CS2208", status: "present" },
    { id: "9", name: "James Martinez", rollNo: "CS2209", status: "present" },
    { id: "10", name: "Jessica Robinson", rollNo: "CS2210", status: "late" },
  ];

  // Function to get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "text-facultyhub-success";
      case "absent":
        return "text-facultyhub-destructive";
      case "late":
        return "text-yellow-500";
      case "Completed":
        return "text-facultyhub-success";
      case "Pending":
        return "text-yellow-500";
      case "Upcoming":
        return "text-facultyhub-text-secondary";
      default:
        return "text-facultyhub-text-secondary";
    }
  };

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Attendance Management</h1>
              <div className="flex gap-3">
                <Button className="flex gap-2 items-center">
                  <Upload size={16} />
                  Bulk Upload
                </Button>
                <Button variant="outline" className="flex gap-2 items-center">
                  <DownloadCloud size={16} />
                  Export
                </Button>
              </div>
            </div>

            <Tabs defaultValue="today" className="mb-6">
              <TabsList className="w-full bg-facultyhub-card border border-facultyhub-background justify-start mb-4">
                <TabsTrigger value="today" className="flex gap-2 items-center">
                  <Clock size={16} />
                  Today's Classes
                </TabsTrigger>
                <TabsTrigger value="history" className="flex gap-2 items-center">
                  <Calendar size={16} />
                  Attendance History
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex gap-2 items-center">
                  <CheckSquare size={16} />
                  Reports
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="today">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {todayClasses.map((cls) => (
                    <Card key={cls.id} className="card-hover border-facultyhub-card bg-facultyhub-card">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-facultyhub-text-primary text-base">{cls.course}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-facultyhub-text-secondary text-sm">Time</span>
                            <span className="text-facultyhub-text-primary text-sm font-medium">{cls.time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-facultyhub-text-secondary text-sm">Room</span>
                            <span className="text-facultyhub-text-primary text-sm font-medium">{cls.room}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-facultyhub-text-secondary text-sm">Status</span>
                            <span className={`text-sm font-medium ${getStatusColor(cls.status)}`}>{cls.status}</span>
                          </div>
                        </div>
                        {cls.status === "Pending" && (
                          <Button className="w-full mt-4">Mark Attendance</Button>
                        )}
                        {cls.status === "Completed" && (
                          <Button variant="outline" className="w-full mt-4">View Details</Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-facultyhub-card bg-facultyhub-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-facultyhub-text-primary">CS305: Web Development (11:00 - 12:15 PM)</CardTitle>
                      <div className="flex items-center gap-2">
                        <Input placeholder="Search students..." className="max-w-xs bg-facultyhub-background/60 border-facultyhub-background" />
                        <Button variant="outline">Save</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader className="bg-facultyhub-background/40">
                        <TableRow>
                          <TableHead className="text-facultyhub-text-secondary">Roll No.</TableHead>
                          <TableHead className="text-facultyhub-text-secondary">Student Name</TableHead>
                          <TableHead className="text-facultyhub-text-secondary text-center">Present</TableHead>
                          <TableHead className="text-facultyhub-text-secondary text-center">Absent</TableHead>
                          <TableHead className="text-facultyhub-text-secondary text-center">Late</TableHead>
                          <TableHead className="text-facultyhub-text-secondary text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="text-facultyhub-text-primary">{student.rollNo}</TableCell>
                            <TableCell className="text-facultyhub-text-primary font-medium">{student.name}</TableCell>
                            <TableCell className="text-center">
                              <Button 
                                variant={student.status === "present" ? "default" : "outline"} 
                                size="sm" 
                                className="h-7 w-7 p-0"
                              >
                                P
                              </Button>
                            </TableCell>
                            <TableCell className="text-center">
                              <Button 
                                variant={student.status === "absent" ? "destructive" : "outline"} 
                                size="sm" 
                                className="h-7 w-7 p-0"
                              >
                                A
                              </Button>
                            </TableCell>
                            <TableCell className="text-center">
                              <Button 
                                variant={student.status === "late" ? "outline" : "outline"} 
                                size="sm" 
                                className={`h-7 w-7 p-0 ${student.status === "late" ? "border-yellow-500 text-yellow-500" : ""}`}
                              >
                                L
                              </Button>
                            </TableCell>
                            <TableCell className={`text-right font-medium ${getStatusColor(student.status)}`}>
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card className="border-facultyhub-card bg-facultyhub-card">
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium text-facultyhub-text-primary mb-2">Attendance History</h3>
                      <p className="text-facultyhub-text-secondary">
                        Select a date and course to view previous attendance records.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card className="border-facultyhub-card bg-facultyhub-card">
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium text-facultyhub-text-primary mb-2">Attendance Reports</h3>
                      <p className="text-facultyhub-text-secondary">
                        Generate and view attendance reports for various courses and time periods.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AttendancePage;
