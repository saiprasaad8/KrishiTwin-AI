import {
Lightbulb,
Droplets,
CloudRain,
Leaf
} from "lucide-react";

const recommendations=[

{

icon:<Droplets/>,

title:"Increase Irrigation",

desc:"Water usage should be increased by 12%."

},

{

icon:<CloudRain/>,

title:"Rain Expected",

desc:"Delay irrigation for tomorrow."

},

{

icon:<Leaf/>,

title:"Nitrogen Low",

desc:"Apply nitrogen fertilizer within 48 hours."

}

];

export default function RecommendationPanel(){

return(

<div className="rounded-3xl bg-surface border border-gray-800 p-6">

<div className="flex items-center gap-3 mb-6">

<Lightbulb className="text-yellow-400"/>

<h2 className="text-2xl font-bold">

AI Recommendations

</h2>

</div>

<div className="space-y-4">

{

recommendations.map((item,index)=>(

<div
key={index}
className="rounded-2xl
bg-background
border
border-gray-700
p-5"
>

<div className="flex gap-4">

<div className="text-primary">

{item.icon}

</div>

<div>

<h4
className="font-semibold"
>

{item.title}

</h4>

<p
className="text-gray-400"
>

{item.desc}

</p>

</div>

</div>

</div>

))

}

</div>

</div>

)

}