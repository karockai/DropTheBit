import React,{useState, makeStyle} from 'react';
import {IconButton ,Button, TextField, Grid, Paper, makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *':{
            width: '42%',
            // textAlign: 'center',
            margin: theme.spacing(1),
        }
    }, 
    paper: {
        padding: theme.spacing(1),
        // margin: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button_block: {
        width: '1vh',
    },
}));


function ArrowButton() {
    const classes = useStyles();
    const [stock, setStock] = useState(null);
    const [tmpStock, setTmpStock] = useState(0);
    const [diffrence, setDiffrence] = useState(0);

    function PlusArrow(props) {
        setDiffrence(diffrence + 1);
        return setTmpStock(tmpStock + 1);
    }
    
    function MinusArrow(props) {
        setDiffrence(diffrence - 1);
        return setTmpStock(tmpStock - 1);
    }

    return(
        <Grid className={classes.button_block} display="flex" justify="center" style={{ height: "100%" }}>
            {/* <Button variant="contained" color="secondary"> 🔺</Button>
            <Button variant="contained" color="secondary">🔻</Button> */}
            <IconButton aria-label="delete" className={classes.margin} size="small">
            <ArrowDropUpIcon  />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin} size="small">
            <ArrowDropDownIcon  />
            </IconButton>
        </Grid>
    );
}

export default function TradeStock() {
    const classes = useStyles();
    let testXs = 12;
    return(
        <Grid wrap="wrap" className={classes.paper} alignItems="stretch" container direction="column" justify="center" alignItems="center" style={{ height: "100%" }}>
            <Grid container direction="row"  justify="center">
              <TextField id="standard-basic" label="호가 매매" size="small" style={{width: "80%",}}/>
              <ArrowButton/>
            </Grid>
            <Grid container direction="row" justify="center">
                <TextField id="standard-basic" label="Standard" size="small" style={{width: "80%",}}/>
                <ArrowButton/>
            </Grid>
            <Grid className={classes.button} style={{width: "80%",}}>
                <Button variant="contained" color="secondary">
                BUY
                </Button>
                <Button variant="contained" color="primary">
                SELL
                </Button>
            </Grid>
        </Grid>
    );
}