
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, LineChart, Line } from "recharts";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  type: "area" | "bar" | "line";
  data: any[];
  className?: string;
}

export const ChartCard = ({ title, subtitle, type, data, className }: ChartCardProps) => {
  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2979FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2979FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#B0B0B0" />
              <YAxis stroke="#B0B0B0" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E1E1E', 
                  border: '1px solid #333',
                  color: '#FFFFFF'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#2979FF" 
                fillOpacity={1} 
                fill="url(#colorAttendance)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#B0B0B0" />
              <YAxis stroke="#B0B0B0" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E1E1E', 
                  border: '1px solid #333',
                  color: '#FFFFFF'
                }}
              />
              <Legend />
              <Bar dataKey="submitted" fill="#2979FF" />
              <Bar dataKey="pending" fill="#FF3D00" />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "line":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#B0B0B0" />
              <YAxis stroke="#B0B0B0" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E1E1E', 
                  border: '1px solid #333',
                  color: '#FFFFFF'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#2979FF" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#4CAF50" 
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="card-hover border-facultyhub-card bg-facultyhub-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-facultyhub-text-primary text-lg">{title}</CardTitle>
        {subtitle && <p className="text-xs text-facultyhub-text-secondary mt-1">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};
