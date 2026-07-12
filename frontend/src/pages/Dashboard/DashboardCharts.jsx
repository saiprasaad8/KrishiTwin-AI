import CropGrowthChart from "./charts/CropGrowthChart";
import WeatherChart from "./charts/WeatherChart";
import SoilMoistureChart from "./charts/SoilMoistureChart";

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      <CropGrowthChart />

      <WeatherChart />

      <SoilMoistureChart />

    </section>
  );
}