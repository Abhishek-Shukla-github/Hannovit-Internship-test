import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";
import styles from "../styles/SearchBar.js";
import axios from "axios";

export default function SearchBar() {
  const useStyles=makeStyles(styles);
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <TextField label="Enter Movie" className={classes.textbox}/>
      <Button className={classes.searchButton}
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >Send</Button>
    </div>
  )
}