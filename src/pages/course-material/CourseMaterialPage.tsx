
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, File, FileText, FolderPlus, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CourseMaterialPage = () => {
  // Sample courses data
  const courses = [
    { id: "1", code: "CS301", name: "Database Systems", students: 45, materials: 12 },
    { id: "2", code: "CS302", name: "Web Technologies", students: 38, materials: 18 },
    { id: "3", code: "CS303", name: "Computer Networks", students: 42, materials: 15 },
    { id: "4", code: "CS304", name: "Artificial Intelligence", students: 36, materials: 9 },
  ];

  // Sample materials data
  const recentMaterials = [
    { id: "1", title: "Database Normalization", type: "pdf", size: "2.3 MB", course: "CS301", uploadDate: "Oct 10, 2023" },
    { id: "2", title: "HTML & CSS Basics", type: "ppt", size: "5.1 MB", course: "CS302", uploadDate: "Oct 9, 2023" },
    { id: "3", title: "Network Protocols", type: "pdf", size: "1.8 MB", course: "CS303", uploadDate: "Oct 8, 2023" },
    { id: "4", title: "Web Development Project", type: "zip", size: "12.5 MB", course: "CS302", uploadDate: "Oct 7, 2023" },
    { id: "5", title: "Machine Learning Intro", type: "pdf", size: "3.4 MB", course: "CS304", uploadDate: "Oct 6, 2023" },
  ];

  return (
    <div className="flex h-screen bg-facultyhub-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-facultyhub-text-primary">Course Material</h1>
              <div className="flex space-x-2">
                <Button className="bg-facultyhub-primary hover:bg-facultyhub-primary/90">
                  <Upload className="mr-2 h-4 w-4" /> Upload Material
                </Button>
                <Button variant="outline">
                  <FolderPlus className="mr-2 h-4 w-4" /> New Folder
                </Button>
              </div>
            </div>
            
            <div className="flex mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-facultyhub-text-secondary" />
                <Input 
                  placeholder="Search course materials..." 
                  className="pl-9 h-10"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:bg-facultyhub-card/60 cursor-pointer transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.code}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-facultyhub-text-secondary">Students</p>
                        <p className="font-medium">{course.students}</p>
                      </div>
                      <div>
                        <p className="text-facultyhub-text-secondary">Materials</p>
                        <p className="font-medium">{course.materials}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Uploads</CardTitle>
                <CardDescription>Latest materials added to your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMaterials.map((material) => (
                    <div key={material.id} className="flex items-center p-3 border border-facultyhub-card rounded-lg hover:bg-facultyhub-card/30 cursor-pointer transition-colors">
                      <div className="mr-4">
                        {material.type === 'pdf' && <FileText className="h-8 w-8 text-red-500" />}
                        {material.type === 'ppt' && <File className="h-8 w-8 text-blue-500" />}
                        {material.type === 'zip' && <File className="h-8 w-8 text-purple-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{material.title}</p>
                            <p className="text-xs text-facultyhub-text-secondary">
                              {material.type.toUpperCase()} • {material.size} • Uploaded on {material.uploadDate}
                            </p>
                          </div>
                          <Badge>{material.course}</Badge>
                        </div>
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

export default CourseMaterialPage;
