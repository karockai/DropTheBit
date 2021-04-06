import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-human-sprites';

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
let size = 30;
const useStyles = makeStyles((cnt) => ({
    root: {
        width: '100%',
        height: '100%',
        margin: '0 2vh 2vh 2vh',
        color: '#CDD7E0',
        opacity: 1,
        backgroundColor: '#0C151C',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: '#ffffff',
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function LobbyPlayerCard(props) {
    const classes = useStyles(props.playerCount);
    const playerCount = props.playerCount;
    let index = 1;
    for (let interval = 3; ; interval += 2, index++) {
        const comp = Math.pow(2, interval);
        if (comp >= playerCount) break;
    }
    const ratio = Math.pow(2, index); // playerCount ~2^1일때 1, ~8 2^3일때 2, ~32 2^5일때 4, ~128 2^7일때, 8
    const isLeader = props.roomLeader === props.socketID ? '👑 방장' : '게스트';
    let options = null;
    if(ratio > 8) {
      options = 
      {
          w: 10 / ratio * 3 + 'vw',
          h: 10 / ratio * 3 + 'vw',
          // m: 3 / ratio + 'vh ' + 3 / ratio + 'vw',
      };
    }
    else {
      options = 
      {
          w: 10 / ratio + 'vw',
          h: 10 / ratio + 'vw',
          m: 3 / ratio + 'vh ' + 3 / ratio + 'vw',
      };
    }
    let avatars = new Avatars(sprites, options);
    let svg = avatars.create(props.playerID);

    let playerInfo = null;
    if(ratio > 8){
      playerInfo = (<></>)
    }
    else {
      playerInfo = (
        <>
        <Grid item style={{ fontSize: 3 / ratio + 'vw' }}>
        {isLeader}
    </Grid>
    <Grid item style={{ fontSize: 5 / ratio + 'vw' }}>
        {props.playerID}
    </Grid>
    </>
      )
    }
    

    return (
        <Grid
            style={{
                width: 50 / ratio + '%',
                height: 100 / ratio + '%',
                padding: 1 / ratio + 'vh ' + 1 / ratio + 'vw',
            }}
        >
            <Card className={classes.root}>
                <CardContent
                    style={{ padding: 1 / ratio + 'vh ' + 1 / ratio + 'vw' }}
                >
                    <Grid container item direction={'row'}>
                        <Grid container item xs={4}>
                            <div
                                style={{ width: '100%', height: '100%' }}
                                dangerouslySetInnerHTML={{ __html: svg }}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={8}
                            direction={'column'}
                            justify={'flex-start'}
                            alignItems={'flex-end'}
                        >
                            {playerInfo}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
