import React, { useState,useEffect } from 'react';
import Movie from "./Movie";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";
import styles from "../styles/SearchBar.js";
import useInput from "../hooks/useInput";
import axios from "axios";

const onLoad_API="https://api.themoviedb.org/3/discover/movie?api_key=9992f09858ef2da44dc87f2f5a144892&language=en-US&sort_by=popularity.desc&include_video=false&page=1";
const Query_API="https://api.themoviedb.org/3/search/movie?api_key=9992f09858ef2da44dc87f2f5a144892&language=en-US&query=";
export default function SearchBar() {
  const [input,setInput]=useInput("");
  const [movies,setMovies]=useState([]);

  //useEffect to fetch movies by popularity when the app loads , the fuction will run for the first time when Components Mounts
  useEffect(()=>{
    axios.get(onLoad_API)
    .then((data)=>{
      setMovies(data.data.results);
    });
  }
  ,[])

  const useStyles=makeStyles(styles);
  const classes=useStyles();

  const handleSubmit=(e)=>{
    if(input){
      e.preventDefault();
    //Fetching movies based on the keyword entered by the user.
    axios.get(`${Query_API}${input}`)
    .then((data)=>{
      setMovies(data.data.results);
    });
    setMovies([]);
    }
  }
  
  return (
    <div className={classes.root}>
      <TextField label="Enter Movie Name" className={classes.textbox} onChange={(e)=>{
        setInput(e.target.value)
        }}/>
      <Button
      onClick={handleSubmit}
      className={classes.searchButton}
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >Search</Button>
      <div>
        {movies.length > 0 && movies.map((movie)=><Movie key={movie.original_title} original_title={movie.original_title} overview={movie.overview} vote_average={movie.vote_average} poster_path={movie.poster_path} release_date={movie.release_date}/>)}
      </div>
    </div>
  )
}