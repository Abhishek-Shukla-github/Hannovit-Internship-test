import { useState } from 'react';
export default function useInput(initialVal) {
    const [input,setInput]=useState(initialVal);
    const handleInput=(e)=>{
        setInput(e.target.value);
    }
    return [input,handleInput];
}