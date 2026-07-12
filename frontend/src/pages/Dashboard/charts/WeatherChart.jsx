import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";

const data = [

    { day: "Mon", rain: 12 },

    { day: "Tue", rain: 20 },

    { day: "Wed", rain: 15 },

    { day: "Thu", rain: 26 },

    { day: "Fri", rain: 18 },

    { day: "Sat", rain: 30 }

];

export default function WeatherChart(){

    return(

        <div className="rounded-3xl bg-surface border border-gray-800 p-6 shadow-xl">

            <h2 className="text-xl font-semibold mb-6">

                Rain Forecast

            </h2>

            <ResponsiveContainer width="100%" height={260}>

                <AreaChart data={data}>

                    <XAxis dataKey="day"/>

                    <Tooltip/>

                    <Area
                        dataKey="rain"
                        stroke="#22D3EE"
                        fill="#22D3EE55"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    )

}