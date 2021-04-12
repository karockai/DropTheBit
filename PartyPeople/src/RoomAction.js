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
    icon: {
        fontSize: '2vw',
    },
}));

export default function RoomAction(props) {
    const classes = useStyles();
    const [peopleTrade, setPeople] = useState({
        total: 0,
        red: 0,
        blue: 0,
        grey: 0,
    });
    useEffect(() => {
        props.socket.on('roomAction', (data) => {
            const tot = data.recentBuy + data.recentSell + data.recentNothing;
            setPeople({
                total: tot,
                red: data.recentBuy,
                blue: data.recentSell,
                grey: data.recentNothing,
            });
        });
    }, []);
    // const ratio = peopleTrade.total > 60 ? 3 : (peopleTrade.total > 15 ? 2 : 1);
    const ratio = peopleTrade.total > 60 ? 3 : peopleTrade.total > 15 ? 2 : 1;
    return (
        <>
            <span style={{ color: 'red' }}>{' ( 매수 / '}</span>
            <span style={{ color: '#1e88e5' }}>{'매도 / '}</span>
            <span style={{ color: 'grey' }}>{'보류 )'}</span>
            <div className={classes.root}>
                {peopleTrade.red > 0 &&
                    [...Array(peopleTrade.red)].map((n) => {
                        return (
                            <PersonSharpIcon
                                className={classes.icon}
                                style={{
                                    color: 'red',
                                    margin:
                                        1 / ratio + 'vw ' + 1 / ratio + 'vw',
                                    fontSize: 2 / ratio + 'vw',
                                }}
                            />
                        );
                    })}
                {peopleTrade.blue > 0 &&
                    [...Array(peopleTrade.blue)].map((n) => {
                        return (
                            <PersonSharpIcon
                                className={classes.icon}
                                style={{
                                    color: '#1e88e5',
                                    margin:
                                        1 / ratio + 'vw ' + 1 / ratio + 'vw',
                                    fontSize: 2 / ratio + 'vw',
                                }}
                            />
                        );
                    })}
                {peopleTrade.grey > 0 &&
                    [...Array(peopleTrade.grey)].map((n) => {
                        return (
                            <PersonSharpIcon
                                className={classes.icon}
                                style={{
                                    color: 'grey',
                                    margin:
                                        1 / ratio + 'vw ' + 1 / ratio + 'vw',
                                    fontSize: 2 / ratio + 'vw',
                                }}
                            />
                        );
                    })}
            </div>
        </>
    );
}
