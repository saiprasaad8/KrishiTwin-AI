import { Leaf, CloudRain, Bug, Droplets } from "lucide-react";

export default function SuggestedQuestions({ onQuestion }) {

  const questions = [
    {
      icon: <Leaf size={22} />,
      text: "How can I improve tomato yield?"
    },
    {
      icon: <Bug size={22} />,
      text: "How do I treat leaf blight?"
    },
    {
      icon: <CloudRain size={22} />,
      text: "Will it rain tomorrow?"
    },
    {
      icon: <Droplets size={22} />,
      text: "When should I irrigate my field?"
    }
  ];

  return (
    <div className="rounded-3xl bg-[#111827] border border-white/10 p-6">

      <h2 className="text-xl font-bold mb-5">
        Suggested Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {questions.map((q, index) => (

          <button
            key={index}
            onClick={() => onQuestion(q.text)}
            className="flex items-center gap-4 text-left rounded-2xl border border-white/10 bg-[#0B1220] p-5 hover:border-green-500 hover:bg-green-500/10 transition"
          >

            <div className="text-green-400">
              {q.icon}
            </div>

            <span>{q.text}</span>

          </button>

        ))}

      </div>

    </div>
  );
}