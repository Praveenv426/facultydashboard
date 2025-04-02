
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  description?: string;
  variant?: "default" | "warning" | "success";
  className?: string;
}

export const StatsCard = ({
  icon,
  title,
  value,
  description,
  variant = "default",
  className,
}: StatsCardProps) => {
  const variantStyles = {
    default: "border-facultyhub-primary/20 bg-gradient-to-b from-facultyhub-primary/10 to-facultyhub-card",
    warning: "border-facultyhub-destructive/20 bg-gradient-to-b from-facultyhub-destructive/10 to-facultyhub-card",
    success: "border-facultyhub-success/20 bg-gradient-to-b from-facultyhub-success/10 to-facultyhub-card",
  };

  const iconStyles = {
    default: "text-facultyhub-primary",
    warning: "text-facultyhub-destructive",
    success: "text-facultyhub-success",
  };

  return (
    <Card className={cn("card-hover border", variantStyles[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-facultyhub-text-secondary">{title}</CardTitle>
        <div className={cn("p-2 rounded-full bg-facultyhub-background", iconStyles[variant])}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-facultyhub-text-primary">{value}</div>
        {description && (
          <p className="text-xs text-facultyhub-text-secondary mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};
