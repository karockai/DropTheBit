import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import LayoutGrid from './LayoutGrid';
import EnterRoom from './EnterRoom';
import Lobby from './Lobby';

export default function Routes(props) {
    const [time, setTime] = React.useState(0);
    const isValid = () => {
        if (time === 0)
            return false;
        return true;
    }
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <EnterRoom
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                                time ={time}
                                setTime={setTime}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                            />
                        )}
                    />
                    <Route
                        path="/game"
                        render={() => (isValid() ? 
                            <LayoutGrid
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                                gameTime={time}
                            /> : <Redirect to="/" />)}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
                </Switch>
            </Router>
        </>
    );
}
