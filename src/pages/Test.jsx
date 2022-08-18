import React, { Component} from 'react';
import Dialog from '../components/Dialog';
import ButtonsUpdate from '../components/ModifyAccount/ButtonsUpdate';


class Test extends Component {
  state ={
    isOpen: false
  }
  
  render() {
    return (
      <div className='app_dial'>
        <button onClick={(e)=> this.setState({isOpen: true})}>open dialog</button>
        
        <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})} >
          <ButtonsUpdate/>
        </Dialog>

      </div>
    );
  };
}
export default Test;