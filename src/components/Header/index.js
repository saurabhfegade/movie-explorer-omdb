import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/buyceps_logo.png";
import { Link } from "react-router-dom";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <nav id="navbar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
        </Link>
        <div className="signUp">
          <Link to="/register">
            <button class="btnSignup transparent">Sign in</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
