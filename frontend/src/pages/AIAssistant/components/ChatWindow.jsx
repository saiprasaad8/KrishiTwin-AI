import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {

  return (

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 min-h-[400px] space-y-4 overflow-y-auto">

      {messages.length === 0 ? (

        <p className="text-gray-500 text-center mt-32">

          👋 Ask me anything about farming, crops, weather or diseases.

        </p>

      ) : (

        messages.map((msg, index) => (

          <MessageBubble

            key={index}

            sender={msg.sender}

            message={msg.message}

          />

        ))

      )}

    </div>

  );

}