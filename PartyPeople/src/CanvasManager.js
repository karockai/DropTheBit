import logo from './logo.svg';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Fab, Grid, Paper, makeStyles, Tab, Tabs,useTheme } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './CanvasManager.css';
import StockMarket from './StockMarket';
import PlayerManager from './PlayerManager'
import Chat from './Chat'
import InfoManager from './InfoManager'
import CustomizedTables from './FundManager'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import App from './App';
import PlayerInfo from './yonggi_json/player_info.json';
import setting_price from './yonggi_json/setting_price.json'
import stock from './stock.json'
/**
 * 
 * socket_id를 대조해서 현재 플레이어가 누군지 저장해둔다.
 */


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function a11yProps(index) {
return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
};
}

const useStyles = makeStyles((theme) => ({
root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
},
}));

function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab style={{fontSize:25}} label="종목토론방" {...a11yProps(0)} onClick={() => props.onClick("chat")}/>
            <Tab style={{fontSize:25}} label="매매하기" {...a11yProps(1)} onClick={() => props.onClick("stock")}/>
            <Tab style={{fontSize:25}} label="자산확인" {...a11yProps(2)} onClick={() => props.onClick("fund")}/>
            <Tab style={{fontSize:25}} label="뉴스보기" {...a11yProps(3)} onClick={() => props.onClick("info")}/>
            <Tab style={{fontSize:25}} label="게임설정" {...a11yProps(4)} onClick={() => props.onClick("setting")}/>
          </Tabs>
        </AppBar>
      </div>
    );
  }

//_ previous Toggles
// function ToggleButtons(props) {
//     const [alignment, setAlignment] = React.useState('left');

//     const handleAlignment = (event, newAlignment) => {
//         setAlignment(newAlignment);
//     };
//     return (
//         <ToggleButtonGroup
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//         >
//             <ToggleButton onClick={() => props.onClick("chat")} className="tool-btn" size="large" value="chat" aria-label="centered">
//                 채팅
//             </ToggleButton>
//             <ToggleButton onClick={() => props.onClick("stock")} className="tool-btn" value="stock" aria-label="centered">
//                 주가
//             </ToggleButton>
//             <ToggleButton onClick={() => props.onClick("fund")} className="tool-btn" value="fund" aria-label="centered">
//                 자산
//             </ToggleButton>
//             <ToggleButton onClick={() => props.onClick("info")} className="tool-btn" value="info" aria-label="centered">
//                 정보
//             </ToggleButton>
//             <ToggleButton onClick={() => props.onClick("setting")} className="tool-btn" value="setting" aria-label="centered">
//                 설정
//             </ToggleButton>
//         </ToggleButtonGroup>
//     );
// }

function FullWidthGrid(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    const stocks = stock;
    function Canvas() {
        let select;
        if (props.canvas === "chat") {
            select = <Chat getMessage={props.getMessage} sendMessage={props.sendMessage} chat={props.chat}/>
        }
        else if (props.canvas === "stock") {
            select = <StockMarket socket= {props.socket} user={props.userState} stock_list={stocks}/>
        }
        else if (props.canvas === "fund") {
            select = <CustomizedTables />
        }
        else if (props.canvas === "info") {
            const point = props.userState.info_pt;
            select = <InfoManager point={point}/>
        }
        else if (props.canvas === "setting") {
            select = <App />
        }
        return (
            <>{select}</>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <Paper className={classes.paper}>
                        <FullWidthTabs onClick={props.onClick}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <PlayerManager isLeft={true} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Canvas />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <PlayerManager isLeft={false} />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

//_ 데이터 구조
// 캔버스에서 무엇을 관리해야하나. (아래 해당하는 전체 게임 로직에 관한 모든것)
// Main -> 방 정보, 게임 Turn, 시간, 유저 숫자, 게임 상태 (시작-턴 시작, 진행-턴 진행, 종료-턴 종료, 대기-임의의 이벤트 등), 
// Users -> 방 안의 유저 정보 리스트 (닉네임, 포인트, 자산, 수익률, 자산 내용, 승률 등)
// Chat -> 내 닉네임, 채팅 상대 목록, 귓속말 상대, 모든 대화 내용 (public, private)
// Stock -> 구매 가능한 종목, 종목에 대한 여러 지표들 (종목명, 전년, 올해 가격, 등락, [매도])
// Fund -> 구매한 종목, 내 자산 지표 (내 닉네임, 총 평가금액, 수익률), 종목에 대한 여러 지표들 (종목명, 종목가격, 수익률, 구입 종목 수[매수])
// Inform -> 내 포인트, 구매 가능한 정보 리스트 (기업정보, 기업내용, 가격point), 구매한 정보 리스트
// Setting
function CanvasManager(props) {
    var user_idx;
    const socket_id = 'aaaaaa';
    const room_id = "32dmb141zvvd";
    // var year = setting_price.;
    /* 
    => socket_id와 room_id는 player_info를 통해 받아오는 걸로 수정해야 함
    */
   // ? socket_id, room_id를 객체 밖으로 빼서 key값으로 만들면 for문 없이 key값으로 찾아올 수 있을듯
    for (var i = 0; i < PlayerInfo.length; i++) {   
        if (socket_id === PlayerInfo[i].socket_id) {
            user_idx = i;
        }
    }

    const player_info = PlayerInfo[user_idx];
    const [userState, setUserState] = useState(player_info);
    const [currCanvas, setCurrCanvas] = useState("chat");

    const onClick = (canvasName) => {
        setUserState({
            ...userState,
             [currCanvas]: canvasName
            });
            setCurrCanvas(canvasName)
        };
    return (
        <div>
            <FullWidthGrid socket={props.socket} getMessage={props.getMessage} sendMessage={props.sendMessage} chat={props.chat} userState={userState} onClick={onClick} canvas={currCanvas} />
        </div>
    );

    
}

export default CanvasManager;