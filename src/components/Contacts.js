import React from 'react'
import {makeStyles, withStyles} from "@material-ui/styles" //withStyles can change in text field
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const usedStyles = makeStyles(theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato"
  }
}))

const InputField = withStyles({
  root: { //changes color or label
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "tan"
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan"
      }
    }
  },
})(TextField); //creates custom name

const Contacts = () => {
  const classes = usedStyles()
  return (
   <Box component="div" style={{background: "#233", height:"100%"}}>
     <Navbar />
     <Grid container justify="center">
       <Box component="form" className={classes.form}>
         <Typography variant="h5" style={{color: "white", textAlign: "center", textTransform: "upperCase"}}>
           Hire or contact me
         </Typography>
         <InputField
         fullWidth={true}
         label="Name"
         variant="outlined"
         inputProps={{style:{color: "white"}}}
         margin="dense"
         size="medium"
         />
         <br/>
          <InputField
         fullWidth={true}
         label="Email"
         variant="outlined"
         inputProps={{style:{color: "white"}}}
         margin="dense"
         size="medium"
         />
          <br/>
         <InputField
         fullWidth={true}
         label="Business or Company Name"
         variant="outlined"
         inputProps={{style:{color: "white"}}}
         margin="dense"
         size="medium"
         />
         <br/>
         <Button variant="outlined" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
           contact me
         </Button>
       </Box>
     </Grid>
   </Box>
  )
}

export default Contacts
