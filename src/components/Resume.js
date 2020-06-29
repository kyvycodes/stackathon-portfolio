import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"

//CSS STYLING WITH MATERIAL
const usedStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#ffa386"
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
    [theme.breakpoints.up("md")]: { //md middle of the screen is where I want the break
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2nd)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
       },
       "&:nth-of-type(2nd):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
       },
    }

  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up('md')]: { //960 is md. so when it is more than 960 run the code block below
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2nd)" : { // selector matches every element that is the nth child, of a particular type, of its parent.
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2nd):before": {
       display: "none"
      }
    }
  },
  heading: {
    color: "#b7dcfb",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}))


const Resume = () => {
  const classes = usedStyles()
  return (
    <>
    <Navbar />
    <Box component="header" className= {classes.mainContainer}>
      {/* <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography> */}
      <Typography variant="h4" align="center" className={classes.heading}>
        This page is a work in progress. Check out my projects instead !
      </Typography>
      {/* <Box component="div" className={classes.timeLine}>
        <Typography variant="h2"className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography variant= "h5" align="center" className={classes.subHeading}>
            web stuff
          </Typography>
          <Typography variant= "body1" align="center" style={{color: "tomato"}}>
            company name
          </Typography>
          <Typography variant= "subtitle" align="center" style={{color: "tan"}}>
            blah blah blah blah text
          </Typography>
        </Box>
        <Typography variant="h2"className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2014</Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography variant= "h5" align="center" className={classes.subHeading}>
            web stuff
          </Typography>
          <Typography variant= "body1" align="center" style={{color: "tomato"}}>
            company name
          </Typography>
          <Typography variant= "subtitle" align="center" style={{color: "tan"}}>
            blah blah blah blah text
          </Typography>
        </Box>
        <Typography variant="h2"className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography variant= "h5" align="center" className={classes.subHeading}>
            web stuff
          </Typography>
          <Typography variant= "body1" align="center" style={{color: "tomato"}}>
            company name
          </Typography>
          <Typography variant= "subtitle" align="center" style={{color: "tan"}}>
            blah blah blah blah text
          </Typography>
        </Box>
        <Typography variant="h2"className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography variant= "h5" align="center" className={classes.subHeading}>
            web stuff
          </Typography>
          <Typography variant= "body1" align="center" style={{color: "tomato"}}>
            company name
          </Typography>
          <Typography variant= "subtitle" align="center" style={{color: "tan"}}>
            blah blah blah blah text
          </Typography>
        </Box>
      </Box> */}
      </Box>
   </>
  )
}

export default Resume

{/* <></>  is the same as <React.Fragment></React.Fragment> */}
