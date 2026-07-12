import axios from "axios";

const chatAPI = axios.create({
  baseURL: "http://127.0.0.1:8001",
});

export async function askAI(question) {
  const response = await chatAPI.get("/chat", {
    params: {
      question,
    },
  });

  return response.data;
}