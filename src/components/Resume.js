import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"

//CSS STYLING WITH MATERIAL
const usedStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": { //The ::before selector inserts something before the content of each selected element(s).
      content: "''", //attributes need to be double quoted
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: { //md middle of the screen
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  }
}))


const Resume = () => {
  const classes = usedStyles()
  return (
    <>
    <Navbar />
    <Box component="header" className= {classes.mainContainer}>
      <Typography variant="h4" align="center">
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography variant="h2">2013</Typography>
        </Box>
      </Box>
   </>
  )
}

export default Resume

{/* <></>  is the same as <React.Fragment></React.Fragment> */}
