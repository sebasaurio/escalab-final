import React from 'react'
import {Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemText, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

import Footer from './Footer'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    link:{
        textDecoration: 'none'
    }
}))

const Menu = () => {

    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Drawer 
                variant='permanent' 
                anchor='left' 
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                <div>
                    <Toolbar>
                        <Typography variant='h6'>
                            React Games
                        </Typography>
                    </Toolbar>
                    <Divider/>
                    <List>
                        {
                            ["Top", "Platforms", "Favorites"].map((text, index) => (
                                <Link to={text.toLowerCase()} className={classes.link}>
                                    <ListItem button key={text}>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                </Link>
                                
                            ))
                        }
                    </List>
                    <Footer/>
                </div>
            </Drawer>
        </div>
    )
}

export default Menu
