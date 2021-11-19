import { useState, useEffect } from 'react';
import useAxios from './useAxios';

export default function useFetch({
                                     method = 'post',
                                     url,
                                     setter = null,
                                     params = null,
                                     trigger = true,
                                     caller = null,
                                     func = null,
                                     payload= null,
                                     argFunc = null,
                                     headers= null
                                 }) {

    const { response, loading, error, reFetch } = useAxios({
        url:url,
        method: method,
        payload: payload,
        headers: headers,

        customHandler: (err, res) => {
            if (res) {
                console.log('data', res.data);
                if (setter !== null) setter(res.data);
                if (caller !== null) caller.reFetch();
                if (func !== null) func();
                if (argFunc !== null) argFunc(res.data);
            }
            if (err) {
                console.log(err);
            }
        },
    });

    // useEffect(() => {
    //     if (trigger) reFetch();
    // }, []);

    return { response, error, loading, reFetch };
}
