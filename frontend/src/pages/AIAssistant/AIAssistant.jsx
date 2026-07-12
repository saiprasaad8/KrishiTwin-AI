import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import AssistantHeader from "./components/AssistantHeader";
import SuggestedQuestions from "./components/SuggestedQuestions";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

import { askAI } from "../../services/chatService";

export default function AIAssistant() {

  const [messages, setMessages] = useState([]);

  async function handleSend(question) {

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: question,
      },
    ]);

    try {

      const res = await askAI(question);

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: res.answer,
        },
      ]);

    } catch (err) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "⚠️ Unable to contact AI Assistant.",
        },
      ]);

      console.error(err);
    }
  }

  return (
    <MainLayout>

      <div className="space-y-6">

        <AssistantHeader />

        <SuggestedQuestions onQuestion={handleSend} />

        <ChatWindow messages={messages} />

        <ChatInput onSend={handleSend} />

      </div>

    </MainLayout>
  );
}