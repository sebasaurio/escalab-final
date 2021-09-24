import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
import {List, ListSubheader, ListItem, ListItemText} from '@material-ui/core'

const PlatformsList = ({platforms, classes}) => (
    <div>
        <List 
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader= {
                <ListSubheader component="div" id="nested-list-subheader" className={classes.listItemText}>
                    Platforms
                </ListSubheader>
                }>
            {
                platforms.map(platform => (
                    <Link key={platform.id} to={`platform/${platform.id}`} className={classes.linkItem}>
                        <ListItem button >
                            <ListItemText primary={platform.name}/>
                        </ListItem>
                    </Link> 
                ))
            }
        </List>
    </div>
)

PlatformsList.propTypes = {
    platforms: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired
}

export default PlatformsList