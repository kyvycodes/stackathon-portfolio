//Main Component
import React from 'react'
import Navbar from "./Navbar"
import Header from './Header'
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"
import { AccountCircle } from '@material-ui/icons'

const usedStyles = makeStyles({
  movingParticles: {
    position: "absolute"
  }
})

const Home = () => {

  // particles from https://www.npmjs.com/package/react-particles-js
  const classes = usedStyles() //invocation of styles
  return (
    <>
    <Navbar />
      <Header />
      <Particles
      canvasClassName={classes.movingParticles}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                // enable: false,
                // value_area: 900
                enable: true,
                value_area: 900
              }
            },
            shape: {
              // type: "circle",
              type: "star",
              stroke: {
                width: 1,
                color: "tomato"
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
          }
        }}
      />
    </>
  )
}

export default Home
