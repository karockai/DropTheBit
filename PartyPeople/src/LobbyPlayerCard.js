import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {   
    maxWidth: '30vh',
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} >
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          방장
        </Typography> */}
        <Typography variant="h5" component="h2">
          {props.playerID}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">강퇴하기</Button>
      </CardActions>
    </Card>
  );
}
