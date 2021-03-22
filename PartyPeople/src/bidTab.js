<<<<<<< HEAD
import React, { useState } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Tabs, Tab, Button, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
=======
import React, { useState } from "react";
import { render } from "react-dom";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import { Tabs, Tab, Button, Grid } from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";
>>>>>>> 9ff2adfd94713262a4a6fd3cd58120def1df9fed
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
<<<<<<< HEAD
import { red } from '@material-ui/core/colors';
=======
import { red } from "@material-ui/core/colors";
>>>>>>> 9ff2adfd94713262a4a6fd3cd58120def1df9fed

const useStyles = makeStyles({
    table: {
        minWidth: 100,
        minHeight: 100,
        fontSize: 8,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
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
    createData('Frozen yoghurt', 159, 6.0, 53, 0),
    createData('Ice cream sandwich', 237, 9.0, 52, 0),
    createData('Eclair', 262, 16.0, 51, 0),
    createData('Cupcake', 305, 3, 50, 0),
    createData('Gingerbread', 356, 14, 49, 39),
    createData('Gingerbread', 356, 0, 48, 9),
    createData('Gingerbread', 356, 0, 47, 3),
    createData('Gingerbread', 356, 0, 46, 11),
    createData('Gingerbread', 356, 16, 45, 9),
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

export default function BidTab() {
<<<<<<< HEAD
    const testObj = {
        date: 'date',
        total_ask_size: 'total_ask_size',
        total_bid_size: 'total_bid_size',
        ask_price_0: 'ask_price_0',
        bid_price_0: 'bid_price_0',
        ask_size_0: 'ask_size_0',
        bid_size_0: 'bid_size_0',
        ask_price_1: 'ask_price_1',
        bid_price_1: 'bid_price_1',
        ask_size_1: 'ask_size_1',
        bid_size_1: 'bid_size_1',
        ask_price_2: 'ask_price_2',
        bid_price_2: 'bid_price_2',
        ask_size_2: 'ask_size_2',
        bid_size_2: 'bid_size_2',
        ask_price_3: 'ask_price_3',
        bid_price_3: 'bid_price_3',
        ask_size_3: 'ask_size_3',
        bid_size_3: 'bid_size_3',
        ask_price_4: 'ask_price_4',
        bid_price_4: 'bid_price_4',
        ask_size_4: 'ask_size_4',
        bid_size_4: 'bid_size_4',
    };
=======
  const testObj = {
      "date" : "date",
      "total_ask_size" : "total_ask_size",
      "total_bid_size" : "total_bid_size",
      "ask_price_0" : "ask_price_0",
      "bid_price_0" : "bid_price_0",
      "ask_size_0" : "ask_size_0",
      "bid_size_0" : "bid_size_0",
      "ask_price_1" : "ask_price_1",
      "bid_price_1" : "bid_price_1",
      "ask_size_1" : "ask_size_1",
      "bid_size_1" : "bid_size_1",
      "ask_price_2" : "ask_price_2",
      "bid_price_2" : "bid_price_2",
      "ask_size_2" : "ask_size_2",
      "bid_size_2" : "bid_size_2",
      "ask_price_3" : "ask_price_3",
      "bid_price_3" : "bid_price_3",
      "ask_size_3" : "ask_size_3",
      "bid_size_3" : "bid_size_3",
      "ask_price_4" : "ask_price_4",
      "bid_price_4" : "bid_price_4",
      "ask_size_4" : "ask_size_4",
      "bid_size_4" : "bid_size_4"
  };
>>>>>>> 9ff2adfd94713262a4a6fd3cd58120def1df9fed

    const classes = useStyles();

<<<<<<< HEAD
    return (
        <MuiThemeProvider>
            <Grid
                style={{ height: '110%' }}
                container
                wrap="wrap"
                alignItems="stretch"
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
                                <TableCell align="center">매도량</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    style={{
                                        backgroundColor:
                                            index === 4 ? red[100] : '#FFFFFF',
                                        opacity: 0.9,
                                    }}
                                    key={row.name}
                                >
                                    <TableCell align="center">
                                        {row.fat}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.protein}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </MuiThemeProvider>
    );
}
=======
  return (
    <MuiThemeProvider>
      <Grid  style={{height: '110%'}} container wrap="wrap" alignItems="stretch" justify="center" direction="column" spacing={2} display='center'>
      <TableContainer >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">매도량</TableCell>
            <TableCell align='center'>거래가</TableCell>
            <TableCell align='center'>매도량</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow style ={{ backgroundColor : index ===4 ? red[100] : '#FFFFFF', opacity: 0.9}} key={row.name}>
              <TableCell align='center' >{row.fat}</TableCell>
              <TableCell align='center'>{row.carbs}</TableCell>
              <TableCell align='center'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </MuiThemeProvider>
  );
};
>>>>>>> 9ff2adfd94713262a4a6fd3cd58120def1df9fed

// render(<App />, document.getElementById("root"));
