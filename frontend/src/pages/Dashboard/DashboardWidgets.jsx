import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  MessageSquareText,
  Leaf,
  Activity,
  CheckCircle2,
} from "lucide-react";

const aiServices = [
  {
    icon: Cpu,
    title: "Qualcomm AI Hub",
    status: "Running",
    color: "text-blue-400",
  },
  {
    icon: Brain,
    title: "Snapdragon NPU",
    status: "Active",
    color: "text-cyan-400",
  },
  {
    icon: MessageSquareText,
    title: "Sarvam AI",
    status: "Online",
    color: "text-green-400",
  },
  {
    icon: Leaf,
    title: "AnythingLLM",
    status: "Connected",
    color: "text-lime-400",
  },
];

export default function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

      {/* AI Processing Center */}

      <motion.div
        whileHover={{ y: -5 }}
        className="xl:col-span-2 rounded-3xl border border-gray-800 bg-surface p-6 shadow-xl"
      >

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              AI Processing Center
            </h2>

            <p className="text-gray-400">
              Edge AI Services powered by Snapdragon
            </p>

          </div>

          <Activity className="text-primary" size={30} />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {aiServices.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-background border border-gray-700 p-5"
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <Icon
                      className={service.color}
                      size={28}
                    />

                    <div>

                      <h3 className="font-semibold">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {service.status}
                      </p>

                    </div>

                  </div>

                  <CheckCircle2
                    className="text-green-400"
                    size={22}
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </motion.div>

      {/* Live Metrics */}

      <motion.div
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-gray-800 bg-surface p-6 shadow-xl"
      >

        <h2 className="text-xl font-bold mb-6">

          Live Metrics

        </h2>

        <div className="space-y-5">

          <Metric
            title="Latency"
            value="32 ms"
          />

          <Metric
            title="Inference"
            value="1.3 sec"
          />

          <Metric
            title="Digital Twin"
            value="Synced"
          />

          <Metric
            title="Edge AI"
            value="Enabled"
          />

          <Metric
            title="Weather API"
            value="Connected"
          />

        </div>

      </motion.div>

    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-700 pb-3">

      <span className="text-gray-400">

        {title}

      </span>

      <span className="font-semibold text-primary">

        {value}

      </span>

    </div>
  );
}