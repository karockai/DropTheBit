import React, { useState } from 'react';

function Message(props) {
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
    return <div>{msg}</div>;
}

export default Message;
