import React, { useEffect, useState } from 'react';
import './index.css';
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
import { Button, Grid, GridList} from '@material-ui/core';
import {ExpBySymbol, parseWonToStr} from './parseMoney';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: '5vh 2vw 5vh 2vw',
    },
    paper: {
        fontFamily:'NEXON Lv1 Gothic OTF',
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
        fontFamily:'NEXON Lv1 Gothic OTF',
    },
    tableBodyText : {
        fontSize: '1.0vw',
        color:'white'
    },
    container : {
        maxHeight: 440,
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
        props.socket.on('backToLobby_Res', (roomInfo) => {    //roomInfo gaming flase => 지금처럼 true => 로비, 버튼이 join
            props.setLeaderBoard(false);
            let path = '/lobby';
            
            history.push({
                pathname: path,
                state: {
                    roomLeader: roomInfo.roomLeader,
                    gaming : roomInfo.gaming,
                },
            });

            props.lobbyAudio.currentTime = 0;
            props.lobbyAudio.play();
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const showScore = (score) => {
        console.log(score);
        let result = ''
        if (score  == 1) result += '🥇 ';
        if (score  == 2) result += '🥈 ';
        if (score  == 3) result += '🥉 ';
        else result += '  ';

        result += String(score);
        return (
            <span>
            {result}
            </span>
        );

        
    }

    const showAsset = (asset) => {

        let result = asset -100000000;
        let color = 'white';
        if (result > 0) color= 'red';
        if (result < 0) color= '#1e88e5';
        return(
            <TableCell style={{fontSize:'2vh', color:color,fontFamily:'NEXON Lv1 Gothic OTF'}} align="right">
                {
                    ExpBySymbol(parseWonToStr(result))+' 원'
                }
            </TableCell>
            
        );

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

                    <h2
                        id="transition-modal-title"
                        style={{ textAlign: 'center', margin:'0 0 5vh 0', fontSize:'3vw' }}
                    >
                        게임 종료 🏆
                    </h2>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <TableContainer id ="테이블 컨테이너" component={Paper} className={classes.container}>
                            <Table
                                className={classes.table}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow className={classes.tableHead}>
                                        <TableCell className={classes.tableHead} style={{fontFamily:'NEXON Lv1 Gothic OTF'}}>순위</TableCell>
                                        <TableCell className={classes.tableHead} style={{fontFamily:'NEXON Lv1 Gothic OTF'}} align="right">
                                            플레이어 이름
                                        </TableCell>
                                        <TableCell className={classes.tableHead} style={{fontFamily:'NEXON Lv1 Gothic OTF'}} align="right">
                                            최종 수익
                                        </TableCell>
                                        {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {rows.map((row, idx) => (
                                            <TableRow key={row.playerID} id ="테이블셀로우" className={classes.tableBody}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    className={classes.tableBodyText} 
                                                    style={{width:'12%',fontFamily:'NEXON Lv1 Gothic OTF'}}
                                                    align="left"
                                                >
                                                {showScore(idx+1)}
                                                </TableCell>
                                                <TableCell className={classes.tableBodyText} style={{fontFamily:'NEXON Lv1 Gothic OTF'}} align="right">
                                                    {row.playerID}
                                                </TableCell >
                                                {
                                                    showAsset(row.asset)
                                                }
                                            </TableRow>
                                        ))}
                                    </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Button
                        style={{
                            fontFamily:'NEXON Lv1 Gothic OTF',
                            color: '#ffffff',
                            textShadow:
                                '-1px -1px 0 #aaa,1px -1px 0 #aaa,-1px 1px 0 #aaa,1px 1px 0 #aaa',
                        }}
                        onClick={BackToLobby}
                    >
                        {' '}
                        로비로 돌아가기{' 🚀'}
                    </Button>
                </div>
                {/* </Fade> */}
            </Modal>
        </div>
    );
}