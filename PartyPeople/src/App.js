import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Chat from './Chat'

function App() {
  return (
    <div>
      Settings.... 만들어야해...ㅠ
    </div>
  );
}

// Player fucntion
//_ 공통 기능 :: 플레이어 객체의 정보를 가지고 표현한다
class PlayerManager extends React.Component {
  constructor(props) { // Initialize
    super(props);
    this.state = {
      userID: null,
      userPoint: 0,
      userMoney: 0,
      hint: null,

      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }
}
//_ 공통 기능 :: 버튼(button) 객체에 해당하는 화면을 캔버스(canvas)에 띄운다.
//_ 
class ButtonManager extends React.Component {

}
//_ 공통 기능 :: 
class CanvasManager extends React.Component {

}

class GameManager extends React.Component {
  //_ 전체 힌트,
  //_ hint index를 api 요청을 해.
  //_ response data가 hint이고,
  // <CanvasManager hint = ""/>
  // this.prop.hint 
}


export default App;
