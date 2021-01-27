import {useState} from 'react';
export default function useInput(initalVal) {
    const [value,setValue]=useState(initalVal);
    const handleChange=(value)=>{
        setValue(value);
    }
    return [value,handleChange];
}
