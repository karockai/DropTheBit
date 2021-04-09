import { React, useState, useEffect } from 'react';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '2vw',
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
    icon : {
        fontSize: '2vw',
    }
  }));
  
export default function RoomAction (props) {
    const classes = useStyles();
    const [peopleTrade, setPeople] = useState({
        total: 0,
        red: 0,
        blue: 0,
        grey: 0,
    });

    useEffect(() => {
        props.socket.on('roomAction', (data) => {
            setPeople({
                total : data.recentBuy + data.recentSell + data.recentNothing,
                red : data.recentBuy,
                blue : data.recentSell,
                grey : data.recentNothing
            })
        })
    }, [])

      return (
        <div className={classes.root}>
          {
            peopleTrade.red > 0 && 
            [...Array(peopleTrade.red)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'red'}}/>
                )
            })
          }
                    {
            peopleTrade.grey > 0 && 
            [...Array(peopleTrade.grey)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'grey'}}/>
                )
            })
          }
                    {
            peopleTrade.blue > 0 && 
            [...Array(peopleTrade.blue)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'blue'}}/>
                )
            })
          }
        </div>
      );
}
