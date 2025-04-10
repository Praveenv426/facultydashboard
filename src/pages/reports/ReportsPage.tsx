
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart-types";
import { Calendar, Download, FileDown, Filter, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ReportsPage = () => {
  // Sample attendance data
  const attendanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'CS301',
        data: [90, 88, 85, 92, 87, 82, 88, 91],
        borderColor: '#4CAF50',
        tension: 0.2,
      },
      {
        label: 'CS302',
        data: [85, 87, 82, 80, 85, 89, 84, 82],
        borderColor: '#2979FF',
        tension: 0.2,
      },
      {
        label: 'CS303',
        data: [95, 92, 94, 96, 93, 95, 97, 98],
        borderColor: '#FF9800',
        tension: 0.2,
      },
      {
        label: 'CS304',
        data: [72, 68, 75, 70, 65, 78, 72, 75],
        borderColor: '#F44336',
        tension: 0.2,
      },
    ],
  };

  // Sample grade distribution
  const gradeDistributionCS301 = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Students',
        data: [15, 18, 8, 3, 1],
        backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF9800', '#F44336'],
      },
    ],
  };

  const gradeDistributionCS302 = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Students',
        data: [12, 16, 7, 2, 1],
        backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF9800', '#F44336'],
      },
    ],
  };

  // Sample reports list
  const reports = [
    { id: "1", title: "Mid-Semester Attendance Report", date: "Oct 15, 2023", type: "attendance" },
    { id: "2", title: "CS302 Assignment Performance Analysis", date: "Oct 12, 2023", type: "performance" },
    { id: "3", title: "Student Progress Report - CS303", date: "Oct 10, 2023", type: "progress" },
    { id: "4", title: "Database Systems - Mid Term Analysis", date: "Oct 8, 2023", type: "exam" },
    { id: "5", title: "Web Technologies - Project Submission Status", date: "Oct 5, 2023", type: "submission" },
  ];

  // Function to get badge color based on report type
  const getReportBadgeColor = (type: string) => {
    switch (type) {
      case "attendance": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "performance": return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "progress": return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
      case "exam": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "submission": return "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20";
      default: return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Reports & Analytics</h1>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
                <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                  <Calendar className="mr-2 h-4 w-4" /> Generate New Report
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Attendance Trends</CardTitle>
                  <CardDescription>Weekly attendance by course</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-80">
                    <LineChart data={attendanceData} />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">CS301 Grade Distribution</CardTitle>
                    <CardDescription>Database Systems</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-64">
                      <PieChart data={gradeDistributionCS301} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">CS302 Grade Distribution</CardTitle>
                    <CardDescription>Web Technologies</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-64">
                      <BarChart data={gradeDistributionCS302} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Generated reports and analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-facultyhub-card rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <FileDown className="h-5 w-5 text-facultyhub-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <div className="flex items-center mt-1">
                            <Badge className={getReportBadgeColor(report.type)}>
                              {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                            </Badge>
                            <p className="text-xs text-facultyhub-text-secondary ml-2">Generated: {report.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Report Templates</CardTitle>
                  <CardDescription>Quick access to common reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span>Course Attendance Report</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span>Student Performance Analysis</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span>Assignment Submission Status</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span>Grade Distribution Summary</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span>Individual Student Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Scheduled Reports</CardTitle>
                  <CardDescription>Automated report generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 border border-facultyhub-card rounded-lg">
                      <div>
                        <p className="font-medium">Weekly Attendance Summary</p>
                        <p className="text-xs text-facultyhub-text-secondary">Every Monday at 9:00 AM</p>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                    </div>
                    
                    <div className="flex justify-between p-3 border border-facultyhub-card rounded-lg">
                      <div>
                        <p className="font-medium">Monthly Performance Report</p>
                        <p className="text-xs text-facultyhub-text-secondary">1st day of month at 8:00 AM</p>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                    </div>
                    
                    <div className="flex justify-between p-3 border border-facultyhub-card rounded-lg">
                      <div>
                        <p className="font-medium">Assignment Submission Status</p>
                        <p className="text-xs text-facultyhub-text-secondary">Every Friday at 5:00 PM</p>
                      </div>
                      <Badge className="bg-yellow-500/10 text-yellow-500">Paused</Badge>
                    </div>
                    
                    <Button className="w-full">Schedule New Report</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;
