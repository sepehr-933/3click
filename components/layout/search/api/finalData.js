import {available} from "./available";
import {searchApi} from "./searchApis";
import {useEffect,useState} from 'react';

export const finalData = () => {
  const [res,setRes] = useState();
  const {requestId,loading} = available();
  const {response} = searchApi({requestId});
    

  return  {response};
};