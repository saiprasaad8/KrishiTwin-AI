import {
    MapPin,
    Wifi,
    Cpu,
    CheckCircle
} from "lucide-react";

export default function FarmStatus() {

    return (

        <div className="xl:col-span-1 rounded-3xl bg-[#111827] border border-white/10 shadow-xl p-8">

            <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">

                    Farm Status

                </h2>

                <div className="flex items-center gap-2 text-green-400">

                    <CheckCircle size={20} />

                    <span className="font-semibold">

                        Connected

                    </span>

                </div>

            </div>

            <div className="space-y-6 mt-8">

                {/* Farm ID */}

                <div className="flex justify-between items-center">

                    <span className="text-gray-400">

                        Farm ID

                    </span>

                    <span className="font-semibold">

                        KRISHI-001

                    </span>

                </div>

                {/* Location */}

                <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-gray-400">

                        <MapPin size={18} />

                        Location

                    </span>

                    <span className="font-semibold">

                        Chennai, India

                    </span>

                </div>

                {/* Twin Status */}

                <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-gray-400">

                        <Wifi size={18} />

                        Digital Twin

                    </span>

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">

                        LIVE

                    </span>

                </div>

                {/* AI */}

                <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-gray-400">

                        <Cpu size={18} />

                        AI Confidence

                    </span>

                    <span className="font-bold text-cyan-400">

                        97%

                    </span>

                </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t border-white/10"></div>

            {/* Health */}

            <div>

                <div className="flex justify-between mb-2">

                    <span className="text-gray-400">

                        Overall Farm Health

                    </span>

                    <span className="font-bold text-green-400">

                        92%

                    </span>

                </div>

                <div className="w-full h-3 rounded-full bg-gray-700">

                    <div
                        className="h-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
                        style={{ width: "92%" }}
                    ></div>

                </div>

            </div>

            {/* Footer */}

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/20 p-4">

                <p className="text-sm text-green-300">

                    ⚡ Powered by Snapdragon AI

                </p>

                <p className="text-gray-400 mt-2 text-sm">

                    Digital Twin synchronized successfully.

                </p>

            </div>

        </div>

    );

}