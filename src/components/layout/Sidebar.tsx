
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  CheckSquare, 
  Clock, 
  BookOpen, 
  Clipboard, 
  BarChart2,
  FileText, 
  Bell, 
  PieChart, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, to, isCollapsed, isActive }: SidebarItemProps) => {
  return (
    <Link to={to} className="w-full">
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start mb-1 text-facultyhub-text-secondary hover:text-facultyhub-text-primary",
          isActive && "bg-facultyhub-primary/10 text-facultyhub-primary",
          isCollapsed ? "px-2" : "px-4"
        )}
      >
        <div className={cn("flex items-center", !isCollapsed && "w-full")}>
          <div className="mr-2">{icon}</div>
          {!isCollapsed && <span>{label}</span>}
        </div>
      </Button>
    </Link>
  );
};

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { icon: <Home size={20} />, label: "Dashboard", to: "/" },
    { icon: <CheckSquare size={20} />, label: "Attendance", to: "/attendance" },
    { icon: <Clock size={20} />, label: "Timetable", to: "/timetable" },
    { icon: <BookOpen size={20} />, label: "Course Material", to: "/course-material" },
    { icon: <Clipboard size={20} />, label: "Assignments", to: "/assignments" },
    { icon: <BarChart2 size={20} />, label: "Student Performance", to: "/performance" },
    { icon: <FileText size={20} />, label: "Leave Management", to: "/leave" },
    { icon: <Bell size={20} />, label: "Messaging", to: "/messages" },
    { icon: <PieChart size={20} />, label: "Reports", to: "/reports" },
    { icon: <Settings size={20} />, label: "Settings", to: "/settings" },
  ];

  return (
    <div 
      className={cn(
        "flex flex-col h-screen bg-facultyhub-background border-r border-facultyhub-card p-3 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between mb-8 py-4">
        {!isCollapsed && (
          <div className="text-xl font-bold text-facultyhub-primary pl-2">FacultyHub</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight size={18} className="text-facultyhub-text-secondary" />
          ) : (
            <ChevronLeft size={18} className="text-facultyhub-text-secondary" />
          )}
        </Button>
      </div>

      <div className="flex flex-col space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem 
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isCollapsed={isCollapsed}
            isActive={location.pathname === item.to}
          />
        ))}
      </div>
    </div>
  );
};
