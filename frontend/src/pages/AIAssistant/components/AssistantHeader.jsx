import { Bot, Sparkles } from "lucide-react";

export default function AssistantHeader() {

    return (

        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#0B1220] p-8 shadow-xl">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">

                        <Bot size={34} className="text-white"/>

                    </div>

                    <div>

                        <h1 className="text-4xl font-bold">

                            KrishiTwin AI Assistant

                        </h1>

                        <p className="text-gray-400 mt-2">

                            Powered by Sarvam AI • Gemini • AnythingLLM

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">

                    <Sparkles className="text-green-400"/>

                    <span className="text-green-400 font-semibold">

                        Online

                    </span>

                </div>

            </div>

        </div>

    );

}