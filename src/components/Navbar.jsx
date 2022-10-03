import React, { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display:(props)=>(props.open ? "flex":"none"),
    },
  }, 
  input: {
    color: "white",
    width:"100%",
    marginLeft: theme.spacing(2),
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  },
  searchButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display:"none"
    },
  },
  icons:{
    alignItems:"center",
    display:"flex",
    // display:(props)=>(!props.open ? "flex":"none"),
  },
  badge:{
    marginRight:theme.spacing(2),
  },
})); 
function Navbar() {
  const [open,setOpen]=useState(false)
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase className={classes.input} placeholder="Search..." />
          <Cancel className={classes.cancel} onClick={()=>{setOpen(false)}} />
        </div>
        {!open && <div className={classes.icons}>
        <Search className={classes.searchButton} onClick={()=>{
          setOpen(true)
        }} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/11520525/pexels-photo-11520525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        </div>}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
