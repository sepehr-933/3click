import { useState, useEffect } from 'react';
import axios from 'axios';
import {theme} from "../material.config";

axios.defaults.baseURL = 'https://api.3click.com/'

const useAxios = ({ url, method, callBack = null, headers,payload }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
      await axios[method](url,payload,{headers})
          .then(res => {
              setResponse(res)
          })
          .catch(err => {
              setError(err)
          })
          .finally(() => {
              setLoading(false)
          })
    };

     useEffect( () => {
         fetchData();
         !loading && callBack !== null && callBack();
    }, [url]);

    return { response, error, loading };
};

export default useAxios;