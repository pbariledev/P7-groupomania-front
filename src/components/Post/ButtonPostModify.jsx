import React, { Component} from 'react';
import Dialog from '../Dialog';
import ButtonPostUpdate from './ButtonPostUpdate';


class ButtonPostModify extends Component {
  state ={
    isOpen: false
  }
  
  render() {
    return (
      <div className='app_dial'>
        <button className='bttSubmit' type='submit' onClick={(e)=> {e.preventDefault(e);this.setState({isOpen: true})}}>Modifier le post</button>
        
        <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})} >
        <ButtonPostUpdate/>
        </Dialog>

      </div>
    );
  };
}
export default ButtonPostModify;