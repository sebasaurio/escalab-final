import React from 'react'
import {createPortal} from 'react-dom'
import {Modal, Box, makeStyles} from '@material-ui/core' 

const useStyles = makeStyles((theme)=> ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fcfcfc',
        border: '2px solid #fcfcfc',
        boxShadow: 24,
        p: 4,
    }
}))

const ModalPortal = (props) => {
    
    const classes = useStyles()
    
    return(
        props.isOpen 
        ? createPortal(
            <div>
                <Modal 
                    open={props.isOpen} 
                    onClose={props.onClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    
                    >
                    <Box className={classes.modal}>
                        {props.children}
                    </Box>
                </Modal>
            </div>, document.getElementById('modal'),
        )
        : ''
    )
}


export default ModalPortal
