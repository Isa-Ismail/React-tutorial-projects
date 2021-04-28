import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button  className='btn' variant="outlined" color="primary" onClick={handleClickOpen} style={{backgroundColor:'var(--clr-primary-1)', marginLeft:'3.9rem', color:'white'}}>
      About Me
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Name: Isa Ismail (Fahim )<br></br>
          Age: 20 years old<br></br>
          Nationality: Bangladeshi<br></br>
          Student of Information & Communication Technology.
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            I am Isa Ismail (Fahim). You can call me Fahim.I am actually looking forward to improve my skills on web development.
            I use React framework alongside JSX and Material UI for my content designing. I can make a full fledged front end for your 
            web page from scratch using React framework. 
          </Typography>
          <Typography gutterBottom>
          
          </Typography>
          <Typography gutterBottom>
           
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
