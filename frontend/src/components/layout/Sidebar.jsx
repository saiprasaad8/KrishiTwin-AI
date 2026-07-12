import {
  LayoutDashboard,
  Boxes,
  CloudSun,
  Leaf,
  Bot,
  BarChart3,
  FileText,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen sticky top-0 bg-[#08111F]/90 backdrop-blur-xl border-r border-white/10 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-8">

        <h1 className="text-3xl font-bold text-green-500">
          KrishiTwin AI
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Powered Digital Twin
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 space-y-2">

        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          to="/dashboard"
        />

        <SidebarItem
          icon={Boxes}
          label="Digital Twin"
          to="/digital-twin"
        />

        <SidebarItem
          icon={Leaf}
          label="Disease Detection"
          to="/disease-detection"
        />

        <SidebarItem
          icon={BarChart3}
          label="Yield Prediction"
          to="/yield-prediction"
        />

        <SidebarItem
          icon={CloudSun}
          label="Weather"
          to="/weather"
        />

        <SidebarItem
          icon={Bot}
          label="AI Assistant"
          to="/ai-assistant"
        />

        <SidebarItem
          icon={FileText}
          label="Reports"
          to="/reports"
        />

      </nav>

      {/* Footer */}

      <div className="p-5">

        <SidebarFooter />

      </div>

    </aside>
  );
}