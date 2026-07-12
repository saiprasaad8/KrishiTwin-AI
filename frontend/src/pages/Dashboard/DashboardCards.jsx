import { motion } from "framer-motion";

const colors = {
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    text: "text-green-400",
  },

  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
  },

  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },

  lime: {
    border: "border-lime-500/30",
    bg: "bg-lime-500/10",
    text: "text-lime-400",
  },
};

export default function DashboardCards({
  title,
  value,
  subtitle,
  change,
  color,
  icon,
}) {
  const theme = colors[color];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        ${theme.border}
        ${theme.bg}
        backdrop-blur-xl
        p-6
        shadow-xl
        cursor-pointer
      `}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${theme.text}`}>
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

      <p className="mt-6 text-white font-medium">
        {subtitle}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        {change}
      </p>
    </motion.div>
  );
}