import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardContent, CardActions, makeStyles } from '@material-ui/core';
import { Button, } from 'react-bootstrap';
import { ChatFeed, Message } from 'react-chat-ui'
import './ChatManager.css';
import './InfoManager.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import newsList from './news.json'
import stockList from './stock.json'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { orange } from '@material-ui/core/colors';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
// import {Fade} from './TradeModal.js';

// const InfoManager = () => {
//     const []
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '30ch',
    //   backgroundColor: theme.palette.background.paper,
  },
  card: {
    display: 'inline-block',
  },
  orange: {
    backgroundColor: '#666666',
  },
  inline: {
    display: 'inline',
  },
  bullet: {
    width: '45%',
    margin: '10px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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

function MakeInfo(props) {
  const classes = useStyles();
  const company = props.comp; //@ 회사명
  const headline = props.info[0]; //@ 뉴스 헤드라인
  return (
    <div >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.orange}>{company.substring(0, 1)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={company}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >

              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}


function MakeInfoList(props) {
  const classes = useStyles();
  return (
    <>
      <MakeInfo info={props.info} comp={props.comp} />
    </>
  );
}
// function plus(props) {
//   const [points,setPoints] = useState(0);
//   return (
//     <div>
//     <Typography variant="h5" component="h2">
//     {setPoints(points+1)}
//     </Typography>
//     </div>
//   );
// }


// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [lockOpen, setLockOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setLockOpen(true);
    //@ point 감소
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  function lockState() {
    let lock;
    if(lockOpen){
      lock = <LockOpenRoundedIcon/>
    }
    else {
      lock = <LockRoundedIcon/>
    }
    return (
      <>{lock}</>
    );
  }

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

  return (
    <div>
      <Button variant="outline-dark" style={{float:"right",margin:"4px 4px 10px"}} type="button" onClick={handleOpen}>
        {lockState()}
        &nbsp;정보 보기
      </Button>
      <Modal
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
            <h2 id="spring-modal-title">{props.comp}</h2>
            <p id="spring-modal-description">{props.info[0]}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


function InfoManager(props) {
  const classes = useStyles();
  const [infos, setInfos] = useState(newsList);
  const [companys, setComp] = useState(stockList);
  const initInfo = () => {

  }

  const infoList = infos.map((info, idx) => {
    return (
        <Card className={[classes.card, "animate-change", classes.bullet].join(' ')}>
          <CardContent>
            <MakeInfoList info={info} comp={companys[idx]["stock_name"]} />
            <SpringModal point={props.point} info={info} comp={companys[idx]["stock_name"]} />
          </CardContent>
        </Card >
    );
  })
  return (
    <>
      My Point<h1>{props.point}</h1>
      {infoList}
    </>
  );
}
export default InfoManager;