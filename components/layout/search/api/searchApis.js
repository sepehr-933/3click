import useAxios from "../../../../Hooks/useAxios";
import {available} from "./available";
import {useEffect,useState} from 'react';


export const searchApi =  ({requestId}) => {
    const {response} = useAxios({
        url: "api2/flights/searchv3",
        method:"post",
        headers: {
            authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZCI6ODE3MTEsImlkIjozNDUyMzE2LCJyb2xlIjpbIkdVRVNUIiwiOSJdLCJjIjoiSVJSIiwiaXdzIjoiIiwicGMiOiIiLCJyb2xlc19pZHMiOiJHVUVTVCIsInNlc3Npb25fa2V5IjoibG9naW5fc2Vzc2lvbl8zNDUyMzE2XzgxNzExX1hrb0xmVDhtVW8zWXQ1U3F4Z0lRdTciLCJuYmYiOjE2MzcyNzE2MzYsImV4cCI6MTYzNzI3NTIzNiwiaWF0IjoxNjM3MjcxNjM2fQ.r1c6FgEiIl5ZubIZDG8xFwtZEseyRoX2N5jPdEwNkvY",
            'provider-code':"deltaban",
        },
        payload: {requestId}

    });

    return {response};
};