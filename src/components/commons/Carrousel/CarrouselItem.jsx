import React, {useEffect, useState} from 'react'
import {Skeleton} from '@material-ui/lab'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      backgroundColor: 'blue',
      [theme.breakpoints.up('sm')]: {
        backgroundColor: 'red',
        width: '100% !important',
        height: '330px !important' 
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'green',
        width: '100% !important',
        height: '430px !important' 
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: 'orange',
        width: '1000px !important',
        height: '640px !important' 
      },
      [theme.breakpoints.up('xl')]: {
        backgroundColor: 'cyan',
        width: '1400px !important',
        height: '840px !important' 
      },
    },
  }));

const CarrouselItem = ({src}) => {

    const classes = useStyles()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        const image = new Image();
        image.onload = () => setIsLoaded(true);
        image.src = src
    },[])
  
    return(
       isLoaded
        ? <img src={src} alt='fotito' className={classes.root}/> 
        : <Skeleton className={classes.root} variant="rect"/>
    )
}


export default CarrouselItem
