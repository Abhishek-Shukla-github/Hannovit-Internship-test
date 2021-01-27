import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from "../styles/NavbarStyles";
import logo from "../images/logo.svg";

const Navbar=()=>{
  const useStyles=makeStyles(styles);
  const classes=useStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img src={logo} className={classes.logo} alt="logo"/>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar;