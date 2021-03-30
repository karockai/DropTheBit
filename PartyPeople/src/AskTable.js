import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {
    IconButton,
    Button,
    Box,
    TextField,
    Grid,
    GridList,
    Paper,
    makeStyles,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AskEntity from './AskEntity';

// const dummyTable = [
//     { price: 1000, vol: 100 },
//     { price: 1000, vol: 100 },
//     { price: 1000, vol: 100 },
//     { price: 1000, vol: 100 },
//     { price: 1000, vol: 100 },
// ];

const greenTheme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.primary,
    },
    score: {},
}));

// function MakeTableEntity(props) {
//     const classes = useStyles(greenTheme);

//     return (
//         <Paper style={{ height: '9.8vh' }} className={classes.paper}>
//             <Grid container direction="row" alignItems="center">
//                 <Grid style={{ width: '50%', height: '5vh' }} className="price">
//                     {props.price}
//                 </Grid>
//                 <Grid style={{ width: '50%', height: '5vh' }} className="vol">
//                     {props.vol}
//                 </Grid>
//             </Grid>
//         </Paper>
//     );
// }

export default function AskTable(props) {
    const classes = useStyles(greenTheme);
    const testXs = 12;
    const [AskTable, setTable] = useState([]);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    useLayoutEffect(() => {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
        };
        props.socket.emit('askTable_Req', reqJson);

        if (props.socket == null) {
            props.requestSocket('makeTableEntity', props.socket);
            setInit(true);
        } else {
            props.socket.on('askTable_Res', (askTable) => {
                setTable(askTable);
            });
        }
    }, [isInit]);

    function CancelAsk(num, table) {
        console.log('num:', num);
        console.log('table:', table);
        console.log('hi');
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
            reqPrice: table[num]['price'],
            reqVol: table[num]['vol'],
        };
        props.socket.emit('cancelAsk_Req', reqJson);
    }

    function HandleKeyUp(e, AskTable) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();

        if (e.keyCode === 49 && AskTable.length >= 1) {
            //_ 1
            CancelAsk(0, AskTable);
        } else if (e.keyCode === 50 && AskTable.length >= 2) {
            //_ 2
            CancelAsk(1, AskTable);
        } else if (e.keyCode === 51 && AskTable.length >= 3) {
            //_ 3
            CancelAsk(2, AskTable);
        } else if (e.keyCode === 52 && AskTable.length >= 4) {
            //_ 4
            CancelAsk(3, AskTable);
        } else if (e.keyCode === 53 && AskTable.length >= 5) {
            //_ 5
            CancelAsk(4, AskTable);
        } else if (e.keyCode === 54 && AskTable.length >= 6) {
            //_ 6
            CancelAsk(5, AskTable);
        } else if (e.keyCode === 55 && AskTable.length >= 7) {
            //_ 7
            CancelAsk(6, AskTable);
        } else if (e.keyCode === 56 && AskTable.length >= 8) {
            //_ 8
            CancelAsk(7, AskTable);
        }
    }

    useEffect(() => {
        const CancelAskByKey = (e) => {
            HandleKeyUp(e, AskTable);
        };
        document.addEventListener('keyup', CancelAskByKey);
        return () => {
            document.removeEventListener('keyup', CancelAskByKey);
        };
    });

    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            <TableContainer>
                <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                style={{ align: 'center', width: '20%' }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    취소 번호 [1]~[8]
                                </span>
                            </TableCell>
                            <TableCell
                                style={{ align: 'center', width: '20%' }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    매도 가격
                                </span>
                            </TableCell>
                            <TableCell
                                style={{ align: 'center', width: '20%' }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    매도 수량
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <GridList wrap="wrap" style={{ width: '100%', height: '30vh' }}>
                <Grid style={{ width: '99%' }}>
                    {AskTable.map((askElem, index, AskTable) => {
                        return (
                            <Grid style={{ margin: '5px' }} item xs={testXs}>
                                <AskEntity
                                    price={askElem.price}
                                    vol={askElem.vol}
                                    index={index + 1}
                                    socket={props.socket}
                                    requestSocket={props.requestSocket}
                                    roomID={props.roomID}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </GridList>
        </Grid>
    );
}
