import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setPlatform, setSection} from 'actions/index'
import PropTypes from 'prop-types'

import {Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemText, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

import logo from 'assets/static/images/logo.png'

import Footer from './Footer'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    pageName:{
        color: '#f5f5f5'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#303030'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    link:{
        textDecoration: 'none'
    },
    linkItem:{
        textDecoration: 'none',
        color: '#e8e8e8',
        '&:hover': {
            backgroundColor: '#ababab',
            color: '#25717d',
        }
    },
    linkActive:{
        color: '#7fadeb',
        backgroundColor: '#121111'
    },
    listItemText: {
        textDecoration: 'none',
        color: '#e8e8e8'
    },
    dividerColor:{
        backgroundColor: '#adadad'
    }
}))

const Menu = () => {
    const classes = useStyles()
    const sectionActive = useSelector((state) => state.sectionActive)
    const dispatch = useDispatch()

    const handleSetSection = (section) => {
        dispatch(setSection(section))
    }

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
                        <img src={logo} alt="react games" width='32px' height='32px'/>
                        <Typography variant='h6' className={classes.pageName}>
                            React Games
                        </Typography>
                    </Toolbar>
                    <Divider light={true} className={classes.dividerColor}/>
                    <List>
                        {
                            ["Top", "Platforms", "Favorites"].map((text) => (
                                <Link key={text} to={`/game/${text.toLowerCase()}`} className={classes.link} onClick={() => handleSetSection(text)}>
                                    <ListItem button className={`${classes.linkItem} ${text.toLowerCase() === sectionActive.toLowerCase() && classes.linkActive}`}>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                </Link>
                            ))
                        }
                    </List>
                    <Divider light={true} className={classes.dividerColor}/>
                    <Footer/>
                </div>
            </Drawer>
        </div>
    )
}

export default Menu
