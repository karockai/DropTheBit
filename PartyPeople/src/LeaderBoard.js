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
import { Button, Grid, GridList} from '@material-ui/core';
import {ExpBySymbol, parseWonToStr} from './parseMoney';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: '3vh 2vw 3vh 2vw',
    },
    paper: {
        backgroundColor: '#0C151C',
        border: '2px solid #000',
        // borderRadius: '3rem',
        boxShadow: theme.shadows[5],
        padding: '3vh 2vw 3vh 2vw',
        alignItems: 'center',
        justifyContent: 'center',
    },
    table: {
        // minWidth: 650,
    },
    tableHead: {
        fontSize:'1vw'
    },
    tableBody: {
        background: '#212529',
    },
    tableBodyText : {
        fontSize: '0.7vw',
        color:'white'
    },
    container : {
        width:'100%',
        // maxHeight: 440,
    }
}));

export default function LeaderBoard(props) { //socket
    const classes = useStyles();
    const rows = props.leaderBoard;
    const [board, setBoard] = useState({
        
    });

    useEffect(() => { 
        props.socket.once('lobbyBoard', (gameResult) => {
            if(gameResult) {
                setBoard(gameResult);
            }
        })
    }, []);

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
            <TableCell style={{fontSize:'2vh', color:color}} align="right">
                {
                    ExpBySymbol(parseWonToStr(result))+' 원'
                }
            </TableCell>
            
        );
    
    };
    

    return (
        <GridList style={{height:'100%'}}>
        <Grid container direction={'column'} alignItems={'center'} style={{width:'100%', height:'100%'}}>
        <TableContainer id ="테이블 컨테이너" component={Paper} className={classes.container} >
            <Table
                stickyHeader 
                style={{width:'100%'}}
                className={classes.table}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <TableCell className={classes.tableHead} align="center">순위</TableCell>
                        <TableCell className={classes.tableHead} align="right">
                            플레이어 네임
                        </TableCell>
                        <TableCell className={classes.tableHead} align="right">
                            최종 수익
                        </TableCell>
                        {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'15%'}}
                                    align="center"
                                >
                                {showScore(1)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                                                       <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                                                       <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                                                       <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            <TableRow key={'playerID'} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'12%'}}
                                    align="center"
                                >
                                {showScore(2)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {'playerID'}
                                </TableCell>
                                {
                                    showAsset('123123')
                                }
                            </TableRow>
                            
                        {/* {board?.map((row, idx) => (
                            <TableRow key={row.playerID} id ="테이블셀로우" className={classes.tableBody}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableBodyText} 
                                    style={{width:'15%'}}
                                    align="center"
                                >
                                {showScore(idx+1)}
                                </TableCell>
                                <TableCell className={classes.tableBodyText}  align="right">
                                    {row.playerID}
                                </TableCell>
                                {
                                    showAsset(row.asset)
                                }
                            </TableRow>
                        ))} */}
                    </TableBody>
            </Table>
        </TableContainer>
    </Grid>
    </GridList>

    );
}
