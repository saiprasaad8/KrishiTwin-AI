import { Cpu, CheckCircle2 } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="mt-auto">

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">

        <div className="flex items-center gap-3">

          <Cpu className="text-blue-400" />

          <div>

            <h4 className="font-semibold text-white">
              Snapdragon X Elite
            </h4>

            <p className="text-xs text-gray-400">
              Qualcomm AI Hub Connected
            </p>

          </div>

        </div>

      </div>

      <div className="mt-5 flex items-center gap-2 text-green-400">

        <CheckCircle2 size={18} />

        <span className="text-sm">
          Edge AI Processing Active
        </span>

      </div>

      <p className="mt-5 text-xs text-gray-500">
        KrishiTwin AI v1.0
      </p>

    </div>
  );
}