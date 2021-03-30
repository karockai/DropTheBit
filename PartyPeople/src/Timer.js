import React, {useEffect, useState} from 'react';

export default function Timer(props) {
    const [time, setTime] = useState(-1);
    props.socket.on('restGameTime', (restGameTime) => {
        setTime(restGameTime);
    });
    const ShowTime = ()=> {
            var minute  = parseInt(time / 60);
            var second = time - minute * 60;
            minute = minute >= 10 ? String(minute) : '0'+String(minute);
            second = second >= 10 ? String(second) : '0'+String(second);
            if (time <= 0) {
                minute = '00';
                second = '00';
            }
            return (
                <h2 style={{fontSize: 40}}>
                    {minute+' : '+second}    
                </h2>
            );
        }
        return(
            ShowTime()
        ); 
    }
