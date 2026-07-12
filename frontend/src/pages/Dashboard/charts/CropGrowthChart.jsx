import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [

    { month: "Jan", value: 35 },

    { month: "Feb", value: 42 },

    { month: "Mar", value: 48 },

    { month: "Apr", value: 56 },

    { month: "May", value: 63 },

    { month: "Jun", value: 74 }

];

export default function CropGrowthChart() {

    return (

        <div className="rounded-3xl bg-surface border border-gray-800 p-6 shadow-xl">

            <h2 className="text-xl font-semibold mb-6">

                Crop Growth

            </h2>

            <ResponsiveContainer
                width="100%"
                height={260}
            >

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#16A34A"
                        strokeWidth={4}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    )

}