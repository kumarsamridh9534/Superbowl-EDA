"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const demographicData = [
  { name: "Adults 18-34", value: 28, color: "hsl(var(--chart-1))" },
  { name: "Adults 35-54", value: 35, color: "hsl(var(--chart-2))" },
  { name: "Adults 55+", value: 25, color: "hsl(var(--chart-3))" },
  { name: "Children 2-17", value: 12, color: "hsl(var(--chart-4))" },
]

export function DemographicBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Demographic Breakdown</CardTitle>
        <CardDescription>2024 Super Bowl viewership by age group (percentage)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={demographicData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`${value}%`, "Viewership"]}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} formatter={(value) => value} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold">35%</div>
            <div className="text-muted-foreground text-xs">Prime Demo</div>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold">63%</div>
            <div className="text-muted-foreground text-xs">Adults 18-54</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
