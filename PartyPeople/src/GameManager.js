import React, { Component } from 'react';
import io from 'socket.io-client';
import CanvasManager from './CanvasManager';
import { Button } from '@material-ui/core';
import ChartComponent from './ChartComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutGrid from './LayoutGrid';
import Routes from './Routes';

class GameManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hash: '',
            author: '',
            message: '',
            messages: [],
            socketId: null,

            roomID: null,
            roomInfo: null,
        };
        // this.socket = io('15.165.129.19:5000'); //_ http://15.165.129.19:5000/
        this.socket = io('localhost:5000');
        console.log(this.socket);
        this.socket.on('connect', () => {
            console.log('connnected', this.socket);
            this.socket.emit('join');
        });
    }
    componentWillUnmount() {}
    componentDidMount() {
        let socketCopy = null;
        let user_cnt = 0;
        // this.socket = io("15.165.129.19:5000"); //_ http://15.165.129.19:5000/
        // this.socket.on("connect", async () => {
        //   console.log("connnected", this.socket);
        //   this.socket.emit("join");
        // });
        this.socket.on('curCoin', (data) => {
            let today = new Date();
            let minutes = today.getMinutes(); // 분
            let seconds = today.getSeconds(); // 초
            let milliseconds = today.getMilliseconds(); // 밀리초
        });

        this.socket.on('socket', (socket) => {
            setSocket();
        });

        this.socket.on('update', function (data) {
            addMessage(data);
        });

        this.socket.on('get_chart_data', function (data) {});

        const setSocket = (socket) => {
            this.setState({ socketId: socket });
        };

        const addSocket = () => {
            if (this.socketId === null) {
                this.setState({ socketId: this.socket });
            }
        };

        const addMessage = (data) => {
            this.setState({ messages: [...this.state.messages, data] });
        };

        this.socket.on('update_users', function (data, user_count) {
            user_cnt = user_count;
            // 화면에 있는 6명에게 이 소켓이 부여되도록 하고싶어요 선생님 ㅠㅠ
            // 이 자리에 들어가면 될거같아요
            // room, start 버튼 도입하면 해결될 문제 !
        });
    }

    TestEmitButton = (props) => {
        return (
            <>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.sendComment}
                >
                    소켓 연결 확인용 버튼(action::'test')
                </Button>
            </>
        );
    };

    sendComment = (ev) => {
        ev.preventDefault();
        this.socket.emit('test', {
            comment:
                '연결 테스트 메시지 입니다. 클라이언트와 서버가 연결되어 있습니다.',
        });
    };
    RequestSocket = (component, socket) => {
        if (socket != null) return;
        console.log(
            component + ' 에서 socket을 요청했습니다. 랜더링을 다시 합니다.'
        );
        this.setState({ socketId: this.socket });
    };

    SetRoomIdAndInfo = (data) => {
        this.setState({
            roomID: data.roomID,
            roomInfo: data.roomInfo,
        });
        console.log('SetRoomIdAndInfo. 랜더링을 다시 합니다.');
    };

    render() {
        const socket = this.state.socketId;
        const roomID = this.state.roomID;
        const roomInfo = this.state.roomInfo;
        const lobbyAudio = this.state.lobbyAudio;

        return (
            <>
                <Routes
                    socket={socket}
                    requestSocket={this.RequestSocket}
                    SetRoomIdAndInfo={this.SetRoomIdAndInfo}
                    roomID={roomID}
                    roomInfo={roomInfo}
                    sendAudio={this.sendAudio}
                    // lobbyAudio={lobbyAudio}
                />
            </>
        );
    }
}
export default GameManager;
