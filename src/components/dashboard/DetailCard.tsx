
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DetailItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  status?: "pending" | "approved" | "rejected" | "new";
  icon?: React.ReactNode;
}

interface DetailCardProps {
  title: string;
  items: DetailItem[];
  className?: string;
  icon?: React.ReactNode;
  maxItems?: number;
}

export const DetailCard = ({ 
  title, 
  items, 
  className, 
  icon,
  maxItems = 5
}: DetailCardProps) => {
  const displayItems = items.slice(0, maxItems);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "approved":
        return "bg-facultyhub-success text-white";
      case "rejected":
        return "bg-facultyhub-destructive text-white";
      case "pending":
        return "bg-yellow-600 text-white";
      case "new":
        return "bg-facultyhub-primary text-white";
      default:
        return "bg-facultyhub-card text-facultyhub-text-secondary";
    }
  };

  return (
    <Card className="card-hover border-facultyhub-card bg-facultyhub-card h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-facultyhub-text-primary text-lg flex items-center gap-2">
          {icon && <span className="text-facultyhub-primary">{icon}</span>}
          {title}
        </CardTitle>
        {displayItems.length < items.length && (
          <Badge variant="outline" className="text-facultyhub-text-secondary">
            +{items.length - displayItems.length} more
          </Badge>
        )}
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-4">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-start justify-between py-2 border-b border-facultyhub-background/20 last:border-0 animate-fade-in"
            >
              <div className="flex flex-col">
                <span className="text-facultyhub-text-primary font-medium">{item.title}</span>
                {item.description && (
                  <span className="text-xs text-facultyhub-text-secondary mt-1">
                    {item.description}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end">
                {item.date && (
                  <span className="text-xs text-facultyhub-text-secondary">
                    {item.date}
                  </span>
                )}
                {item.status && (
                  <Badge className={cn("mt-1", getStatusColor(item.status))}>
                    {item.status}
                  </Badge>
                )}
              </div>
            </div>
          ))}
          
          {displayItems.length === 0 && (
            <div className="py-8 text-center text-facultyhub-text-secondary">
              No items to display
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
