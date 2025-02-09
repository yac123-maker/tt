import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// Define colors for the sections
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ffbb28"];

/**
 * DiskPercentageChart Component
 * @param {Array<{ value: number, color?: string }>} data - Array of percentage values to fill the disk
 */
export default function DiskPercentageChart({ data }) {
  // Normalize data if needed to ensure percentages sum up to 100
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const normalizedData = total > 0 ? data.map((item) => ({ ...item, value: (item.value / total) * 100 })) : [];

  return (
    <div className="w-64 h-64">
      <PieChart width={256} height={256}>
        <Pie
          data={normalizedData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
        >
          {normalizedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
} 

// Example usage:
// <DiskPercentageChart data={[{ value: 40 }, { value: 30 }, { value: 20 }, { value: 10 }]} />
