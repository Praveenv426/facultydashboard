
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DetailCard } from "@/components/dashboard/DetailCard";

import { 
  BookOpen, 
  CheckSquare, 
  Clipboard, 
  MessageSquare,
  Upload,
  Calendar,
  Bell
} from "lucide-react";

const Index = () => {
  // Sample data for stats cards
  const statsData = [
    { 
      title: "Today's Lectures", 
      value: "3", 
      description: "Next: Database Systems at 11:30 AM", 
      icon: <BookOpen size={20} />, 
      variant: "default" 
    },
    { 
      title: "Pending Attendance", 
      value: "1", 
      description: "Web Development - 10:30 AM", 
      icon: <CheckSquare size={20} />, 
      variant: "warning" 
    },
    { 
      title: "Pending Assignments", 
      value: "4", 
      description: "2 are due today", 
      icon: <Clipboard size={20} />, 
      variant: "default" 
    },
    { 
      title: "Student Queries", 
      value: "2", 
      description: "Unread messages", 
      icon: <MessageSquare size={20} />, 
      variant: "success" 
    }
  ];

  // Sample data for attendance chart
  const attendanceData = [
    { name: "Week 1", value: 92 },
    { name: "Week 2", value: 88 },
    { name: "Week 3", value: 95 },
    { name: "Week 4", value: 90 },
    { name: "Week 5", value: 85 },
    { name: "Week 6", value: 92 },
    { name: "Week 7", value: 96 },
  ];

  // Sample data for assignment submission chart
  const assignmentData = [
    { name: "Web Dev", submitted: 25, pending: 5 },
    { name: "Algorithms", submitted: 22, pending: 8 },
    { name: "Database", submitted: 28, pending: 2 },
    { name: "AI", submitted: 18, pending: 12 },
  ];

  // Sample data for student performance chart
  const performanceData = [
    { name: "Quiz 1", attendance: 90, performance: 85 },
    { name: "Mid-term", attendance: 92, performance: 78 },
    { name: "Quiz 2", attendance: 88, performance: 82 },
    { name: "Project", attendance: 95, performance: 90 },
    { name: "Finals", attendance: 96, performance: 88 },
  ];

  // Sample data for recent uploads
  const recentUploads = [
    { 
      id: "1", 
      title: "Database Systems - Week 7 Slides", 
      description: "Normalization and ER Diagrams", 
      date: "Today, 09:15 AM" 
    },
    { 
      id: "2", 
      title: "AI Assignment Instructions", 
      description: "Neural Networks Implementation", 
      date: "Yesterday, 02:30 PM" 
    },
    { 
      id: "3", 
      title: "Web Development - Project Guidelines", 
      description: "Final Project Requirements", 
      date: "Oct 12, 11:45 AM" 
    }
  ];

  // Sample data for leave requests
  const leaveRequests = [
    { 
      id: "1", 
      title: "Medical Leave", 
      description: "2 days (Oct 25-26)", 
      status: "pending", 
      date: "Requested: Oct 20" 
    },
    { 
      id: "2", 
      title: "Conference Attendance", 
      description: "3 days (Nov 10-12)", 
      status: "approved", 
      date: "Requested: Oct 5" 
    },
    { 
      id: "3", 
      title: "Personal Leave", 
      description: "1 day (Oct 8)", 
      status: "rejected", 
      date: "Requested: Oct 1" 
    }
  ];

  // Sample data for notifications
  const notifications = [
    { 
      id: "1", 
      title: "Faculty Meeting", 
      description: "Tomorrow at 3:00 PM in Conference Room A", 
      date: "1 hour ago", 
      status: "new" 
    },
    { 
      id: "2", 
      title: "Mid-term Exam Schedule", 
      description: "Published by Academic Office", 
      date: "3 hours ago" 
    },
    { 
      id: "3", 
      title: "Research Grant Application", 
      description: "Deadline extended to November 15", 
      date: "Yesterday", 
    },
    { 
      id: "4", 
      title: "Student Council Event", 
      description: "Technical Symposium on October 30", 
      date: "2 days ago" 
    }
  ];

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-facultyhub-text-primary mb-6">Dashboard</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  variant={stat.variant as "default" | "warning" | "success"}
                />
              ))}
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <ChartCard 
                title="Class Attendance Report" 
                subtitle="Average attendance over the semester"
                type="area" 
                data={attendanceData} 
              />
              <ChartCard 
                title="Assignment Submission Rate" 
                subtitle="Subject-wise submission status"
                type="bar" 
                data={assignmentData} 
              />
              <ChartCard 
                title="Student Performance Overview" 
                subtitle="Correlation between attendance and performance"
                type="line" 
                data={performanceData} 
              />
            </div>
            
            {/* Detail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DetailCard 
                title="Recent Study Material Uploads" 
                icon={<Upload size={18} />}
                items={recentUploads} 
              />
              <DetailCard 
                title="Leave Request Status" 
                icon={<Calendar size={18} />}
                items={leaveRequests} 
              />
              <DetailCard 
                title="Notifications" 
                icon={<Bell size={18} />}
                items={notifications} 
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
