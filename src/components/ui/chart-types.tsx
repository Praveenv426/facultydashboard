
import React from "react";
import {
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import { ChartContainer, ChartConfig } from "./chart";

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string;
      tension?: number;
    }[];
  };
  className?: string;
}

// Default config for charts
const defaultConfig: ChartConfig = {
  primary: {
    color: "#2979FF",
  },
  secondary: {
    color: "#4CAF50",
  },
  tertiary: {
    color: "#FF9800",
  },
  danger: {
    color: "#F44336",
  }
};

export const BarChart = ({ data, className }: ChartProps) => {
  // Transform data for recharts format
  const transformedData = data.labels.map((label, index) => {
    const dataPoint: Record<string, any> = { name: label };
    data.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const colors = data.datasets.map(dataset => 
    Array.isArray(dataset.backgroundColor) 
      ? dataset.backgroundColor 
      : [dataset.backgroundColor || "#4CAF50"]
  ).flat();

  return (
    <ChartContainer className={className} config={defaultConfig}>
      <RechartsBarChart data={transformedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.datasets.map((dataset, index) => (
          <Bar 
            key={index} 
            dataKey={dataset.label} 
            fill={Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[0] : dataset.backgroundColor || colors[index % colors.length]}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
};

export const LineChart = ({ data, className }: ChartProps) => {
  // Transform data for recharts format
  const transformedData = data.labels.map((label, index) => {
    const dataPoint: Record<string, any> = { name: label };
    data.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  return (
    <ChartContainer className={className} config={defaultConfig}>
      <RechartsLineChart data={transformedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.datasets.map((dataset, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={dataset.label}
            stroke={dataset.borderColor || `var(--color-${Object.keys(defaultConfig)[index % Object.keys(defaultConfig).length]})`}
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
};

export const PieChart = ({ data, className }: ChartProps) => {
  // For pie charts, we typically use the first dataset
  const dataset = data.datasets[0];
  
  // Transform data for recharts format
  const transformedData = data.labels.map((label, index) => ({
    name: label,
    value: dataset.data[index],
  }));

  // Use provided backgroundColor or default colors
  const COLORS = Array.isArray(dataset.backgroundColor) 
    ? dataset.backgroundColor 
    : ['#4CAF50', '#2979FF', '#FF9800', '#F44336', '#9C27B0', '#00BCD4'];

  return (
    <ChartContainer className={className} config={defaultConfig}>
      <RechartsPieChart>
        <Pie
          data={transformedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ChartContainer>
  );
};
