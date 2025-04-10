
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, PlusCircle } from "lucide-react";
import { useState } from "react";

type LeaveStatus = "pending" | "approved" | "rejected";

interface LeaveRequest {
  id: string;
  title: string;
  description: string;
  status: LeaveStatus;
  requestDate: string;
  fromDate: string;
  toDate: string;
}

const LeavePage = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    { 
      id: "1", 
      title: "Medical Leave", 
      description: "Health checkup and recovery", 
      status: "pending", 
      requestDate: "Oct 20, 2023",
      fromDate: "Oct 25, 2023",
      toDate: "Oct 26, 2023"
    },
    { 
      id: "2", 
      title: "Conference Attendance", 
      description: "Annual Education Technology Conference", 
      status: "approved", 
      requestDate: "Oct 5, 2023",
      fromDate: "Nov 10, 2023",
      toDate: "Nov 12, 2023"
    },
    { 
      id: "3", 
      title: "Personal Leave", 
      description: "Family event", 
      status: "rejected", 
      requestDate: "Oct 1, 2023",
      fromDate: "Oct 8, 2023",
      toDate: "Oct 8, 2023"
    },
  ]);

  const getStatusColor = (status: LeaveStatus) => {
    switch (status) {
      case "pending": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "approved": return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "rejected": return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default: return "";
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
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Leave Management</h1>
              <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                <PlusCircle className="mr-2 h-4 w-4" /> Apply for Leave
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Leave Balance</CardTitle>
                  <CardDescription>Your available leave days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-facultyhub-text-secondary">Casual Leave</p>
                      <p className="text-2xl font-bold">8 days</p>
                    </div>
                    <div>
                      <p className="text-sm text-facultyhub-text-secondary">Medical Leave</p>
                      <p className="text-2xl font-bold">12 days</p>
                    </div>
                    <div>
                      <p className="text-sm text-facultyhub-text-secondary">Earned Leave</p>
                      <p className="text-2xl font-bold">15 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Academic Calendar</CardTitle>
                  <CardDescription>Important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Mid-semester break</p>
                        <p className="text-xs text-facultyhub-text-secondary">Oct 15 - Oct 22, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Winter vacation</p>
                        <p className="text-xs text-facultyhub-text-secondary">Dec 20, 2023 - Jan 5, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Leave Policies</CardTitle>
                  <CardDescription>Guidelines & regulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FileText className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Faculty leave policy</p>
                        <p className="text-xs text-facultyhub-text-secondary">Last updated: Aug 10, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="mr-2 h-4 w-4 mt-0.5 text-facultyhub-primary" />
                      <div>
                        <p className="font-medium">Academic calendar 2023-24</p>
                        <p className="text-xs text-facultyhub-text-secondary">Last updated: Jul 15, 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Leave Request History</CardTitle>
                <CardDescription>Your recent leave applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((leave) => (
                    <div key={leave.id} className="flex flex-col md:flex-row justify-between p-4 border border-facultyhub-card rounded-lg">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-facultyhub-text-primary">{leave.title}</h3>
                          <Badge className={`ml-2 ${getStatusColor(leave.status)}`}>
                            {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-facultyhub-text-secondary mt-1">{leave.description}</p>
                        <p className="text-xs text-facultyhub-text-secondary mt-2">Requested on: {leave.requestDate}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right flex flex-col justify-center">
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-xs text-facultyhub-text-secondary">
                          {leave.fromDate} {leave.fromDate !== leave.toDate ? `- ${leave.toDate}` : ''}
                        </p>
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

export default LeavePage;
