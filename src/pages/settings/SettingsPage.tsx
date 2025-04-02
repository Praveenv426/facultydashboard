
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BellRing, Key, Lock, Save, User } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({
    name: "Dr. Alex Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science & Engineering",
    employeeId: "EMP-2023-0042",
    joinDate: "August 15, 2015",
    bio: "Professor of Computer Science with expertise in Database Systems, Web Technologies, and AI. 8+ years of teaching experience with a focus on practical learning approaches."
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    assignmentSubmissions: true,
    attendanceUpdates: false,
    systemAnnouncements: true,
    messageNotifications: true
  });

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Settings</h1>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <User className="mr-2 h-5 w-5 text-facultyhub-primary" />
                    <CardTitle>Profile Information</CardTitle>
                  </div>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input 
                        id="department" 
                        value={profileData.department}
                        onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input 
                        id="employeeId" 
                        value={profileData.employeeId}
                        readOnly
                        className="bg-facultyhub-card/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="joinDate">Date of Joining</Label>
                      <Input 
                        id="joinDate" 
                        value={profileData.joinDate}
                        readOnly
                        className="bg-facultyhub-card/50"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <textarea 
                        id="bio" 
                        rows={4}
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        className="w-full p-2 rounded-md bg-background border border-input text-sm resize-none"
                      />
                    </div>
                  </div>
                  <Button className="mt-6 bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Key className="mr-2 h-5 w-5 text-facultyhub-primary" />
                    <CardTitle>Password & Security</CardTitle>
                  </div>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Change Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" />
                          </div>
                        </div>
                      </div>
                      <Button className="mt-2 bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                        <Lock className="mr-2 h-4 w-4" />
                        Update Password
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm">Enhance your account security by enabling two-factor authentication.</p>
                          <p className="text-xs text-facultyhub-text-secondary mt-1">You'll be asked for a verification code when signing in from new devices.</p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Session Management</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm">You're currently logged in on 2 devices</p>
                          <p className="text-xs text-facultyhub-text-secondary mt-1">Last login: October 12, 2023 at 09:45 AM from 192.168.1.105</p>
                        </div>
                        <Button variant="outline">Manage Sessions</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <BellRing className="mr-2 h-5 w-5 text-facultyhub-primary" />
                    <CardTitle>Notification Preferences</CardTitle>
                  </div>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-xs text-facultyhub-text-secondary">Receive email notifications for important updates</p>
                      </div>
                      <Switch 
                        checked={notifications.emailNotifications} 
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, emailNotifications: checked})
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Push Notifications</Label>
                        <p className="text-xs text-facultyhub-text-secondary">Receive push notifications in your browser</p>
                      </div>
                      <Switch 
                        checked={notifications.pushNotifications} 
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, pushNotifications: checked})
                        }
                      />
                    </div>
                    <Separator />

                    <h3 className="text-sm font-medium pt-2">Notification Types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="assignment-notifications">Assignment Submissions</Label>
                        <Switch 
                          id="assignment-notifications"
                          checked={notifications.assignmentSubmissions} 
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, assignmentSubmissions: checked})
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="attendance-notifications">Attendance Updates</Label>
                        <Switch 
                          id="attendance-notifications"
                          checked={notifications.attendanceUpdates} 
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, attendanceUpdates: checked})
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="system-notifications">System Announcements</Label>
                        <Switch 
                          id="system-notifications"
                          checked={notifications.systemAnnouncements} 
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, systemAnnouncements: checked})
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="message-notifications">Message Notifications</Label>
                        <Switch 
                          id="message-notifications"
                          checked={notifications.messageNotifications} 
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, messageNotifications: checked})
                          }
                        />
                      </div>
                    </div>

                    <Button className="mt-2 bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                      Save Preferences
                    </Button>
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

export default SettingsPage;
