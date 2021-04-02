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

import Cancel1 from './audios/effect/Cancel1.wav';
import Cancel2 from './audios/effect/Cancel2.wav';
import Cancel3 from './audios/effect/Cancel3.wav';
import Cancel4 from './audios/effect/Cancel4.wav';
import Cancel5 from './audios/effect/Cancel5.wav';
import Cancel6 from './audios/effect/Cancel6.wav';
import Cancel7 from './audios/effect/Cancel7.wav';
import Cancel8 from './audios/effect/Cancel8.wav';

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
        textAlign: 'center',
        color: theme.palette.primary,
    },
    score: {},
    table: {
        color: '#2D4053',
        spacing: 1,
    },
}));

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
            new Audio(Cancel1).play();
            CancelBid(0, BidTable);
        } else if (e.keyCode === 50 && BidTable.length >= 2) {
            //_ 2
            new Audio(Cancel2).play();
            CancelBid(1, BidTable);
        } else if (e.keyCode === 51 && BidTable.length >= 3) {
            //_ 3
            new Audio(Cancel3).play();
            CancelBid(2, BidTable);
        } else if (e.keyCode === 52 && BidTable.length >= 4) {
            //_ 4
            new Audio(Cancel4).play();
            CancelBid(3, BidTable);
        } else if (e.keyCode === 53 && BidTable.length >= 5) {
            //_ 5
            new Audio(Cancel5).play();
            CancelBid(4, BidTable);
        } else if (e.keyCode === 54 && BidTable.length >= 6) {
            //_ 6
            new Audio(Cancel6).play();
            CancelBid(5, BidTable);
        } else if (e.keyCode === 55 && BidTable.length >= 7) {
            //_ 7
            new Audio(Cancel7).play();
            CancelBid(6, BidTable);
        } else if (e.keyCode === 56 && BidTable.length >= 8) {
            //_ 8
            new Audio(Cancel8).play();
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
                                <span style={{ color: 'white', fontWeight: 'bold' , fontSize: '0.8vw'}}>
                                    취소[1]~[8]
                                </span>
                            </TableCell>
                            <TableCell
                                style={{ align: 'center', width: '20%' }}
                            >
                                <span style={{  color: 'white', fontWeight: 'bold' , fontSize: '0.8vw'}}>
                                    매수 가격
                                </span>
                            </TableCell>
                            <TableCell
                                style={{ align: 'center', width: '20%' , height:'100%'}}
                            >
                                <span style={{  color: 'white', fontWeight: 'bold' , fontSize: '0.8vw'}}>
                                    매수 수량
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

            <GridList wrap="wrap" style={{ width: '100%', height: '100%' }}>
                    {BidTable.map((bidElem, index, BidTable) => {
                        return (
                            <Grid style={{ height:'10%', fontSize: '1vw', }} item xs={testXs}>
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
            </GridList>
        </Grid>
    );
}
