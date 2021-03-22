import React, { useState } from 'react';

const strByteLength = (s, b, i, c) => {
    for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b;
};

function Chat(props) {
    const [msg, setMessage] = useState('');

    const OnChange = (e) => {
        setMessage(e.target.value);
    };

    const OnKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.sendMessage(e);
        }
    };

    const color = (author) => {
        if (author === 'SERVER') {
            return '#BB0000';
        } else {
            return (
                '#' +
                Math.floor(
                    parseInt(author.substring(4)) * 121203891028309128315
                ).toString(16)
            );
        }
    };
    return (
        <div className="container">
            <div style={{ width: '100%' }}>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Stock Chat</div>
                        <hr />
                        <div className="messages">
                            {props.chat.messages.map((message) => {
                                return (
                                    <div
                                        style={{ color: color(message.author) }}
                                    >
                                        {message.author}: {message.message}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="card-footer">
                        <br />
                        <input
                            ref={(input) => input && input.focus()}
                            type="text"
                            placeholder="Message"
                            className="form-control"
                            value={msg}
                            onKeyPress={OnKeyPress}
                            onChange={OnChange}
                        />
                        <br />
                        <button
                            value={msg}
                            onClick={props.sendMessage}
                            className="btn btn-primary form-control"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
