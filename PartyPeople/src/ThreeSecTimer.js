import React, {useEffect}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Typography} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '50vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: 'center',
    justifyContent: 'center',

  },
  typo: {
    fontSize: '12rem',
    textAlign: 'center',
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function ThreeSecTimer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [time, setTime] = React.useState(3);

const changeTime = () => {
  if(time > 1) {
    setTimeout(function(){
        setTime(time - 1);
      }, 1000);
    }
  };
    
  const signal = props.open;

  useEffect(()=>{
    changeTime();
  },[time]);
  
  useEffect(()=>{
    setOpen(signal); 
  },[signal]);

  useEffect(() => {
  })

  return (
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        disableBackdropClick
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
      {/* {changeTime} */}
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 className={classes.typo} id="spring-modal-title" style={{justifyContent: 'center'}}> {time} </h4>
          </div>
        </Fade>
      </Modal>

  );
}
