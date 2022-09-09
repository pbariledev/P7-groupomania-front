import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        let dialog= (
            <div className='dialogStyles'>
                <button className='dialogCloseButton bttSubmit' onClick={this.props.onClose}>Fermer</button>
                {this.props.children}
            </div>

        );
        if (! this.props.isOpen){
            dialog = null;
        }
        return(
            <div>{dialog}</div>
        )
    }

};

export default Dialog;