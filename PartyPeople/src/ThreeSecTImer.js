// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 600,
//     flexGrow: 1,
//     minWidth: 300,
//     transform: 'translateZ(0)',
//     // The position fixed scoping doesn't work in IE 11.
//     // Disable this demo to preserve the others.
//     '@media all and (-ms-high-contrast: none)': {
//       display: 'none',
//     },
//   },
//   modal: {
//     display: 'flex',
//     padding: theme.spacing(1),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// paper: {
//     width: 600,
//     height: 600,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function ThreeSecTimer() {
//   const classes = useStyles();
//   const rootRef = React.useRef(null);

//   return (
//     <div className={classes.root} ref={rootRef}>
//       <Modal
//         disablePortal
//         disableEnforceFocus
//         disableAutoFocus
//         open
//         aria-labelledby="server-modal-title"
//         aria-describedby="server-modal-description"
//         className={classes.modal}
//         container={() => rootRef.current}
//       >
//         <div className={classes.paper}>
//           <h2 id="server-modal-title"> 3 </h2>
//         </div>
//       </Modal>
//     </div>
//   );
// }
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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

export default function ThreeSecTimer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [time, setTime] = React.useState(3);
  const handleOpen = () => {
    setOpen(true);
    changeTime();
  };

  const handleClose = () => {
    setOpen(false);
  };
//   handleOpen();
  setTimeout(function(){
    handleClose();
  }, 3000);

  const changeTime = () => {
    setTimeout(function(){
        setTime(time - 1);
      }, 1000);
  };

  return (
    <div>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        // open
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">{time}</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
