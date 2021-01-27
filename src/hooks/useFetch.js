import axios from 'axios';
import React, { useState } from 'react';

const URL="https://api.themoviedb.org/3/movie/76341?api_key=9992f09858ef2da44dc87f2f5a144892";
export default function useFetch(intialVal) {
    const [result,setResult]=useState("");
    let fetchQuery;
        fetchQuery=(movie)=>{
            let res= axios.get(`${URL}&language=en-US&query=avengers&page=1`)
            console.log(res);
            setResult(res);
    }
    return [result,fetchQuery];
}
