import {
    ShieldCheck,
    AlertTriangle,
    Activity,
    Leaf
} from "lucide-react";

export default function PredictionCard({ prediction }) {
    const data = prediction || {

    disease: "Waiting for Analysis",

    confidence: 0,

    severity: "Unknown",

    recommendation:
        "Upload a crop image and click Analyze."

};



    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
                AI Prediction
            </h2>

            {/* Disease */}

            <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-6">

                <div className="flex items-center gap-3">

                    <Leaf
                        size={35}
                        className="text-green-400"
                    />

                    <div>

                        <p className="text-gray-400">
                            Disease
                        </p>

                        <h2 className="text-3xl font-bold mt-1">

                            {data.disease}

                        </h2>

                    </div>

                </div>

            </div>

            {/* Confidence */}

            <div className="mt-8">

                <div className="flex justify-between mb-2">

                    <span className="flex items-center gap-2">

                        <Activity
                            size={18}
                            className="text-blue-400"
                        />

                        AI Confidence

                    </span>

                    <span className="font-bold">

                        {data.confidence}%

                    </span>

                </div>

                <div className="w-full h-3 rounded-full bg-gray-700">

                    <div
                        className="h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                        style={{
                            width: `${data.confidence}%`
                        }}
                    />

                </div>

            </div>

            {/* Severity */}

            <div className="mt-8">

                <div className="flex items-center gap-3">

                    <AlertTriangle
                        className="text-yellow-400"
                    />

                    <span className="text-lg">

                        Severity

                    </span>

                </div>

                <div
                    className="
                        mt-3
                        inline-block
                        px-5
                        py-2
                        rounded-full
                        bg-green-500/20
                        text-green-400
                        font-semibold
                    "
                >

                    {data.severity}

                </div>

            </div>

            {/* Recommendation */}

            <div className="mt-8">

                <div className="flex items-center gap-3 mb-3">

                    <ShieldCheck
                        className="text-green-400"
                    />

                    <h3 className="text-xl font-semibold">

                        Recommendation

                    </h3>

                </div>

                <div
                    className="
                        rounded-2xl
                        bg-[#0B1220]
                        border
                        border-white/10
                        p-5
                        text-gray-300
                        leading-7
                    "
                >

                    {data.recommendation}

                </div>

            </div>

            {/* Snapdragon Badge */}

            <div
                className="
                    mt-8
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    p-5
                "
            >

                <p className="text-sm text-blue-300">

                    ⚡ Powered by Qualcomm AI Hub

                </p>

                <p className="text-gray-400 mt-2">

                    Snapdragon NPU Accelerated Inference

                </p>

            </div>

        </div>

    );

}