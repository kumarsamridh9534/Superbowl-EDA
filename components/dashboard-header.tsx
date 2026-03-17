import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Super Bowl Viewership & Advertising Impact Analysis</h1>
            <p className="text-lg text-primary-foreground/80 mt-2 text-pretty">
              Comprehensive analysis of viewership trends and advertising ROI from 2010-2024
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit">
              Capstone Project 2024
            </Badge>
            <Badge
              variant="outline"
              className="w-fit bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
            >
              Data Analytics
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
