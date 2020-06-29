import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// import { LinkedIn } from '@material-ui/icons';

const usedStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      }
    }
  },
})

const Footer = () => {
  const classes = usedStyles()
  return (
    <BottomNavigation width="auto" style={{ background: "#233"}}>
      <BottomNavigationAction target="_blank" href="https://www.linkedin.com/in/kay-hardeman/"
      className={classes.root}
      style={{padding: 0}}
      icon={<LinkedInIcon/>}
      >
      </BottomNavigationAction>

      <BottomNavigationAction target="_blank" href="https://github.com/kyvycodes"
      className={classes.root}
      style={{padding: 0}}
      icon={<GitHubIcon/>}
      >

      </BottomNavigationAction>


    </BottomNavigation>
  )
}

export default Footer
