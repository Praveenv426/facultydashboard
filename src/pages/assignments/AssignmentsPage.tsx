
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, FileText, PlusCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const AssignmentsPage = () => {
  // Sample assignments data
  const assignments = [
    { 
      id: "1", 
      title: "Database ER Diagram", 
      course: "CS301", 
      deadline: "Oct 20, 2023", 
      totalStudents: 45, 
      submitted: 32,
      status: "open" as const
    },
    { 
      id: "2", 
      title: "HTML/CSS Portfolio Project", 
      course: "CS302", 
      deadline: "Oct 18, 2023", 
      totalStudents: 38, 
      submitted: 25,
      status: "open" as const
    },
    { 
      id: "3", 
      title: "Network Topology Design", 
      course: "CS303", 
      deadline: "Oct 15, 2023", 
      totalStudents: 42, 
      submitted: 42,
      status: "closed" as const
    },
    { 
      id: "4", 
      title: "Machine Learning Algorithm Implementation", 
      course: "CS304", 
      deadline: "Oct 25, 2023", 
      totalStudents: 36, 
      submitted: 10,
      status: "open" as const
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
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Assignments & Grading</h1>
              <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                <PlusCircle className="mr-2 h-4 w-4" /> Create Assignment
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Assignments</CardTitle>
                  <CardDescription>Currently open assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-facultyhub-primary">3</div>
                  <p className="text-sm text-facultyhub-text-secondary">Need to be graded soon</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Pending Reviews</CardTitle>
                  <CardDescription>Submissions waiting for feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-500">18</div>
                  <p className="text-sm text-facultyhub-text-secondary">From 3 different courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                  <CardDescription>Next assignment due dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">HTML/CSS Portfolio</p>
                      <p className="text-sm text-facultyhub-text-secondary">In 2 days</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Database ER Diagram</p>
                      <p className="text-sm text-facultyhub-text-secondary">In 4 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>All Assignments</CardTitle>
                <CardDescription>Manage your course assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="border border-facultyhub-card rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-facultyhub-text-primary">{assignment.title}</h3>
                              <Badge className={`ml-2 ${
                                assignment.status === 'open' 
                                  ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20' 
                                  : 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
                              }`}>
                                {assignment.status === 'open' ? 'Open' : 'Closed'}
                              </Badge>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-facultyhub-text-secondary">
                              <Badge variant="outline" className="mr-2">{assignment.course}</Badge>
                              <div className="flex items-center mr-4">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>Due: {assignment.deadline}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="mr-1 h-3 w-3" />
                                <span>{assignment.totalStudents} students</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center">
                              <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                              <span>
                                {assignment.submitted}/{assignment.totalStudents} submitted
                              </span>
                            </div>
                            <div className="mt-1">
                              <Progress value={(assignment.submitted / assignment.totalStudents) * 100} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-facultyhub-card/30 p-2 flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                        {assignment.status === 'open' && (
                          <Button size="sm" className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                            Grade Submissions
                          </Button>
                        )}
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

export default AssignmentsPage;
