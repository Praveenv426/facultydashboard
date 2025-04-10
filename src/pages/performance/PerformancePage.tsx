
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart-types";
import { Button } from "@/components/ui/button";
import { FileDown, Filter, Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const PerformancePage = () => {
  // Sample data for charts
  const attendanceData = {
    labels: ['CS301', 'CS302', 'CS303', 'CS304'],
    datasets: [
      {
        label: 'Average Attendance (%)',
        data: [78, 85, 92, 65],
        backgroundColor: ['#4CAF50', '#2979FF', '#FF9800', '#F44336'],
      },
    ],
  };

  const performanceData = {
    labels: ['Assignment 1', 'Assignment 2', 'Mid Term', 'Assignment 3', 'End Term'],
    datasets: [
      {
        label: 'CS301',
        data: [75, 82, 78, 85, 80],
        borderColor: '#4CAF50',
        tension: 0.2,
      },
      {
        label: 'CS302',
        data: [85, 88, 75, 92, 86],
        borderColor: '#2979FF',
        tension: 0.2,
      },
      {
        label: 'CS303',
        data: [90, 88, 92, 89, 94],
        borderColor: '#FF9800',
        tension: 0.2,
      },
      {
        label: 'CS304',
        data: [65, 72, 68, 75, 70],
        borderColor: '#F44336',
        tension: 0.2,
      },
    ],
  };

  const gradeDistribution = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Students',
        data: [42, 35, 20, 10, 3],
        backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF9800', '#F44336'],
      },
    ],
  };

  // Sample student data
  const topStudents = [
    { id: "1", name: "Emma Watson", roll: "CS2001", course: "CS302", marks: 95, attendance: 98 },
    { id: "2", name: "John Smith", roll: "CS2015", course: "CS303", marks: 92, attendance: 96 },
    { id: "3", name: "Michael Johnson", roll: "CS2008", course: "CS303", marks: 90, attendance: 92 },
    { id: "4", name: "Sarah Parker", roll: "CS2022", course: "CS301", marks: 88, attendance: 94 },
  ];

  const atRiskStudents = [
    { id: "5", name: "David Williams", roll: "CS2034", course: "CS304", marks: 58, attendance: 65 },
    { id: "6", name: "Emily Davis", roll: "CS2045", course: "CS304", marks: 62, attendance: 72 },
    { id: "7", name: "Robert Brown", roll: "CS2012", course: "CS301", marks: 65, attendance: 68 },
  ];

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Student Performance</h1>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
                <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                  <FileDown className="mr-2 h-4 w-4" /> Export Report
                </Button>
              </div>
            </div>
            
            <div className="flex mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-facultyhub-text-secondary" />
                <Input 
                  placeholder="Search by student name or ID..." 
                  className="pl-9 h-10"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Attendance Overview</CardTitle>
                  <CardDescription>Average attendance by course</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-60">
                    <PieChart data={attendanceData} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Performance Trend</CardTitle>
                  <CardDescription>Assessment results by course</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-60">
                    <LineChart data={performanceData} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Grade Distribution</CardTitle>
                  <CardDescription>Overall student grades</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-60">
                    <BarChart data={gradeDistribution} />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Top Performing Students</CardTitle>
                  <CardDescription>Students with highest scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topStudents.map((student) => (
                      <div key={student.id} className="flex items-center p-3 border border-facultyhub-card rounded-lg">
                        <div className="mr-3 h-10 w-10 rounded-full bg-facultyhub-primary/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-facultyhub-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <div className="flex items-center text-xs text-facultyhub-text-secondary">
                                <span className="mr-2">{student.roll}</span>
                                <Badge>{student.course}</Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-green-500">{student.marks}%</p>
                              <p className="text-xs text-facultyhub-text-secondary">
                                Attendance: {student.attendance}%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">At-Risk Students</CardTitle>
                  <CardDescription>Students needing attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atRiskStudents.map((student) => (
                      <div key={student.id} className="flex items-center p-3 border border-facultyhub-card rounded-lg">
                        <div className="mr-3 h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <div className="flex items-center text-xs text-facultyhub-text-secondary">
                                <span className="mr-2">{student.roll}</span>
                                <Badge>{student.course}</Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-red-500">{student.marks}%</p>
                              <div className="text-xs text-facultyhub-text-secondary">
                                <p>Attendance: {student.attendance}%</p>
                                <Progress value={student.attendance} className="h-1 mt-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All At-Risk Students</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Course-wise Performance</CardTitle>
                <CardDescription>Analysis by subject</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-facultyhub-card rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-medium">Database Systems (CS301)</h3>
                        <p className="text-sm text-facultyhub-text-secondary">45 students enrolled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Average: 78%</p>
                        <p className="text-sm text-facultyhub-text-secondary">Highest: 92%</p>
                      </div>
                    </div>
                    <Progress value={78} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-facultyhub-text-secondary">
                      <span>Pass rate: 93%</span>
                      <span>Attendance: 82%</span>
                    </div>
                  </div>
                  
                  <div className="border border-facultyhub-card rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-medium">Web Technologies (CS302)</h3>
                        <p className="text-sm text-facultyhub-text-secondary">38 students enrolled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Average: 85%</p>
                        <p className="text-sm text-facultyhub-text-secondary">Highest: 95%</p>
                      </div>
                    </div>
                    <Progress value={85} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-facultyhub-text-secondary">
                      <span>Pass rate: 97%</span>
                      <span>Attendance: 85%</span>
                    </div>
                  </div>
                  
                  <div className="border border-facultyhub-card rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-medium">Computer Networks (CS303)</h3>
                        <p className="text-sm text-facultyhub-text-secondary">42 students enrolled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Average: 92%</p>
                        <p className="text-sm text-facultyhub-text-secondary">Highest: 98%</p>
                      </div>
                    </div>
                    <Progress value={92} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-facultyhub-text-secondary">
                      <span>Pass rate: 100%</span>
                      <span>Attendance: 92%</span>
                    </div>
                  </div>
                  
                  <div className="border border-facultyhub-card rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-medium">Artificial Intelligence (CS304)</h3>
                        <p className="text-sm text-facultyhub-text-secondary">36 students enrolled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Average: 65%</p>
                        <p className="text-sm text-facultyhub-text-secondary">Highest: 88%</p>
                      </div>
                    </div>
                    <Progress value={65} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-facultyhub-text-secondary">
                      <span>Pass rate: 78%</span>
                      <span>Attendance: 65%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PerformancePage;
