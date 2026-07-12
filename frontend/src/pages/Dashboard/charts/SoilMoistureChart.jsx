import {
    BarChart,
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";

const data=[

{day:"Mon",soil:64},

{day:"Tue",soil:68},

{day:"Wed",soil:72},

{day:"Thu",soil:66},

{day:"Fri",soil:70},

{day:"Sat",soil:74}

];

export default function SoilMoistureChart(){

return(

<div className="rounded-3xl bg-surface border border-gray-800 p-6 shadow-xl">

<h2 className="text-xl font-semibold mb-6">

Soil Moisture

</h2>

<ResponsiveContainer width="100%" height={260}>

<BarChart data={data}>

<XAxis dataKey="day"/>

<Tooltip/>

<Bar
dataKey="soil"
fill="#0066FF"
radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>

)

}