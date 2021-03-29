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
import Paper from '@material-ui/core/Paper';
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

const useTabStyles = makeStyles({
    root: {
        justifyContent: 'center',
    },
    scroller: {
        flexGrow: '0',
    },
});

const rows = [
    createData(6.0, 53, 0),
    createData(237, 9.0, 52, 0),
    createData(16.0, 51, 0),
    createData(3, 50, 0),
    createData(14, 49, 39),
    createData(0, 48, 9),
    createData(0, 47, 3),
    createData(0, 46, 11),
    createData(16, 45, 9),
    createData(16, 45, 9),
];

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(3),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const TabsContainer = () => {
    const classes = useTabStyles();

    const cities = ['전체 호가', '방 호가', '나의 호가'];

    const [active, setActive] = useState(cities[0]);
    return (
        <Tabs
            classes={{ root: classes.root, scroller: classes.scroller }}
            value={active}
            onChange={(event, newValue) => {
                setActive(newValue);
            }}
            indicatorColor="primary"
            textColor="primary"
            // variant={"scrollable"}
            //   scrollButtons={"on"}
        >
            {cities.map((city, index) => (
                <AntTab key={index} label={city} value={city} />
            ))}
        </Tabs>
    );
};

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

    const bidTag = () => {
        return <></>;
    };
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
                                <TableCell align="center">매도량</TableCell>
                                <TableCell align="center">거래가</TableCell>
                                <TableCell align="center">매수량</TableCell>
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
                                        key={row.name}
                                    >
                                        <TableCell>{row.buy}</TableCell>
                                        <TableCell align="center">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.sell}
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
