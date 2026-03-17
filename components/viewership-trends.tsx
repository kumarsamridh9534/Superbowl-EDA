"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const viewershipData = [
  { year: "2010", viewers: 106.5, rating: 46.4 },
  { year: "2011", viewers: 111.0, rating: 46.0 },
  { year: "2012", viewers: 111.3, rating: 47.0 },
  { year: "2013", viewers: 108.7, rating: 46.3 },
  { year: "2014", viewers: 112.2, rating: 46.7 },
  { year: "2015", viewers: 114.4, rating: 47.5 },
  { year: "2016", viewers: 111.9, rating: 46.6 },
  { year: "2017", viewers: 111.3, rating: 45.3 },
  { year: "2018", viewers: 103.4, rating: 43.1 },
  { year: "2019", viewers: 98.2, rating: 41.1 },
  { year: "2020", viewers: 99.9, rating: 41.6 },
  { year: "2021", viewers: 96.4, rating: 38.2 },
  { year: "2022", viewers: 112.3, rating: 43.3 },
  { year: "2023", viewers: 115.1, rating: 43.7 },
  { year: "2024", viewers: 123.4, rating: 45.2 },
]

export function ViewershipTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Viewership Trends Analysis</CardTitle>
        <CardDescription>
          Super Bowl viewership from 2010-2024 showing total viewers (millions) and TV ratings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={viewershipData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="year" className="text-muted-foreground" tick={{ fontSize: 12 }} />
              <YAxis
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                label={{ value: "Viewers (Millions)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="viewers"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--chart-1))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-chart-1">123.4M</div>
            <div className="text-muted-foreground">Peak Viewership (2024)</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-chart-2">+28%</div>
            <div className="text-muted-foreground">Growth Since 2021</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
