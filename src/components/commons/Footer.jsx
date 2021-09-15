import React from 'react'
import {Typography} from  '@material-ui/core' 

import '../../assets/styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-made'>
                <Typography variant='body1'>
                    2021
                </Typography>
                <Typography variant='body1'>
                    Made by Sebastian Cardoza D. 🖥️
                </Typography>
            </div>
            <div className='footer-links'>
                <div>
                    <Typography variant='body1'>
                        Linkedin
                    </Typography>
                </div>
                <div>
                    <Typography variant='body1'>
                        Github
                    </Typography>
                </div>
            </div>
        </footer>
    )
}

export default Footer
