import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    history,
    Redirect,
    useHistory,
} from 'react-router-dom';
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
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: '5vh 2vw 5vh 2vw',
    },
    paper: {
        backgroundColor: '#0C151C',
        border: '2px solid #000',
        // borderRadius: '3rem',
        boxShadow: theme.shadows[5],
        padding: '5vh 2vw 5vh 2vw',
        alignItems: 'center',
        justifyContent: 'center',
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        fontSize:'1vw'
    },
    tableBody: {
        background: '#212529',
    },
    tableBodyText : {
        fontSize: '1.0vw',
        color:'white'
    }
}));

export default function GameOverModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const rows = props.leaderBoard;
    const [done, setDone] = useState(false);

    const history = useHistory();
    const BackToLobby = () => {
        props.socket.emit('backToLobby', props.roomID);
        props.setLeaderBoard(false);
        let path = '/lobby';
        history.push(path);
        props.lobbyAudio.currentTime = 0;
        props.lobbyAudio.play();
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(props.leaderBoard);
    return (
        <div>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                disableBackdropClick // backdrop을 클릭해도 modal을 지우지 않는 옵션
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                {/* <Fade in={open}> */}
                <div container className={classes.paper}>
                    <Button
                        style={{
                            textShadow:
                                '-1px -1px 0 #aaa,1px -1px 0 #aaa,-1px 1px 0 #aaa,1px 1px 0 #aaa',
                        }}
                        onClick={BackToLobby}
                    >
                        {' '}
                        Back to Lobby{' '}
                    </Button>
                    <h2
                        id="transition-modal-title"
                        style={{ textAlign: 'center', margin:'0 0 5vh 0', fontSize:'3vw' }}
                    >
                        🌠Game Finished🌠
                    </h2>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <TableContainer component={Paper}>
                            <Table
                                className={classes.table}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow className={classes.tableHead}>
                                        <TableCell className={classes.tableHead}>순위</TableCell>
                                        <TableCell className={classes.tableHead} align="right">
                                            Player ID
                                        </TableCell>
                                        <TableCell className={classes.tableHead} align="right">
                                            최종 평가 자산
                                        </TableCell>
                                        {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {rows.map((row, idx) => (
                                            <TableRow key={row.playerID} className={classes.tableBody}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    className={classes.tableBodyText} 
                                                >
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell className={classes.tableBodyText}  align="right">
                                                    {row.playerID}
                                                </TableCell>
                                                <TableCell className={classes.tableBodyText} align="right">
                                                    {row.asset}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </div>
                {/* </Fade> */}
            </Modal>
        </div>
    );
}
