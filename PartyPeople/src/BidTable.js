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
import BidEntity from './BidEntity';

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

// const bidCancel = (props, price, vol) => {

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

export default function BidTable(props) {
    const classes = useStyles(greenTheme);
    const testXs = 12;
    const [BidTable, setTable] = useState([]);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    useEffect(() => {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
        };
        props.socket.emit('bidTable_Req', reqJson);

        if (props.socket == null) {
            props.requestSocket('makeTableEntity', props.socket);
            setInit(true);
        } else {
            props.socket.on('bidTable_Res', (bidTable) => {
                setTable(bidTable);
            });
        }
    }, [isInit]);

    function CancelBid(num, table) {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
            reqPrice: table[num]['price'],
            reqVol: table[num]['vol'],
        };
        props.socket.emit('cancelBid_Req', reqJson);
    }

    function HandleKeyUp(e, BidTable) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();

        if (e.keyCode === 49 && BidTable.length >= 1) {
            //_ 1

            CancelBid(0, BidTable);
        } else if (e.keyCode === 50 && BidTable.length >= 2) {
            //_ 2
            CancelBid(1, BidTable);
        } else if (e.keyCode === 51 && BidTable.length >= 3) {
            //_ 3
            CancelBid(2, BidTable);
        } else if (e.keyCode === 52 && BidTable.length >= 4) {
            //_ 4
            CancelBid(3, BidTable);
        } else if (e.keyCode === 53 && BidTable.length >= 5) {
            //_ 5
            CancelBid(4, BidTable);
        } else if (e.keyCode === 54 && BidTable.length >= 6) {
            //_ 6
            CancelBid(5, BidTable);
        } else if (e.keyCode === 55 && BidTable.length >= 7) {
            //_ 7
            CancelBid(6, BidTable);
        } else if (e.keyCode === 56 && BidTable.length >= 8) {
            //_ 8
            CancelBid(7, BidTable);
        }
    }

    useEffect(() => {
        const CancelBidByKey = (e) => {
            HandleKeyUp(e, BidTable);
        };
        document.addEventListener('keyup', CancelBidByKey);
        return () => {
            document.removeEventListener('keyup', CancelBidByKey);
        };
    });

    return (
        <Grid
            wrap="wrap"
            container
            direction="row"
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
                                    매수 가격
                                </span>
                            </TableCell>
                            <TableCell
                                style={{ align: 'center', width: '20%' }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    매수 수량
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

            <GridList wrap="wrap" style={{ width: '100%', height: '30vh' }}>
                <Grid style={{ width: '99%' }}>
                    {BidTable.map((bidElem, index, BidTable) => {
                        return (
                            <Grid style={{ margin: '5px' }} item xs={testXs}>
                                <BidEntity
                                    price={bidElem.price}
                                    vol={bidElem.vol}
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
