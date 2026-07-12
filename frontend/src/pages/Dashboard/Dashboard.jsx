import MainLayout from "../../layouts/MainLayout";
import { useDashboard } from "../../context/DashboardContext";
import DashboardHeader from "./DashboardHeader";
import DigitalTwinHero from "./components/DigitalTwinHero";
import DashboardGrid from "./DashboardGrid";
import DashboardCharts from "./DashboardCharts";
import DashboardWidgets from "./DashboardWidgets";

export default function Dashboard() {
  return (
    <MainLayout>

      <div className="space-y-8">

        <DashboardHeader />

        <DigitalTwinHero />

        <DashboardGrid />

        <DashboardCharts />

        <DashboardWidgets />

      </div>

    </MainLayout>
  );
}