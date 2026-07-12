import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const data = [

    { month: "Jan", yield: 1.2 },

    { month: "Feb", yield: 1.8 },

    { month: "Mar", yield: 2.5 },

    { month: "Apr", yield: 3.3 },

    { month: "May", yield: 4.1 },

    { month: "Jun", yield: 5.0 },

    { month: "Jul", yield: 5.8 }

];

export default function YieldChart() {

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <h2 className="text-2xl font-bold">

                Yield Forecast

            </h2>

            <p className="text-gray-400 mt-2 mb-8">

                AI prediction throughout the crop season

            </p>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient id="yieldColor" x1="0" y1="0" x2="0" y2="1">

                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>

                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05}/>

                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#334155"/>

                        <XAxis dataKey="month" stroke="#94a3b8"/>

                        <YAxis stroke="#94a3b8"/>

                        <Tooltip/>

                        <Area
                            type="monotone"
                            dataKey="yield"
                            stroke="#22c55e"
                            strokeWidth={4}
                            fill="url(#yieldColor)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}