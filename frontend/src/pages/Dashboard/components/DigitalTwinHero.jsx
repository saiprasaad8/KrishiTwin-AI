import { useDashboard } from "../../../context/DashboardContext";
import StatusBadge from "../../../components/common/StatusBadge";
import AnimatedCounter from "../../../components/common/AnimatedCounter";
import { motion } from "framer-motion";
import {
  Cpu,
  CloudSun,
  Droplets,
  Thermometer,
  Leaf,
  Wifi,
} from "lucide-react";

export default function DigitalTwinHero() {
  const { dashboard, loading } = useDashboard();

  if (loading) {
    return (
      <div className="text-white text-xl p-10">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#020617] shadow-2xl"
    >
      <div className="grid lg:grid-cols-2 gap-8 p-8">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <p className="text-green-400 font-semibold">
              DIGITAL TWIN ACTIVE
            </p>

          </div>

          <h1 className="text-5xl font-bold">
            KrishiTwin AI
          </h1>

          <p className="mt-5 text-gray-400 text-lg">
            Your farm's AI-powered Digital Twin is continuously monitoring
            crop health, weather, soil and irrigation using Edge AI.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <HeroItem
              icon={<Leaf />}
              title="Crop Health"
              value={dashboard.farmHealth}
              suffix="%"
            />

            <HeroItem
              icon={<CloudSun />}
              title="Weather"
              value={dashboard.temperature}
              suffix="°C"
            />

            <HeroItem
              icon={<Droplets />}
              title="Soil Moisture"
              value={dashboard.soilMoisture}
              suffix="%"
            />

            <HeroItem
              icon={<Thermometer />}
              title="Humidity"
              value={dashboard.humidity}
              suffix="%"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">
              Twin Status
            </h2>

            <Wifi className="text-green-400 animate-pulse" />

          </div>

          <div className="space-y-6">

            <StatusRow
              label="Synchronization"
              value="LIVE"
              green
            />

            <StatusRow
              label="AI Confidence"
              value={`${dashboard.aiConfidence}%`}
            />

            <StatusRow
              label="Yield Prediction"
              value={dashboard.yieldPrediction}
            />

            <StatusRow
              label="Crop Stage"
              value="Flowering"
            />

            <StatusRow
              label="Inference"
              value="Running"
            />

          </div>

          <div className="mt-8 rounded-2xl bg-blue-500/10 border border-blue-500/20 p-5">

            <div className="flex items-center gap-3">

              <Cpu className="text-blue-400" />

              <div>

                <h3 className="font-semibold">
                  Qualcomm AI Hub
                </h3>

                <p className="text-sm text-gray-400">
                  Snapdragon X Elite NPU Processing
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

function HeroItem({ icon, title, value, suffix = "" }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

      <div className="text-green-400 mb-3">
        {icon}
      </div>

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">

        {typeof value === "number" ? (
          <>
            <AnimatedCounter end={value} />
            {suffix}
          </>
        ) : (
          value
        )}

      </h2>

    </div>
  );
}

function StatusRow({ label, value, green }) {
  return (
    <div className="flex justify-between items-center">

      <span className="text-gray-400">
        {label}
      </span>

      <span
        className={`font-semibold ${
          green ? "text-green-400" : "text-white"
        }`}
      >
        {green ? <StatusBadge text="LIVE" /> : value}
      </span>

    </div>
  );
}