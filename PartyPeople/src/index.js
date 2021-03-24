import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GameManager from './GameManager';
import SimpleContainer from './SimpleContainer';
import ViewportLayout from './ViewportLayout';

ReactDOM.render(
    <React.StrictMode>
        <GameManager/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
