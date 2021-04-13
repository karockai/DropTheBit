import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { Fab, Grid, Paper, makeStyles } from '@material-ui/core';
import './PortfolioManager.css';

class PortfolioManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            evalMoney: 0,
            lastMoney: 0,
            stockList: Array(5).fill({
                name: null,
                purchase: 0,
                amount: 0,
                yield: 0,
            }),
        };
    }

    initData() {}

    render() {
        return <p></p>;
    }
}
