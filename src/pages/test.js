import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

  
const Test = () => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
    const handleCloseNo = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    setOpen(false);
    alert("compte supprimé")
  };
  
  return (
    <div>
      <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
        Supprimer le compte
      </Button>
      <Dialog open={open} onClose={handleCloseNo}>
        <DialogTitle>
           confirmation de la suppression de compte
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Etes vous sur de vouloir supprimer votre compte et les posts associés ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo} color="primary">
           Annuler
          </Button>
          <Button onClick={handleCloseYes} color="primary" autoFocus>
           Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
export default Test;