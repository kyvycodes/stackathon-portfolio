import React from 'react'
import Navbar from "./Navbar"
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

const usedStyles = makeStyles({
  mainContainer: {
  background: "#233",
  height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
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
          <CardContent>
            <Typography gutterBottom variant="h5">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              blah blah blah
            </Typography>
          </CardContent>
          </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            share
          </Button>
          <Button size="small" color="primary">
            live demo
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
           image={htmlAndCss}/>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Project 2 change image
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              blah blah blah
            </Typography>
          </CardContent>
          </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            share
          </Button>
          <Button size="small" color="primary">
            live demo
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
           image={htmlAndCss}/>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Project 3 change image
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              blah blah blah
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            share
          </Button>
          <Button size="small" color="primary">
            live demo
          </Button>
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
           image={htmlAndCss}/>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Project 4 change image
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              blah blah blah
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            share
          </Button>
          <Button size="small" color="primary">
            live demo
          </Button>
        </CardActions>

       </Card>
       </Grid>
     </Grid>
    </Box>
  )
}

export default Portfolio
