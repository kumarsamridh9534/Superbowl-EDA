"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const analysisData = {
  "2024": {
    topAd: 'FedEx "Most Reliable"',
    engagement: "12.5M",
    sentiment: "Positive (87%)",
    brandLift: "+23%",
  },
  "2023": {
    topAd: 'Doritos "Triangle Offense"',
    engagement: "11.2M",
    sentiment: "Positive (82%)",
    brandLift: "+19%",
  },
  "2022": {
    topAd: "Coinbase QR Code",
    engagement: "15.8M",
    sentiment: "Mixed (65%)",
    brandLift: "+31%",
  },
}

export function InteractiveTools() {
  const [selectedYear, setSelectedYear] = useState<string>("2024")
  const [showPrediction, setShowPrediction] = useState(false)

  const currentData = analysisData[selectedYear as keyof typeof analysisData]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Interactive Analysis Tools</CardTitle>
        <CardDescription>Explore advertising performance by year and view predictive insights</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={() => setShowPrediction(!showPrediction)}>
            {showPrediction ? "Hide" : "Show"} 2025 Prediction
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Top Performing Ad:</span>
            <Badge variant="secondary">{currentData.topAd}</Badge>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Social Engagement:</span>
            <span className="font-semibold">{currentData.engagement}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Sentiment Analysis:</span>
            <span className="font-semibold text-chart-2">{currentData.sentiment}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Brand Lift:</span>
            <span className="font-semibold text-chart-1">{currentData.brandLift}</span>
          </div>
        </div>

        {showPrediction && (
          <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2">2025 Predictions</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Expected Viewership:</span>
                <span className="font-semibold">127.8M (+3.6%)</span>
              </div>
              <div className="flex justify-between">
                <span>Ad Cost Projection:</span>
                <span className="font-semibold">$8.2M (+9.3%)</span>
              </div>
              <div className="flex justify-between">
                <span>Streaming Share:</span>
                <span className="font-semibold">35% (+8%)</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
