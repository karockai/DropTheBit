import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GameManager from './GameManager';
import Test from './Test';
import GameOverModal from './GameOverModal';
import LoadingScreen from './LoadingScreen';


ReactDOM.render(
    <div className='GameManager'>
        <div className='main'>
            <GameManager/>
        {/* <LoadingScreen justifyItems = 'center'/> */}
        {/* <ShiningButton/> */}
        {/* <Test/> */}
        </div>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
