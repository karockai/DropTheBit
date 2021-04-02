import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: '#f44336',
//     },
//   },
// });

const useStyles = makeStyles((theme)=>({
  root: {   
    width: '30vh',
    height: '15vh',
    margin: '0 2vh 2vh 2vh',
    color: '#CDD7E0',
    backgroundColor: '#0C151C',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    
    fontSize: 14,
    color: "#ffffff",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function LobbyPlayerCard(props) {
  const classes = useStyles();
  const isLeader =  props.roomLeader===props.socketID ? '방장' : ''
  return (
    <Card className={classes.root} style={{margin:'2vh 0 0 0'}}>
      <CardContent>
      <Grid container direction={'column'} justify={'center'} alignItems={'flex-end'}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {isLeader}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.playerID}
        </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
