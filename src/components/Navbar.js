import React, { useState } from 'react' //react hooks
import { makeStyles } from '@material-ui/core/styles'; //changes material-ui's default styles
import MobileRightMenuSlider from "@material-ui/core/Drawer" //custom name
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar, //like image in html
  Divider,
  List,
  Typography, //used for titles amd text
  Box, //container specifies component
  Icon,
  ListItemIcon
} from '@material-ui/core'
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'

//CSS STYLING
//classes
const usedStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listedItem:{
    color: "tan"
  }
}))

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false //hidden by default
  })

  //functional component
  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open})
  }
  const classes = usedStyles();

  const sideList = slider => (
    <Box
    className= {classes.menuSliderContainer} component="div"
    onClick={toggleSlider(slider, false)}
    >
    <Avatar className={classes.avatar} src={avatar} alt="Kay"/>
    <Divider />
    <List>
      {menuItems.map((listItem, key) => (

      <ListItem button key={key}>
        <ListItemIcon className={classes.listedItem}>
          {listItem.listIcon}
        </ListItemIcon>
        <ListItemText className={classes.listedItem} primary={listItem.listText}/>
        </ListItem>
        ))}
    </List>
  </Box>
  )
  return (
    <>
   <Box component= "nav">
     <AppBar position="static" style={{background: "#222"}}>
       <Toolbar>
         <IconButton onClick={toggleSlider("right", true)}>
          <ArrowBack style ={{color: "tomato"}}/>
         </IconButton>
         <Typography variant="h5" style= {{color: 'tan'}}>
            Kays Portfolio
         </Typography>
         <MobileRightMenuSlider
         anchor="right"
         open={state.right}
         onClose={toggleSlider('right', false)}>
           {sideList("right")}
         </MobileRightMenuSlider>

       </Toolbar>
     </AppBar>
   </Box>
   </>
  );
};

export default Navbar
