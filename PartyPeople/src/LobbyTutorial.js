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

    const indexMap = ['게임목적', '게임원리', '게임조작'];
    const maxIndex = indexMap.length;

    let currentPage = (pageIndex) => {
        if (indexMap[pageIndex] === '게임목적') {
            return (
                <TutorialPage
                    title="게임 목적"
                    img={TradeControllPNG}
                    content="뭐 대충 이렇게 조작하면 됩니다. 어려워 보이죠 ? 맞아요. 대부분 잘 못하더라구요."
                />
            );
        } else if (indexMap[pageIndex] === '게임원리') {
            return (
                <TutorialPage
                    title="게임 흐름"
                    img={TradeCurrentPNG}
                    content="게임 상에서 지갑이에요. 내 계좌에도 1억 있었으면 좋겠네요."
                />
            );
        } else if (indexMap[pageIndex] === '게임조작') {
            return (
                <TutorialPage
                    title="조작법"
                    img={TradeOrderTablePNG}
                    content="모랄라몰마뢈뢈뢈뢈뢈뢈뢈뢈뢈롸모라모라모ㄹ 테스트 텍스트 테스트 텍스ㅡㅌ."
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
                                    disabled={activeStep === maxIndex}
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
