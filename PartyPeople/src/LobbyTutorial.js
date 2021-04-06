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
                style={{ width: '100%', height: '10%' }}
            >
                <h1 align="left" style={{ padding: '1vh 1vw' }}>
                    {props.title}
                </h1>
            </Grid>

            <Grid
                item
                className="tuto-image"
                style={{ width: '100%', height: '55%' }}
            >
                <img
                    src={props.img}
                    style={{
                        height: '100%',
                        width: '60%',
                        padding: '2vh 0 0 0',
                    }}
                />
            </Grid>

            <Grid
                item
                className="tuto-content"
                style={{
                    width: '100%',
                    height: '25%',
                    padding: '5vh 1vw 1vh 1vw',
                }}
            >
                {props.content}
            </Grid>
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

    const indexMap = ['소개', '게임목적', '게임원리', '게임조작1','게임조작2','게임조작3', '결과'];
    const maxIndex = indexMap.length;

    let currentPage = (pageIndex) => {
        if (indexMap[pageIndex] === '소개') {
            return (
                <TutorialPage
                    title="게임 소개"
                    img={GrapMoneyPNG}
                    content="게임의 목적은 단 시간에 최대한 많은 수익을 올리는 것입니다. 낮은 가격에 코인을 구매하고 높은 가격에 판매하여 현금으로 환전하면 됩니다."
                />
            );
        } else if (indexMap[pageIndex] === '게임목적') {
            return (
                <TutorialPage
                    title="게임 목적"
                    img={InGamePNG}
                    content="게임의 인게임 화면입니다. 어려워 보이죠 ? 맞아요. 대부분 잘 못하더라구요. 드랍더비트는 주식이나 코인 거래를 경험하지 못한 플레이어가 이러한 화면이 편하고 익숙해지는 데 목적이 있습니다."
                />
            );
        } else if (indexMap[pageIndex] === '게임원리') {
            return (
                <TutorialPage
                    title="게임 흐름"
                    img={TradeControllPNG}
                    content='게임에서 코인을 구매하는 행위를 "매수"라고 표현합니다. 반대로 코인을 판매하는 행위를 "매도"라고 합니다. 드랍더비트는 실제 코인의 가격과 호가를 이용해 매수 및 매도를 진행하지만, 코인의 거래가 이루어지지 않습니다. 드랍더비트는 원하는 가격에 원하는 양의 매도와 매수 주문을 요청할 수 있습니다. 이것은 수량을 기다려야 하는 실제 코인 거래와는 조금 다릅니다.'
                />
            );
        } else if (indexMap[pageIndex] === '게임조작1') {
            return (
                <TutorialPage
                    title="조작법 1"
                    img={TradeOrderTablePNG}
                    content="게임은 마우스 혹은 키보드를 이용해 진행할 수 있습니다. 빠르게 수익을 올리기 위해 키보드 사용을 권장합니다."
                />
            );
        } else if (indexMap[pageIndex] === '게임조작2') {
            return (
                <TutorialPage
                    title="조작법 2"
                    img={TradeControllPNG}
                    content="마우스 혹은 방향키를 사용하여 원하는 호가와 수량을 결정합니다"
                />
            );
        } else if (indexMap[pageIndex] === '게임조작3') {
            return (
                <TutorialPage
                    title="조작법 3"
                    img={TradeOrderTablePNG}
                    content="원하는 옵션을 설정하고 매수 혹은 매도 버튼을 눌러 주문을 요청합니다. 더 자세한 조작법은 우측의 [KEYMAP] 버튼을 눌러 확인하세요!"
                />
            );
        } else if (indexMap[pageIndex] === '결과') {
            return (
                <TutorialPage
                    title="게임결과"
                    img={TradeOrderTablePNG}
                    content="현재 코인 가격이 나의 주문 가격과 같을 때 주문이 체결되고 코인을 얻거나 현금을 얻게됩니다. 효율적인 거래를 이루었다면 총 평가 자산이 늘어나고 이를 이용해 플레이어간 순위를 결정합니다. 요령이 있는 플레이어는 차트와 호가 수량을 확인하고 흐름을 유추하여 더 좋은 수익을 낼 것입니다."
                />
            );
        } else {
            return <>무언가 문제가 생겼군요.</>;
        }
    };

    return (
        <Paper
            className={classes.paper}
            style={{ height: '90vh', width: '40vw', padding: '2vh 0 2vh 0' }}
        >
            <Grid
                container
                direction="column"
                className="튜토리얼그리드"
                style={{ height: '100%', width: '100%' }}
            >
                <Zoom in={()=>{if(step!==activeStep){
                    step = activeStep;
                    return true;
                }else return false;
                }}>{currentPage(activeStep)}</Zoom>
                <Grid
                    item
                    className="tuto-pagenation"
                    style={{ width: '100%', height: '10%' }}
                    display="flex"
                    alignItems="center"
                    justify="flex-end"
                >
                    <div className={classes.root}>
                        <MobileStepper
                            variant="progress"
                            // variant="dots"
                            steps={maxIndex}
                            position="static"
                            activeStep={activeStep}
                            className={classes.root}
                            nextButton={
                                <button
                                    className="tutorialMove"
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxIndex - 1}
                                    fontColor="white"
                                >
                                    Next
                                    {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
                                    <KeyboardArrowRight />
                                </button>
                            }
                            backButton={
                                <button
                                    className="tutorialMove"
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    fontColor="white"
                                >
                                    {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
                                    <KeyboardArrowLeft />
                                    Back
                                </button>
                            }
                        />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
