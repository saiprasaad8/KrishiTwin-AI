import { useState } from "react";
import { Upload, Camera, Image as ImageIcon } from "lucide-react";
import { detectDisease } from "../../../services/diseaseService";

export default function UploadCard({ setPrediction }) {

    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setSelectedFile(file);
        setImage(URL.createObjectURL(file));
    };

    const handleAnalyze = async () => {

        if (!selectedFile) {

            alert("Please upload a leaf image first!");

            return;
        }

        try {

            setLoading(true);

            const result = await detectDisease(selectedFile);

            setPrediction(result);

            alert("Prediction received successfully!\nCheck the browser console.");

        } catch (error) {

            console.error(error);

            alert("Failed to analyze image.");

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
                Upload Crop Leaf
            </h2>

            <label
                htmlFor="leafImage"
                className="border-2 border-dashed border-green-500/40 rounded-3xl h-96 flex flex-col items-center justify-center cursor-pointer hover:border-green-400 transition overflow-hidden"
            >

                {

                    image ?

                        (

                            <img
                                src={image}
                                alt="Leaf Preview"
                                className="h-full w-full object-cover"
                            />

                        )

                        :

                        (

                            <>

                                <ImageIcon
                                    size={70}
                                    className="text-green-400 mb-4"
                                />

                                <p className="text-xl font-semibold">

                                    Drag & Drop Leaf Image

                                </p>

                                <p className="text-gray-400 mt-2">

                                    or Click to Browse

                                </p>

                            </>

                        )

                }

                <input
                    id="leafImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

            </label>

            <div className="grid grid-cols-2 gap-4 mt-6">

                <button
                    className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 rounded-xl py-3 transition"
                >

                    <Upload size={20} />

                    Upload

                </button>

                <button
                    className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 transition"
                >

                    <Camera size={20} />

                    Camera

                </button>

            </div>

            <button

                onClick={handleAnalyze}

                disabled={loading}

                className="
                w-full
                mt-6
                bg-gradient-to-r
                from-green-500
                to-blue-600
                rounded-xl
                py-4
                font-bold
                text-lg
                hover:scale-[1.02]
                transition
                disabled:opacity-50
                "

            >

                {

                    loading ?

                        "Analyzing..."

                        :

                        "🌿 Analyze Leaf"

                }

            </button>

        </div>

    );

}