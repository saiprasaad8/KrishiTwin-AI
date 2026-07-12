import { useState, useRef } from "react";
import { Send, Mic, Square } from "lucide-react";
import { askVoice } from "../../../services/voiceService";

export default function ChatInput({ onSend }) {

  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  async function startRecording() {

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaRecorder.current = new MediaRecorder(stream);

    chunks.current = [];

    mediaRecorder.current.ondataavailable = (event) => {
      chunks.current.push(event.data);
    };

    mediaRecorder.current.onstop = async () => {

      const blob = new Blob(chunks.current, {
        type: "audio/wav",
      });

      try {

        const response = await askVoice(blob);

        onSend(response.recognized_text);

        const audio = new Audio(response.audio_url);

        audio.play();

      } catch (err) {

        console.error(err);

      }

    };

    mediaRecorder.current.start();

    setRecording(true);
  }

  function stopRecording() {

    mediaRecorder.current.stop();

    setRecording(false);

  }

  return (

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-4 flex gap-4">

      <button

        onClick={recording ? stopRecording : startRecording}

        className={`px-4 rounded-xl ${
          recording
            ? "bg-red-600"
            : "bg-blue-600"
        }`}

      >

        {recording ? <Square size={20}/> : <Mic size={20}/>}

      </button>

      <input

        value={text}

        onChange={(e)=>setText(e.target.value)}

        onKeyDown={(e)=>{
          if(e.key==="Enter"){
            handleSend();
          }
        }}

        placeholder="Ask KrishiTwin AI..."

        className="flex-1 bg-transparent outline-none text-white"

      />

      <button

        onClick={handleSend}

        className="bg-green-600 hover:bg-green-700 px-5 rounded-xl"

      >

        <Send size={20}/>

      </button>

    </div>

  );

}