import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import {
    FormHelperText,
    Input,
    FormControl,
    makeStyles,
    TextField,
    InputAdornment,
} from '@material-ui/core';
import { Button } from '@material-ui/core';
import './PlayerManager.css';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
// import {Fade} from './TradeModal.js';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        //   maxWidth: '30ch',
        backgroundColor: theme.palette.background.paper,
        float: 'left',
    },
    card: {
        display: 'inline-block',
    },
    orange: {
        backgroundColor: '#666666',
    },
    inline: {
        display: 'inline',
    },
    bullet: {
        width: '45%',
        margin: '10px',
    },
    modal_name: {
        fontSize: 60,
        marginBottom: 14,
    },
    modal_price: {
        fontSize: 55,
        marginBottom: 50,
    },
    modal_arrow: {
        maxWidth: '20px',
        float: 'right',
    },
    Textfield: {
        fontSize: 20,
        marginBottom: 10,
    },
    pos: {
        marginBottom: 12,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '500px',
        height: '500px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        float: 'auto',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 6, 6),
    },
}));
function StockRow(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const Fade = React.forwardRef(function Fade(props, ref) {
        const { in: open, children, onEnter, onExited, ...other } = props;
        const style = useSpring({
            from: { opacity: 0 },
            to: { opacity: open ? 1 : 0 },
            onStart: () => {
                if (open && onEnter) {
                    onEnter();
                }
            },
            onRest: () => {
                if (!open && onExited) {
                    onExited();
                }
            },
        });
        return (
            <animated.div ref={ref} style={style} {...other}>
                {children}
            </animated.div>
        );
    });
    return (
        <Row>
            <Button
                className="button"
                onClick={handleOpen}
                style={{ width: '100%' }}
            >
                <Col>{props.stock.stock_name}</Col>
                <Col>{props.stock.prevYear}</Col>
                <Col>{props.stock.curr_price}</Col>
                <Col>{props.stock.id}</Col>
                <Col>{props.stock.upDownRate}</Col>
            </Button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2
                            className={classes.modal_name}
                            id="spring-modal-title"
                        >
                            {props.stock.stock_name}
                        </h2>
                        <h2
                            className={classes.modal_price}
                            id="spring-modal-title"
                        >
                            {props.stock.curr_price}
                        </h2>
                        <PurchaseModal
                            user={props.user}
                            socket={props.socket}
                            stock_list={props.user.stock}
                            cash={props.user.cash}
                            stock_name={props.stock.stock_name}
                            price={props.stock.curr_price}
                        />
                    </div>
                </Fade>
            </Modal>
        </Row>
    );
}
function PurchaseModal(props) {
    const classes = useStyles();
    const [stock, setStock] = useState(null);
    const [tmpStock, setTmpStock] = useState(0);
    const [cash, setCash] = useState(props.cash);
    const [price, setPrice] = useState(props.price);
    const [diffrence, setDiffrence] = useState(0);
    const [open, setOpen] = React.useState(false);
    /*
   *  유저가 가지고있는 stock list에서 현재 modal에 띄워진 stock과 일치하는 stock을 찾는다.
    ? for문이 최선? 10개밖에 없으니까 일단 괜찮을 것 같긴 함  
   */
    for (let i = 0; i < props.stock_list.length; i++) {
        if (props.stock_list[i].stock_name === props.stock_name) {
            setStock(props.stock_list[i]);
            setTmpStock(props.stock_list[i]);
            break;
        }
    }
    function PlusArrow(props) {
        setDiffrence(diffrence + 1);
        return setTmpStock(tmpStock + 1);
    }
    function MinusArrow(props) {
        setDiffrence(diffrence - 1);
        return setTmpStock(tmpStock - 1);
    }
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    function Buy() {
        props.socket.emit('test', {
            comment:
                '_' +
                props.stock_name +
                '_ [' +
                tmpStock +
                '] 개의 주식의' +
                ' 매수 주문을 체결했습니다.',
        });
        props.socket.emit(
            'stock_buy',
            // {
            //   //@ playerId, roomId,
            //   userID: props.user.user_id,
            //   socketID: props.user.socket_id,
            //   stockName: props.stock_name,
            //   buyCount: tmpStock,
            // }
            {
                room_id: 'test_room',
                player_id: 'karockai',
                type: 'stock_buy',
                stock_name: 'A화학',
                ea: '2',
            }
        );
        props.socket.on('stock_buy_res', (response, player_info) => {
            handleClick();
            //@ pop up event,
        });
    }
    function Sell() {
        props.socket.emit('test', {
            comment:
                '_' +
                props.stock_name +
                '_ [' +
                tmpStock +
                '] 개의 주식의' +
                ' 매도 주문을 체결했습니다.',
        });
        //@ Sell 관련 backend 개발 이후에 추가할 예정
    }
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textfield
                    )}
                    style={{ margin: 'auto' }}
                >
                    <FormHelperText id="standard-weight-helper-text">
                        보유 주
                    </FormHelperText>
                    <Input
                        id="standard-adornment-weight"
                        value={tmpStock}
                        endAdornment={
                            <InputAdornment position="end">개</InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textfield
                    )}
                    style={{ margin: 'auto' }}
                >
                    <FormHelperText id="standard-weight-helper-text">
                        지불 금액
                    </FormHelperText>
                    <Input
                        id="standard-adornment-weight"
                        value={price * diffrence}
                        endAdornment={
                            <InputAdornment position="end">원</InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField
                    )}
                    style={{ margin: 'auto' }}
                >
                    <FormHelperText id="standard-weight-helper-text">
                        잔액
                    </FormHelperText>
                    <Input
                        id="standard-adornment-weight"
                        value={cash - price * diffrence}
                        endAdornment={
                            <InputAdornment position="end">원</InputAdornment>
                        }
                    />
                </FormControl>
            </form>
            <form className={classes.modal_arrow} noValidate autoComplete="off">
                <ArrowDropUpIcon
                    onClick={PlusArrow}
                    style={{ fontSize: '40px' }}
                />
                <ArrowDropDownIcon
                    onClick={MinusArrow}
                    style={{ fontSize: '40px' }}
                />
            </form>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    Buy(props.stock_name);
                }}
                style={{fontSize: '5vw'}}
            >
                매수
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    Sell(props.stock_name);
                }}
                style={{fontSize: '5vw'}}
            >
                매도
            </Button>
            <div className={classes.root}>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success">
                        매수 주문이 완료되었어요! 😍
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}
function StockMarket(props) {
    const marketCurrent = props.stock_list.map((stock, id) => {
        return (
            <StockRow
                socket={props.socket}
                className="stock"
                key={id}
                stock={stock}
                user={props.user}
            />
        );
    });
    return (
        <div className="animate-change">
            <p>StockMarket</p>
            <div>
                <Container>
                    <Row>
                        <Col>종목명</Col>
                        <Col>종목번호</Col>
                        <Col>현재가</Col>
                        <Col>id</Col>
                        <Col>분류</Col>
                    </Row>
                    {marketCurrent}
                </Container>
            </div>
        </div>
    );
}
export default StockMarket;
