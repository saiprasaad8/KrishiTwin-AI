import { Bell, Search, Sun, Globe, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-[#08111F]/80 px-8 backdrop-blur-xl">

      {/* LEFT */}

      <div className="flex items-center gap-5">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Dashboard
          </h2>

          <p className="text-sm text-gray-400">
            AI Powered Smart Farming Platform
          </p>
        </div>

      </div>

      {/* CENTER */}

      <div className="hidden lg:flex items-center">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 w-[380px]">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search crops, diseases, weather..."
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* AI Status */}

        <div className="hidden xl:flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

          <Bot
            size={18}
            className="text-green-400"
          />

          <span className="text-sm font-medium text-green-400">
            AI Online
          </span>

        </div>

        {/* Weather */}

        <div className="hidden md:flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

          <Sun
            size={18}
            className="text-cyan-400"
          />

          <span className="text-sm text-white">
            29°C
          </span>

        </div>

        {/* Language */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="rounded-full bg-white/5 p-3 border border-white/10"
        >

          <Globe size={18} />

        </motion.button>

        {/* Notifications */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="relative rounded-full bg-white/5 p-3 border border-white/10"
        >

          <Bell size={18} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>

        </motion.button>

        {/* Profile */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 cursor-pointer"
        >

          <img
            src="https://ui-avatars.com/api/?name=Farmer&background=16A34A&color=fff"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden lg:block">

            <p className="font-semibold">
              Farmer
            </p>

            <p className="text-xs text-gray-400">
              Chennai
            </p>

          </div>

        </motion.div>

      </div>

    </header>
  );
}