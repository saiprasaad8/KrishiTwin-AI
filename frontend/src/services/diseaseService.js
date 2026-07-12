import api from "./api";

export async function detectDisease(file){

    const formData=new FormData();

    formData.append("file",file);

    const response=await api.post(

        "/disease/",

        formData,

        {

            headers:{

                "Content-Type":"multipart/form-data"

            }

        }

    );

    return response.data;

}