import React, { useState, useEffect, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Tabs, Tab, Button, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    table: {
        minWidth: 100,
        minHeight: 100,
        fontSize: 8,
    },
});

function createData(sell, price, buy) {
    return { sell, price, buy };
}


export default function BidTab(props) {
    const [isInit, setInit] = useState(false);
    const [currentBids, SetBid] = useState([
        {
            buy: '',
            price: '',
            sell: '',
        },
    ]);
    if (!isInit) setInit(true);

    useLayoutEffect(() => {
        if (props.socket == null) {
            props.requestSocket('BidTab', props.socket);
            setInit(true);
        } else {
            props.socket.on('refreshBid', (bidObject) => {
                SetBid(bidObject);
            });
        }
    }, [isInit]);

    const classes = useStyles();


    return (
        <MuiThemeProvider>
            <Grid
                style={{ height: '110%' }}
                container
                wrap="wrap"
                // alignItems="stretch"
                justify="center"
                direction="column"
                spacing={2}
                display="center"
            >
                <TableContainer>
                    <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">거래량</TableCell>
                                <TableCell align="center">거래가</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentBids.map((row, index) => {
                                return (
                                    <TableRow
                                        style={{
                                            backgroundColor:
                                                index <= 4
                                                    ? blue[100]
                                                    : red[100],
                                            opacity: 0.9,
                                        }}
                                        key={row.price}
                                    >
                                        <TableCell>{row.buy}</TableCell>
                                        <TableCell>
                                            {row.price}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </MuiThemeProvider>
    );
}

// render(<App />, document.getElementById("root"));
