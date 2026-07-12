import {
    Leaf,
    ShieldCheck,
    Clock
} from "lucide-react";

export default function RecentScans() {

    const scans = [

        {
            image: "🌿",
            disease: "Healthy Leaf",
            time: "Today • 10:45 AM",
            confidence: "99.4%",
            color: "text-green-400"
        },

        {
            image: "🍂",
            disease: "Leaf Rust",
            time: "Yesterday • 6:20 PM",
            confidence: "95.2%",
            color: "text-yellow-400"
        },

        {
            image: "🍃",
            disease: "Early Blight",
            time: "2 Days Ago • 4:30 PM",
            confidence: "97.8%",
            color: "text-red-400"
        }

    ];

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">

                    Recent Scans

                </h2>

                <Clock
                    className="text-green-400"
                    size={24}
                />

            </div>

            {/* List */}

            <div className="space-y-5">

                {

                    scans.map((scan, index) => (

                        <div

                            key={index}

                            className="rounded-2xl bg-[#0B1220] border border-white/10 p-5 hover:border-green-500 transition"

                        >

                            <div className="flex items-center justify-between">

                                {/* Left */}

                                <div className="flex items-center gap-4">

                                    <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center text-3xl">

                                        {scan.image}

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-lg">

                                            {scan.disease}

                                        </h3>

                                        <p className="text-gray-400 text-sm">

                                            {scan.time}

                                        </p>

                                    </div>

                                </div>

                                {/* Right */}

                                <div className="text-right">

                                    <div className={`font-bold ${scan.color}`}>

                                        {scan.confidence}

                                    </div>

                                    <div className="text-gray-400 text-sm">

                                        Confidence

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

            {/* Bottom Card */}

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/20 p-5">

                <div className="flex items-center gap-3">

                    <ShieldCheck
                        className="text-green-400"
                    />

                    <div>

                        <h3 className="font-semibold">

                            AI Monitoring Active

                        </h3>

                        <p className="text-gray-400 text-sm mt-1">

                            Snapdragon AI continuously monitors uploaded crop images and maintains prediction history.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}