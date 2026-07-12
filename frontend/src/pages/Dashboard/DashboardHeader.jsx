import { Cpu, CloudSun, Sparkles, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
    >
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Welcome Back👋
        </h1>

        <p className="mt-3 text-gray-400 text-lg">
          Your AI Digital Twin is actively monitoring your farm in real time.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-wrap gap-4">

        {/* Snapdragon */}
        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3">

          <Cpu className="text-blue-400" size={22} />

          <div>
            <p className="text-xs text-gray-400">
              Snapdragon AI
            </p>

            <h4 className="font-semibold text-white">
              Connected
            </h4>
          </div>

        </div>

        {/* Weather */}
        <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3">

          <CloudSun className="text-cyan-400" size={22} />

          <div>

            <p className="text-xs text-gray-400">
              Weather
            </p>

            <h4 className="font-semibold text-white">
              29°C Sunny
            </h4>

          </div>

        </div>

        {/* AI */}
        <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3">

          <Sparkles className="text-green-400" size={22} />

          <div>

            <p className="text-xs text-gray-400">
              AI Status
            </p>

            <h4 className="font-semibold text-green-400">
              Online
            </h4>

          </div>

        </div>

        {/* Notification */}

        <button
          className="rounded-2xl bg-surface p-4 hover:bg-gray-700 transition"
        >

          <Bell className="text-white" />

        </button>

      </div>
    </motion.div>
  );
}