import {useEffect, useState} from 'react'
import useFetch from "../../../../Hooks/useFetch";
import useAxios from "../../../../Hooks/useAxios";
import {searchApi} from "./searchApis";

export const available =  () => {
    const {response,loading} = useAxios({
        url:"https://api.3click.com/api2/flights/available" ,
        method:"post",
        headers: {
            Authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZCI6ODE3MTEsImlkIjozNDUyMzE2LCJyb2xlIjpbIkdVRVNUIiwiOSJdLCJjIjoiSVJSIiwiaXdzIjoiIiwicGMiOiIiLCJyb2xlc19pZHMiOiJHVUVTVCIsInNlc3Npb25fa2V5IjoibG9naW5fc2Vzc2lvbl8zNDUyMzE2XzgxNzExX1hrb0xmVDhtVW8zWXQ1U3F4Z0lRdTciLCJuYmYiOjE2MzcyNzE2MzYsImV4cCI6MTYzNzI3NTIzNiwiaWF0IjoxNjM3MjcxNjM2fQ.r1c6FgEiIl5ZubIZDG8xFwtZEseyRoX2N5jPdEwNkvY",
            'provider-code':"deltaban",
        },
        payload:{
            "adults": 1,
            "childs": 0,
            "destination": "KIH",
            "flight_class": "1",
            "flight_date": "2021-11-19",
            "infant": 0,
            "origin_trip_type": 1,
            "provider_code": "DELTABAN",
            "scope": "local",
            "source": "THR",
            "trip_type": 1,
        },
    });
    const requestId = response && response.data.result.requestId;
    return {
        requestId,loading
    }
}