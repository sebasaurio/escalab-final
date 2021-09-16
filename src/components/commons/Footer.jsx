import React from 'react'
import {Typography} from  '@material-ui/core' 

import '../../assets/styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-made'>
                <Typography variant='body1'>
                    2021 🖥️
                </Typography>
                <Typography variant='body1'>
                    Made by Sebastian Cardoza D.
                </Typography>
            </div>
            <div container alignItems='center' className='footer-links'>
                <a href='https://www.linkedin.com/in/sebastian-cardoza-dominguez-02051492/' rel='noopener noreferrer' target='_blank' className='footer-link'>
                    Linkedin
                </a>
                <a href="https://github.com/sebasaurio/escalab-final" rel='noopener noreferrer' target='_blank' className='footer-link'>
                    Github
                </a>
            </div>
        </footer>
    )
}

export default Footer
