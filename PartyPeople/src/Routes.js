import React, { Component, useEffect, useContext } from 'react';
// import { withRouter as Route, Router, Switch,Redirect,  useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory,
} from 'react-router-dom';
import LayoutGridEffect from './LayoutGridEffect';
import EnterRoom from './EnterRoom';
import Lobby from './Lobby';

export default function Routes(props) {
    const [time, setTime] = React.useState(0);
    const isValid = () => {
        if (props.socket) return true;
        return false;
    };
    const [lobbyAudio, setAudio] = React.useState(null);

    const sendAudio = (audio) => {
        // console.log('sendAudio : ', audio);
        setAudio(audio);
    };
    // console.log('@Routes // lobbyAudio:', lobbyAudio);

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <>
                                    <EnterRoom
                                        socket={props.socket}
                                        requestSocket={props.requestSocket}
                                        SetRoomIdAndInfo={
                                            props.SetRoomIdAndInfo
                                        }
                                        roomID={props.roomID}
                                        roomInfo={props.roomInfo}
                                        sendAudio={sendAudio}
                                    />
                                </>
                            );
                        }}
                    />
                    <Route // ? 어떻게 /lobby 라우트에 필요한 인자 넘길지 고민중..
                        path="/lobby"
                        render={() => {
                            return isValid() ? (
                                <Lobby
                                    socket={props.socket}
                                    roomID={props.roomID}
                                    roomInfo={props.roomInfo}
                                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                                    lobbyAudio={lobbyAudio}

                                />
                            ) : (
                                <Redirect to="/" />
                            );
                        }}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
                    <Route
                        path="/game"
                        render={() => {
                            return isValid() ? (
                                <LayoutGridEffect
                                    socket={props.socket}
                                    requestSocket={props.requestSocket}
                                    roomID={props.roomID}
                                    roomInfo={props.roomInfo}
                                    gameTime={time}
                                    lobbyAudio={lobbyAudio}
                                />
                            ) : (
                                <Redirect to="/" />
                            );
                        }}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
                </Switch>
            </Router>
        </>
    );
}
