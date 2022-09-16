import React, { useState} from 'react';
import Dialog from '../Dialog';
import ButtonPostUpdate from './ButtonPostUpdate';


function ButtonPostModify (props) {
  const [open, setOpen] = useState(false);

 
    return (
      <div className='app_dial'>
        <button className='bttSubmit' onClick={()=>{setOpen(true)}}>Modifier le post</button>
        
        <Dialog isOpen={open} onClose={(e)=>setOpen(false)} >
        <ButtonPostUpdate/>
        </Dialog>

      </div>
    );
  };
export default ButtonPostModify;