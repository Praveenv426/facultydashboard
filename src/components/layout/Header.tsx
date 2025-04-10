
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <header className="bg-facultyhub-card border-b border-facultyhub-background/20 py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-facultyhub-text-secondary h-4 w-4" />
            <Input 
              placeholder="Search students, courses, assignments..." 
              className="pl-10 bg-facultyhub-background/60 border-facultyhub-background text-facultyhub-text-primary w-full"
            />
          </div>
        </div>
        
        <div className="text-right mr-4 hidden md:block">
          <div className="text-facultyhub-text-primary font-medium">{formatDate(currentDateTime)}</div>
          <div className="text-facultyhub-text-secondary text-sm">{formatTime(currentDateTime)}</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} className="text-facultyhub-text-secondary" />
            <Badge className="absolute -top-1 -right-1 bg-facultyhub-destructive h-5 w-5 p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare size={20} className="text-facultyhub-text-secondary" />
            <Badge className="absolute -top-1 -right-1 bg-facultyhub-primary h-5 w-5 p-0 flex items-center justify-center">
              2
            </Badge>
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right hidden md:block">
              <div className="text-facultyhub-text-primary font-medium">Dr. Smith</div>
              <div className="text-facultyhub-text-secondary text-xs">Computer Science</div>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
