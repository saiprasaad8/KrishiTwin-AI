import ReactMarkdown from "react-markdown";

export default function MessageBubble({ sender, message }) {
  return (
    <div
      className={`max-w-[75%] rounded-2xl px-5 py-3 ${
        sender === "user"
          ? "ml-auto bg-green-600 text-white"
          : "mr-auto bg-gray-800 text-white"
      }`}
    >
      <ReactMarkdown>{message}</ReactMarkdown>
    </div>
  );
}