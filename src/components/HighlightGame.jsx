import React from 'react'
import {Card, CardHeader, CardActionArea,CardContent, CardActions, Typography, CardMedia, Button} from '@material-ui/core'
import {Favorite} from '@material-ui/icons'

const HighlightGame = ({game}) => {
    return (
        <Card className='hightlight-game'>
            <CardHeader>
                <Typography variant='h5'>
                    Nombre Juego
                </Typography>
            </CardHeader>
            <CardActionArea>
                <CardMedia>
                    aca van imagenes, carrousel
                </CardMedia>
                <CardContent>
                    Aca mas datos del juego
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>
                    <Favorite/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default HighlightGame
