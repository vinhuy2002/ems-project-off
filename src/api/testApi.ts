

import axios from "axios";

export const ApiTest = async () =>{
    const res = await axios.get('https://retoolapi.dev/2tGosB/data');
    // console.log(res.data);
    return res.data;
}