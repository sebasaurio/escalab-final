import React from 'react'

import Carrousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CarrouselItem from './CarrouselItem'

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
                images.map((image) => <CarrouselItem key={image.id} src={image.image} className='carrousel-image'/>)
            }
        </Carrousel>
    )
}


export default CarrouselList
