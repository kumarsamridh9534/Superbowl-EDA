import { DashboardHeader } from "@/components/dashboard-header"
import { ViewershipTrends } from "@/components/viewership-trends"
import { AdvertisingMetrics } from "@/components/advertising-metrics"
import { DemographicBreakdown } from "@/components/demographic-breakdown"
import { InteractiveTools } from "@/components/interactive-tools"

export default function SuperBowlAnalysisDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ViewershipTrends />
          </div>
          <div>
            <AdvertisingMetrics />
          </div>
        </section>

        {/* Detailed Analysis Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DemographicBreakdown />
          <InteractiveTools />
        </section>
      </main>
    </div>
  )
}
