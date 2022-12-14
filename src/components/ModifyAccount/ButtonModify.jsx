import React, { Component} from 'react';
import Dialog from '../Dialog/Dialog';
import ButtonsUpdate from './ButtonsUpdate';


class ButtonModify extends Component {
  state ={
    isOpen: false
  }
  
  render() {
    return (
      <div className='app_dial'>
        <button className='bttSubmit' type='submit' onClick={(e)=> this.setState({isOpen: true})}>Modifier mon profil</button>
        
        <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})} >
          <ButtonsUpdate/>
        </Dialog>

      </div>
    );
  };
}
export default ButtonModify;