import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function SidebarItem({ icon: Icon, label, to }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{
            x: 6,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300

          ${
            isActive
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Icon size={22} />

          <span className="font-medium">
            {label}
          </span>
        </motion.div>
      )}
    </NavLink>
  );
}