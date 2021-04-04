import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Test() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction={'column'}
            alignItems={'stretch'}
            className={classes.root}
        >
            <Grid item>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            최성현 님의 단타방
                        </Typography>
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container direction={'row'} alignItems={'stretch'}>
                <Grid  item xs={9} container direction={'column'} alignItems={'stretch'}>
                    <Grid style={{height: '70vh'}} item>
                        <Paper style={{height: '100%', opacity: '0.3', border:'solid'}}>플레이어리스트</Paper>
                    </Grid>
                    <Grid  style={{height: '20vh'}} item container direction={'row'} alignItmes={'stretch'}>
                        <Grid item xs ={5}>
                            <Paper style={{height: '100%', opacity: '0.3',border:'solid'}}>옵션</Paper> 
                        </Grid>
                        <Grid item xs ={7}>
                            <Paper style={{height: '100%', opacity: '0.3',border:'solid'}}>스타트버튼</Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{height: '90vh'}} item xs={3}>
                    <Paper style={{height: '100%', opacity: '0.3',border:'solid'}}>채팅</Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}
