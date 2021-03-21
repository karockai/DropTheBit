import React,{useState, makeStyle} from 'react';
import {Button, TextField, Grid, Paper, makeStyles, TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *':{
            margin: theme.spacing(1),
            width: "100%",
            justify: 'center',
        }
    },
    button2: {
        '& > *':{
            width: "45%",
            // margin: theme.spacing(1),
            justify: 'space-between',
        }
    },
    paper: {
        // padding: theme.spacing(1),
        margin: theme.spacing(1),
        
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));
export default function MyAsset() {
    let testXs = 12;
    const classes = useStyles();
    const [myCash, setCash] = useState(0);
    const [myAsset, setAsset] = useState(0);

    // useEffect(() => {
    //     setCash(0);
    //     setAsset(0);
    // });


    return(
        <Grid wrap="wrap" container direction="row" style={{ height: "100%" , }}  >
            <Grid container direction="row" alignItems="center" display= 'flex' justify="space-between">
                <Grid style={{ width: "48%", height: "95%", margin:'0 4px 1vh 0'}}>
                    <Paper style={{ height: "100%"}}> 
                    Cash
                    <p>
                        {myCash}
                    </p>
                     </Paper>
                </Grid>
                <Grid style={{ width: "48%", height: "95%", margin:'0 0 1vh 0'}}>
                    <Paper style={{ height: "100%"}}>
                        Point
                    </Paper>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="stretch"  display= 'flex' >
            <Grid style={{ width: "100%", height: "100%"}}>
                    <Paper style={{ height: "100%"}}> 
                        Asset
                        <p>
                            {myAsset}
                        </p> 
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );

}