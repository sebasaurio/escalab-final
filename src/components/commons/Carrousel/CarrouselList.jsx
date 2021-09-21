import React from 'react'
import Carrousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CarrouselItem from './CarrouselItem'

import '../../../assets/styles/carrouselList.css'

const CarrouselList = ({images}) => {
    return (
        <Carrousel
            className='carrousel'
            NextIcon={<ArrowForwardIosIcon/>}
            PrevIcon={<ArrowBackIosIcon/>}
            indicators={true}
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            animation='slide'
        >
            {
                images.map((image, index) => <CarrouselItem key={index} item={image} className='carrousel-image'/>)
            }
        </Carrousel>
    )
}


export default CarrouselList
