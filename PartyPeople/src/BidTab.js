import React, { useState, useEffect, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Tabs, Tab, Button, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    table: {},
});

const StyledTable = withStyles({
    '&.MuiTableCell-root': {
        height: '100%',
    },
})(Table);

function createData(sell, price, buy) {
    return { sell, price, buy };
}

export default function BidTab(props) {
    const [isInit, setInit] = useState(false);
    const [currentBids, SetBid] = useState([]);
    if (!isInit) setInit(true);

    useLayoutEffect(() => {
        if (props.socket == null) {
            // props.requestSocket('BidTab', props.socket);
            // setInit(true);
        } else {
            props.socket.on('refreshBid', (bidObject) => {
                SetBid(bidObject);
            });
        }
    }, [isInit]);

    const classes = useStyles();
    const boldIndex = (index) => {
        if (index === 4 || index === 5) {
            return {
                fontWeight: 'bold',
                fontSize: '20px',
            };
        }
    };

    if (currentBids.length === 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <CircularProgress />
            </div>
        );
    }
    return (
        <Grid
            style={{ height: '100%' }}
            container
            wrap="wrap"
            justify="center"
            direction="column"
        >
            <TableContainer style={{ height: '100%' }}>
                <StyledTable
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                    style={{ height: '100%' }}
                >
                    <TableHead style={{ height: '10%' }}>
                        <TableRow
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <TableCell
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '0.9vw',
                                }}
                                align="left"
                            >
                                거래량
                            </TableCell>
                            <TableCell
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '0.9vw',
                                }}
                                align="left"
                            >
                                거래가
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ height: '90%' }}>
                        {currentBids.map((row, index) => {
                            if (index === 0 || index === 9) return <></>;
                            return (
                                <TableRow
                                    style={{
                                        backgroundColor:
                                            index <= 4
                                                ? blue[index * 100 + 100]
                                                : red[
                                                      500 -
                                                          ((index - 5) * 100 +
                                                              100)
                                                  ],
                                        opacity: 0.6,
                                        width: '100%',
                                    }}
                                    key={row.price}
                                >
                                    <TableCell
                                        style={{
                                            fontSize: '0.9vw',
                                            opacity: 1,
                                        }}
                                    >
                                        {row.buy}
                                    </TableCell>
                                    <TableCell
                                        style={
                                            (boldIndex(index),
                                            { fontSize: '0.9vw', opacity: 1 })
                                        }
                                    >
                                        {row.price}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </Grid>
    );
}

// render(<App />, document.getElementById("root"));
