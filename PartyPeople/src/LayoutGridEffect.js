import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';

import ThreeSecTimer from './ThreeSecTimer';
import LayoutGrid from './LayoutGrid';
import GameMusic from './GameMusic';

export default function LayoutGridEffect(props) {
    const location = useLocation();

    const [isStart, setIsStart] = useState(false);

    const [threeSecTimerOpen, setThreeSecTimerOpen] = useState(true);

    useEffect(() => {
        props.socket.once('startGame_Real', (dataForStart) => {
            setThreeSecTimerOpen(false);
            setIsStart(true);
        });
    }, []);

    return (
        <>
            <ThreeSecTimer open={threeSecTimerOpen} />
            <LayoutGrid
                socket={props.socket}
                requestSocket={props.requestSocket}
                roomID={props.roomID}
                roomInfo={props.roomInfo}
                gameTime={props.time}
                isStart={isStart}
                lobbyAudio={props.lobbyAudio}
            />
            <GameMusic socket={props.socket} />
        </>
    );
}
