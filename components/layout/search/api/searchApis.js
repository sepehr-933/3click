import useAxios from "../../../../Hooks/useAxios";
import {available} from "./available";
import {useEffect,useState} from 'react';


export const searchApi =  ({requestId = ""}) => {
    const {response} = useAxios({
        url: "api2/flights/searchv3",
        method:"post",
        headers: {
            authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZCI6ODE3MTEsImlkIjozNTkwOTU1LCJyb2xlIjpbIkdVRVNUIiwiOSJdLCJjIjoiSVJSIiwiaXdzIjoiIiwicGMiOiIiLCJyb2xlc19pZHMiOiJHVUVTVCIsInNlc3Npb25fa2V5IjoibG9naW5fc2Vzc2lvbl8zNTkwOTU1XzgxNzExX1I4SEt6WWxtR3NYVjcxbHREVExOODciLCJuYmYiOjE2Mzc0ODMyNjIsImV4cCI6MTYzNzQ4Njg2MiwiaWF0IjoxNjM3NDgzMjYyfQ.j0yVmBW-K3v3BiuaDtsekTGbkb4ONfBAXOxYX1Cclfw",
            'provider-code':"deltaban",
        },
        payload: {requestId}

    });

    return {response};
};