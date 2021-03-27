import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },
}));

export default function GameOverModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const rows = props.leaderBoard;
  const [done, setDone] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BackToLobby = () => {
    setDone(true);
  }
  console.log(props.leaderBoard);
  return (
    <div>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        disableBackdropClick
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        // BackdropProps={{
        //   // timeout: 500,
        //   // 'static'
        //   static
        // }}

      >
        <Fade in={open}>
        {
          done && <Redirect to="/"/>
        }
          <div container className={classes.paper}>
            <h2 id="transition-modal-title" style={{textAlign:'center'}}>🌠Game Finished🌠</h2>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell align="right">Player ID</TableCell>
                    <TableCell align="right">asset</TableCell>
                    {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, idx) => (
                    <TableRow key={row.playerID}>
                      <TableCell component="th" scope="row">
                        {idx}
                      </TableCell>
                      <TableCell align="right">{row.playerID}</TableCell>
                      <TableCell align="right">{row.asset}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={BackToLobby()}> Back to Lobby </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}