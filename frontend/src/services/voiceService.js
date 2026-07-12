import axios from "axios";

const voiceAPI = axios.create({
  baseURL: "http://127.0.0.1:8001",
});

export async function askVoice(audioBlob) {
  const formData = new FormData();

  formData.append("audio", audioBlob, "voice.wav");

  const response = await voiceAPI.post("/voice", formData);

  return response.data;
}