import {useEffect,useState} from "react";

import {getWeather} from "../services/weatherService";

export default function useWeather(city){

    const[weather,setWeather]=useState(null);

    const[loading,setLoading]=useState(true);

    useEffect(()=>{

        getWeather(city)

        .then(data=>{

            setWeather(data);

            setLoading(false);

        })

        .catch(console.error);

    },[city]);

    return{

        weather,

        loading

    };

}