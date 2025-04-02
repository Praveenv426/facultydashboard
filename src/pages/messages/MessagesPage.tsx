
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SendHorizontal, User, Users } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Conversation {
  id: string;
  name: string;
  role: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

const MessagesPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Student - CS302",
      lastMessage: "Thank you for the clarification, professor.",
      time: "10:45 AM",
      unread: 0,
      messages: [
        {
          id: "1-1",
          sender: "Sarah Johnson",
          content: "Hello Professor, I had a question about the latest assignment on web technologies.",
          timestamp: "Yesterday, 3:30 PM",
          isOwn: false
        },
        {
          id: "1-2",
          sender: "You",
          content: "Hello Sarah, what specifically would you like to know about the assignment?",
          timestamp: "Yesterday, 4:15 PM",
          isOwn: true
        },
        {
          id: "1-3",
          sender: "Sarah Johnson",
          content: "I'm confused about the requirements for the responsive design section. Do we need to implement specific breakpoints?",
          timestamp: "Yesterday, 4:20 PM",
          isOwn: false
        },
        {
          id: "1-4",
          sender: "You",
          content: "Yes, you should implement breakpoints for mobile (< 768px), tablet (768px - 1024px), and desktop (> 1024px). Each should have an appropriate layout that optimizes the user experience.",
          timestamp: "Today, 10:30 AM",
          isOwn: true
        },
        {
          id: "1-5",
          sender: "Sarah Johnson",
          content: "Thank you for the clarification, professor.",
          timestamp: "Today, 10:45 AM",
          isOwn: false
        }
      ]
    },
    {
      id: "2",
      name: "John Smith",
      role: "Student - CS301",
      lastMessage: "Can I schedule a meeting to discuss my database project?",
      time: "Yesterday",
      unread: 2,
      messages: [
        {
          id: "2-1",
          sender: "John Smith",
          content: "Good afternoon Professor, I'm working on the database project and facing some issues with normalization.",
          timestamp: "Yesterday, 2:15 PM",
          isOwn: false
        },
        {
          id: "2-2",
          sender: "John Smith",
          content: "Can I schedule a meeting to discuss my database project?",
          timestamp: "Yesterday, 2:20 PM",
          isOwn: false
        }
      ]
    },
    {
      id: "3",
      name: "CSE Department",
      role: "Department Group",
      lastMessage: "Meeting scheduled for tomorrow at 3 PM in Conference Room 2.",
      time: "Oct 10",
      unread: 0,
      messages: [
        {
          id: "3-1",
          sender: "Dr. Robert Chen",
          content: "Hello everyone, I'd like to remind you about our monthly department meeting.",
          timestamp: "Oct 10, 9:00 AM",
          isOwn: false
        },
        {
          id: "3-2",
          sender: "Dr. Emily Davis",
          content: "Will we be discussing the curriculum changes in this meeting?",
          timestamp: "Oct 10, 9:15 AM",
          isOwn: false
        },
        {
          id: "3-3",
          sender: "Dr. Robert Chen",
          content: "Yes, that's on the agenda. Meeting scheduled for tomorrow at 3 PM in Conference Room 2.",
          timestamp: "Oct 10, 9:30 AM",
          isOwn: false
        }
      ]
    },
    {
      id: "4",
      name: "CS302 Class",
      role: "Class Group",
      lastMessage: "You: The deadline for the web project has been extended to Monday.",
      time: "Oct 8",
      unread: 0,
      messages: [
        {
          id: "4-1",
          sender: "You",
          content: "Good news everyone! The deadline for the web project has been extended to Monday.",
          timestamp: "Oct 8, 11:00 AM",
          isOwn: true
        }
      ]
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        const newMsg: Message = {
          id: `${conv.id}-${conv.messages.length + 1}`,
          sender: "You",
          content: newMessage,
          timestamp: "Just now",
          isOwn: true
        };
        
        return {
          ...conv,
          lastMessage: `You: ${newMessage}`,
          time: "Just now",
          messages: [...conv.messages, newMsg]
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id) || null);
    setNewMessage("");
  };

  const handleSelectConversation = (conversation: Conversation) => {
    // Mark as read when selecting
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversation.id && conv.unread > 0) {
        return { ...conv, unread: 0 };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setSelectedConversation(conversation);
  };

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-7xl mx-auto h-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Messaging & Notifications</h1>
              <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                <Users className="mr-2 h-4 w-4" /> New Message
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100%-4rem)]">
              <Card className="md:col-span-1 flex flex-col h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <CardDescription>Recent messages</CardDescription>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-facultyhub-text-secondary" />
                    <Input placeholder="Search messages..." className="pl-9 h-10" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-2">
                  <div className="space-y-2">
                    {conversations.map((conversation) => (
                      <div 
                        key={conversation.id} 
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedConversation?.id === conversation.id 
                            ? 'bg-facultyhub-primary/10' 
                            : 'hover:bg-facultyhub-card/60'
                        }`}
                        onClick={() => handleSelectConversation(conversation)}
                      >
                        <div className="flex items-start">
                          <div className="rounded-full bg-facultyhub-card h-10 w-10 flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-facultyhub-text-secondary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium truncate">{conversation.name}</h3>
                              <span className="text-xs text-facultyhub-text-secondary whitespace-nowrap ml-2">{conversation.time}</span>
                            </div>
                            <p className="text-xs text-facultyhub-text-secondary">{conversation.role}</p>
                            <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                          </div>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 bg-facultyhub-primary">{conversation.unread}</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 flex flex-col h-full">
                {selectedConversation ? (
                  <>
                    <CardHeader className="pb-2 border-b">
                      <div className="flex items-center">
                        <div className="rounded-full bg-facultyhub-card h-10 w-10 flex items-center justify-center mr-3">
                          <User className="h-5 w-5 text-facultyhub-text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{selectedConversation.name}</CardTitle>
                          <CardDescription>{selectedConversation.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        {selectedConversation.messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={`max-w-[70%] rounded-lg p-3 ${
                                message.isOwn 
                                  ? 'bg-facultyhub-primary text-white' 
                                  : 'bg-facultyhub-card'
                              }`}
                            >
                              {!message.isOwn && (
                                <p className="text-xs font-medium mb-1">{message.sender}</p>
                              )}
                              <p className="text-sm">{message.content}</p>
                              <p className="text-xs mt-1 opacity-70 text-right">{message.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-4 border-t">
                      <div className="flex">
                        <Input 
                          placeholder="Type your message..." 
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="flex-1"
                        />
                        <Button 
                          className="ml-2 bg-facultyhub-primary hover:bg-facultyhub-primary/90"
                          onClick={handleSendMessage}
                        >
                          <SendHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-facultyhub-text-secondary">
                    <p>Select a conversation to start messaging</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessagesPage;
