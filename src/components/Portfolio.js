import React from 'react'
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core"
import htmlAndCss from "../img/htmlAndCss.png"
import reactRedux from "../img/reactRedux.png"
import firebase from "../img/firebase.png"
import vanillaJS from "../img/vanillaJS.png"

// import glow from "../glow.jpg"

const usedStyles = makeStyles({
  mainContainer: {
  // background: "#ffa386",
  // height: "75%"
  // background: glow.jpg,
  // height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    // margin: "3rem",
    margin :"5rem auto"
  }
})


const Portfolio = () => {
  const classes = usedStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
     <Navbar />
     <Grid container justify="center">
       {/* project 1 */}
       <Grid item xs={12} sm={8} md={6}>
       <Card className={classes.cardContainer}>
         <CardActionArea>
           <CardMedia
           component="img"
           alt="Project 1"
           height="140"
           image={htmlAndCss}/>
          <CardContent style={{color: "tomato"}}>
            <Typography gutterBottom variant="h5" >
              The Affects of A Hue
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" component="p" style={{color: "#222"}}>
            Whether you know it or not, color has a big impact on how the human brain sees the world.
            Take a look at my very first project that covers what to factor when selecting a color scheme
            </Typography>
          </CardContent>
          </CardActionArea>

        <CardActions>
          <Button target="_blank" href="https://kyvycodes.github.io/affectsofahue/" size="small" color="primary" >
            Check it out
          </Button>
          <Button size="small" color="primary">
            live demo (coming soon)
          </Button>
        </CardActions>
       </Card>
       </Grid>
              {/* project 2 */}
              <Grid item xs={12} sm={8} md={6}>
       <Card className={classes.cardContainer}>
         <CardActionArea>
           <CardMedia
           component="img"
           alt="Project 2"
           height="140"
           image={reactRedux}/>
          <CardContent style={{color: "tomato"}}>
            <Typography gutterBottom variant="h5">
              Plantagram
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color: "#222"}}>
              Need a plant? Check out this E commerce website built by my peers and I. We have just the right items to bring some "life" to your life.
            </Typography>
          </CardContent>
          </CardActionArea>

        <CardActions>
          <Button target="_blank" href="https://plantagram.herokuapp.com/" size="small" color="primary">
            Check it out
          </Button>
          <Button size="small" color="primary">
            live demo (coming soon)
          </Button>
        </CardActions>
       </Card>
       </Grid>
              {/* project 3 */}
              <Grid item xs={12} sm={8} md={6}>
       <Card className={classes.cardContainer}>
         <CardActionArea>
           <CardMedia
           component="img"
           alt="Project 3"
           height="140"
           image={firebase}/>
          <CardContent style={{color: "tomato"}}>
            <Typography gutterBottom variant="h5">
             bootCampConnect
             (Currently Working On!)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color: "#222"}}>
              Do you love your cohort but wish you had a bigger network of peers? Well Soon bootCampConnect can help! I am currently working on a social media specifically for people who are currently enrolled in/or recent alumni of a coding bootcamp.
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            come back soon
          </Button>
          {/* <Button size="small" color="primary">
            live demo
          </Button> */}
        </CardActions>

       </Card>
       </Grid>
              {/* project 4 */}
              <Grid item xs={12} sm={8} md={6}>
       <Card className={classes.cardContainer}>
         <CardActionArea>
           <CardMedia
           component="img"
           alt="Project 4"
           height="140"
           image={vanillaJS}/>
          <CardContent style={{color: "tomato"}}>
            <Typography gutterBottom variant="h5">
              Meditation App
              (Currently Working On!)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color: "#222"}}>
              Wellness is a important to me and a huge part of my personal brand. I'm in the process of making my first meditation app! Come back soon for some soothing sounds from the ocean, great visuals and more!
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            come back soon
          </Button>
          {/* <Button size="small" color="primary">
            live demo
          </Button> */}
        </CardActions>

       </Card>
       </Grid>
     </Grid>
    </Box>
  )
}

export default Portfolio
