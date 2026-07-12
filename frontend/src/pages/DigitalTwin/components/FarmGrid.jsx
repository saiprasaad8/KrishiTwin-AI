import {
    Tractor,
    Droplets,
    Trees,
    AlertTriangle
} from "lucide-react";

export default function FarmGrid() {

    const farm = [

        ["healthy","healthy","healthy","healthy","healthy"],

        ["healthy","tractor","healthy","healthy","healthy"],

        ["healthy","water","healthy","disease","healthy"],

        ["healthy","healthy","healthy","healthy","healthy"],

        ["healthy","healthy","healthy","healthy","healthy"]

    ];

    const renderCell = (cell,index)=>{

        switch(cell){

            case "healthy":

                return(

                    <div
                        key={index}
                        className="h-14 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                    >

                        🌾

                    </div>

                );

            case "water":

                return(

                    <div
                        key={index}
                        className="h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center"
                    >

                        <Droplets className="text-cyan-400"/>

                    </div>

                );

            case "tractor":

                return(

                    <div
                        key={index}
                        className="h-14 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center"
                    >

                        <Tractor className="text-yellow-400"/>

                    </div>

                );

            case "disease":

                return(

                    <div
                        key={index}
                        className="h-14 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center animate-pulse"
                    >

                        <AlertTriangle className="text-red-400"/>

                    </div>

                );

            default:

                return(

                    <div
                        key={index}
                        className="h-14 rounded-xl bg-gray-700"
                    />

                );

        }

    }

    return(

        <div className="xl:col-span-2 rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-2xl font-bold">

                        Live Farm Digital Twin

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Real-time virtual farm representation

                    </p>

                </div>

                <Trees
                    size={32}
                    className="text-green-400"
                />

            </div>

            <div className="grid grid-cols-5 gap-4">

                {

                    farm.flat().map((cell,index)=>

                        renderCell(cell,index)

                    )

                }

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <div className="flex items-center gap-2">

                    🌾

                    <span className="text-gray-400">

                        Healthy

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    💧

                    <span className="text-gray-400">

                        Irrigation

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    🚜

                    <span className="text-gray-400">

                        Equipment

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    ⚠️

                    <span className="text-gray-400">

                        Disease

                    </span>

                </div>

            </div>

        </div>

    );

}