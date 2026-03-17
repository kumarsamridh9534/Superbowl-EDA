"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const adSpendData = [
  { year: "2020", cost: 5.6, roi: 2.3 },
  { year: "2021", cost: 5.5, roi: 2.1 },
  { year: "2022", cost: 6.5, roi: 2.8 },
  { year: "2023", cost: 7.0, roi: 3.2 },
  { year: "2024", cost: 7.5, roi: 3.5 },
]

export function AdvertisingMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Advertising ROI Metrics</CardTitle>
        <CardDescription>30-second ad costs (millions) and average ROI multiplier</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={adSpendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="year" className="text-muted-foreground" tick={{ fontSize: 12 }} />
              <YAxis
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                label={{ value: "Cost ($M)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value, name) => [
                  name === "cost" ? `$${value}M` : `${value}x`,
                  name === "cost" ? "Ad Cost" : "ROI Multiplier",
                ]}
              />
              <Bar dataKey="cost" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">2024 Ad Cost:</span>
            <span className="font-semibold">$7.5M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Average ROI:</span>
            <span className="font-semibold text-chart-2">3.5x</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
