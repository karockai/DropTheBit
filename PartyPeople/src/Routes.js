import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import LayoutGridEffect from './LayoutGridEffect';
import EnterRoom from './EnterRoom';
import Lobby from './Lobby';

export default function Routes(props) {
    const [time, setTime] = React.useState(0);
    const isValid = () => {
        if (props.socket)
            return true;
        return false;
    }

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
                                SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                                time ={time}
                                setTime={setTime}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                            />
                            </>)
                        }}
                    />
                    <Route
                        path="/game"
                        render={() => {
                            return(
                            isValid() ? 
                            <LayoutGridEffect
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                                gameTime={time}
                            /> : <Redirect to="/" />)}}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
                </Switch>
            </Router>
        </>
    );
}
