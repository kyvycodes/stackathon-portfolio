import React from 'react'
import {
  Typography,
  Avatar,
  Grid,
  Box
} from "@material-ui/core";
import avatar from "../avatar.png"
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles';

//CSS STYLING
const usedStyles = makeStyles(theme => ({
  avatar: {
    display: "block",
    // margin: "0.5rem auto",
    margin: theme.spacing(1),
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  title:{
    color: "tomato"
  },
  subtitle:{
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "center",
    textAlign: "center",
    zIndex: 1 //stack order
  }
}))

const Header = () => {
  const classes = usedStyles()
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
      <Avatar className={classes.avatar} src={avatar} alt="Kay"/>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Kay Hardeman"]} typeSpeed={40}/>
         </Typography>
         <br/>
         <Typography className={classes.subtitle} variant="h5">
        <Typed strings={["Fill With Skills", "Fill With Skills", "Fill With Skills"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
         </Typography>
    </Box>
  )
}

export default Header
