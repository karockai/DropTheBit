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
    let ratio = 1;
    useEffect(() => {
        props.socket.on('roomAction', (data) => {
            const tot = data.recentBuy + data.recentSell + data.recentNothing;
            setPeople({
                total : tot,
                red : data.recentBuy,
                blue : data.recentSell,
                grey : data.recentNothing
            })
            if(tot > 15) {
                ratio = 2;
            }
            else if(tot > 60){
                ratio = 3;
            }
        })
    }, [])

      return (
        <div className={classes.root}>
          {
            peopleTrade.red > 0 && 
            [...Array(peopleTrade.red)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'red', fontSize: 2/ratio + 'vw'}}/>
                )
            })
          }
                    {
            peopleTrade.grey > 0 && 
            [...Array(peopleTrade.grey)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'grey', fontSize: 2/ratio + 'vw'}}/>
                )
            })
          }
                    {
            peopleTrade.blue > 0 && 
            [...Array(peopleTrade.blue)].map((n) => {
                return (
                    <PersonSharpIcon className={classes.icon} style={{color: 'blue', fontSize: 2/ratio + 'vw'}}/>
                )
            })
          }
        </div>
      );
}
