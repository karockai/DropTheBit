import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {   
    width: '30vh',
    height: '15vh',
    margin: '0 2vh 2vh 2vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function LobbyPlayerCard(props) {
  const classes = useStyles();
  const isLeader =  props.roomLeader ? '방장' : ''
  return (
    <Card className={classes.root} >
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
