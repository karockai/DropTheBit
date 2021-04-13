import Zoom from '@material-ui/core/Zoom';
import { React, useEffect, useState, useTheme } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TradeControllPNG from './images/tutorial/거래조작부.png';
import TradeCurrentPNG from './images/tutorial/거래현황부.png';
import TradeOrderTablePNG from './images/tutorial/내주문목록.png';
import TradeHokaTablePNG from './images/tutorial/호가테이블.png';
import GrapMoneyPNG from './images/tutorial/0.png';
import InGamePNG from './images/tutorial/인게임화면.png';

// 튜토리얼 개선
import GameWindow from './images/GameGoal.png';
import Wallet from './images/tutorial/내자산.png';
import TradeWindow from './images/tutorial/매매창.png';
import MyList from './images/tutorial/호가창.png';

import './ShiningButton.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: '#0C151C',
        color: '#ffffff',
        alignContent: 'center',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#0C151C',
        color: 'white',
    },
    ul: {
        '& .MuiPaginationItem-root': {
            color: '#fff',
        },
    },
}));

function TutorialPage(props) {
    return (
        <>
            <Grid
                item
                className="tuto-title"
                container
                direction="row"
                justify="space-between"
                style={{ width: '100%', height: '10%' }}
            >
                <h1
                    align="left"
                    style={{
                        padding: '1vh 1vw',
                        width: '50%',
                        textAlign: 'left',
                        fontWeight: 'bold',
                    }}
                >
                    {props.title}
                </h1>
                <div
                    align="right"
                    onClick={props.onClose}
                    style={{
                        padding: '1vh 1vw',
                        fontSize: '2vw',
                        cursor: 'pointer',
                    }}
                >
                    ❌
                </div>
            </Grid>

            <Grid
                item
                className="tuto-image"
                style={{
                    width: '100%',
                    height: props.hasContent ? '65%' : '80%',
                }}
            >
                <img
                    src={props.img}
                    style={{
                        height: '100%',
                        width: props.hasContent ? '60%' : '70%',
                        padding: '0 0 5vh 0',
                    }}
                />
            </Grid>
            {props.hasContent ? (
                <Grid
                    item
                    className="tuto-content"
                    style={{
                        width: '100%',
                        height: props.hasContent ? '15%' : '5%',
                        padding: '5vh 10vw 1vh 10vw',
                    }}
                >
                    {props.content}
                </Grid>
            ) : (
                <></>
            )}
        </>
    );
}

export default function LobbyTutorial(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    let step = 0;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const indexMap = ['게임 화면',];
    const maxIndex = indexMap.length;

    let currentPage = (pageIndex) => {
        // if (indexMap[pageIndex] === '소개') {
        //     return (
        //         <TutorialPage
        //             title="게임 소개"
        //             img={GrapMoneyPNG}
        //             content="게임의 목적은 단 시간에 최대한 많은 수익을 올리는 것입니다. 낮은 가격에 코인을 구매하고 높은 가격에 판매하여 현금으로 환전하면 됩니다."
        //             hasContent
        //         />
        //     );
        // } else
        if (indexMap[pageIndex] === '게임 화면') {
            return (
                <TutorialPage
                    title="GOAL"
                    img={GameWindow}
                    content="게임 플레이 화면입니다."
                    onClose={props.onClose}
                />
            );
        } else if (indexMap[pageIndex] === '자산 화면') {
            return (
                <TutorialPage
                    title="자산 화면"
                    img={Wallet}
                    content=""
                    onClose={props.onClose}
                />
            );
        } else if (indexMap[pageIndex] === '매매 화면') {
            return (
                <TutorialPage
                    title="매매 화면"
                    img={TradeWindow}
                    content=""
                    onClose={props.onClose}
                />
            );
        } else if (indexMap[pageIndex] === '내 주문 목록') {
            return (
                <TutorialPage
                    title="내 주문 목록"
                    img={MyList}
                    content=""
                    onClose={props.onClose}
                />
            );
        } else {
            return <>무언가 문제가 생겼군요.</>;
        }
    };

    return (
        <Paper
            className={classes.paper}
            style={{ height: '80vh', width: '70vw', padding: '2vh 0 2vh 0' }}
        >
            <Grid
                container
                direction="column"
                className="튜토리얼그리드"
                style={{ height: '100%', width: '100%' }}
            >
                {/* <button>❌</button> */}
                <Zoom
                    in={() => {
                        if (step !== activeStep) {
                            step = activeStep;
                            return true;
                        } else return false;
                    }}
                >
                    {currentPage(activeStep)}
                </Zoom>
                <Grid
                    item
                    className="tuto-pagenation"
                    style={{ width: '100%', height: '10%' }}
                    display="flex"
                    alignItems="center"
                    justify="flex-end"
                >
                    
                </Grid>
            </Grid>
        </Paper>
    );
}
