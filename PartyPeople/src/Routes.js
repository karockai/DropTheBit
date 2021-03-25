import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutGrid from './LayoutGrid';
import EnterRoom from './EnterRoom';
import Lobby from './Lobby';

export default function Routes(props) {
    const [time, setTime] = React.useState(0);
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
                    {/* <Route path="/lobby" render={() => <Lobby socket={props.socket} requestSocket={props.requestSocket}/>}/> */}
                    <Route
                        path="/game"
                        render={() => (
                            <LayoutGrid
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                roomID={props.roomID}
                                time={time}
                            />
                        )}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
                </Switch>
            </Router>
        </>
    );
}
