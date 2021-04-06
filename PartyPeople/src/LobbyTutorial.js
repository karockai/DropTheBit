import { React, useEffect, useState, } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#0C151C',
        color: 'white',
        margin: '1vh 0 0 0'
    },
}));

export default function LobbyTutorial(props) {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Paper className={classes.paper} style={{ height: '80vh', width: '40vw' }}>
        <Grid
            container
            direction="column"
            className="튜토리얼그리드"
            style={{ height: '100%', width: '100%' }}
        >
            <Grid
                item
                className="tuto-title"
                style={{ width: '100%', height: '20%' }}
            >
                타이틀
            </Grid>
            <Grid
                item
                className="tuto-image"
                style={{ width: '100%', height: '50%' }}
            >
                이미지
            </Grid>
            <Grid
                item
                className="tuto-content"
                style={{ width: '100%', height: '20%' }}
            >
                컨텐츠
            </Grid>
            <Grid
                item
                className="tuto-pagenation"
                style={{ width: '100%', height: '10%' }}
            >
                <div className={classes.root}>
                    <Typography>Page: {page}</Typography>
                    <Pagination
                        count={10}
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
        </Grid>
        </Paper>
    );
}
