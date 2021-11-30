import {useEffect, useState} from 'react'
import useFetch from "../../../../Hooks/useFetch";
import useAxios from "../../../../Hooks/useAxios";
import {searchApi} from "./searchApis";

export const available =  () => {
    const {response,loading} = useAxios({
        url:"https://api.3click.com/api2/flights/available" ,
        method:"post",
        headers: {
            Authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZCI6ODE3MTEsImlkIjozNTkwOTU1LCJyb2xlIjpbIkdVRVNUIiwiOSJdLCJjIjoiSVJSIiwiaXdzIjoiIiwicGMiOiIiLCJyb2xlc19pZHMiOiJHVUVTVCIsInNlc3Npb25fa2V5IjoibG9naW5fc2Vzc2lvbl8zNTkwOTU1XzgxNzExX1I4SEt6WWxtR3NYVjcxbHREVExOODciLCJuYmYiOjE2Mzc0ODMyNjIsImV4cCI6MTYzNzQ4Njg2MiwiaWF0IjoxNjM3NDgzMjYyfQ.j0yVmBW-K3v3BiuaDtsekTGbkb4ONfBAXOxYX1Cclfw",
            'provider-code':"deltaban",
        },
        payload:{
            "adults": 1,
            "childs": 0,
            "destination": "MHD",
            "flight_class": "1",
            "flight_date": "2021-11-22",
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