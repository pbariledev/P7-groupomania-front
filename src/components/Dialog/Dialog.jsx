import React from 'react';
import PropTypes from 'prop-types';

function  Dialog (props) {
    return (
        props.isOpen && 
            <div>
            <div className='dialogStyles'>
                <button className='bttSubmit' onClick={props.onClose}>Fermer</button>
                {props.children}
            </div>
            </div>
        
    )
};

Dialog.defaultProps = {
    isOpen: false
}
Dialog.propTypes ={
    isOpen : PropTypes.bool,
    onClose : PropTypes.func
}
export default Dialog;