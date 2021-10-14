import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SingUp() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Creat New Account</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="normal"
            id="name"
            label="UserName"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
          />
        <TextField

            margin="normal"
            id="Email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            size='small'
          />
            <TextField

            margin="normal"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size='small'
          />
            <TextField
            margin="normal"
            id="password2"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            size='small'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}