import React, { useState } from 'react';
import "../styles/SearchBar.css";
import useInput from "../hooks/useInput";
import axios from "axios";

export default function SearchBar() {
  const [name,setName]=useInput("");
  const fetchResults=()=>{
    
  }
  return (
    <div>
    </div>
  )
}