import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import stock_list from './stock.json';
import user_list from './user.json';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// ! stock_list, stock에서 받아온 json을 파싱해서 새로운 object파일 만듬
function createData(stock_name, purchase_amount, number, curr_price) {
    const yield_amount = (curr_price - purchase_amount) * 100;
    return { stock_name, purchase_amount, number, curr_price, yield_amount };
}

// ! 한 줄에 표시되는 정보 만듬
function CreateLine() {
    // 유저명, 총 평가금액, 작년 대비 이익(+수익률)
    // 종목명, 매입금액 ,주식수, 현재금액, 수익률

    let [stockList, setStockList] = useState(stock_list);
    let tmpTable = [...stockList]; // deepcopy

    for (let idx = 0; idx < 10; ++idx) {
        tmpTable[idx] = createData(
            stockList[idx]['stock_name'],
            30, //'구매했을때의 평균가격(아직구현X)'
            stockList[idx]['upDownRate'],
            stockList[idx]['curr_price']
        );
    }

    // setStockList(tmpTable);
    console.log(tmpTable);

    return (
        <>
            {tmpTable.map((object) => (
                <StyledTableRow key={object.stock_name}>
                    <StyledTableCell component="th" scope="row">
                        {object.stock_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {object.purchase_amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {object.number}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {object.curr_price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {object.yield_amount}
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    );
}
// users.map((user, idx) => {
//   userProfile[idx] = (<Row>
//       <PlayerProfileCard onClick={this.yonggi} name={user.name} winRate={user.winRate} point={user.point} money={user.money} gain={user.gain} />
//   </Row>)
// })
// const rows = [
//   createData('B엔터', '3,000', 100, '30,000', 4.0),
//   createData('F바이오', '2,000', 10, '2,000', 4.3),
//   createData('H뷰티', '100,000', 1, '120,000', 6.0),
//   createData('I화학', '40,000', 2, '30,000', 4.3),
// ];

const useStyles = makeStyles((theme) => ({
    table: {
        // minWidth: 700,
    },
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

function UserName() {
    const classes = useStyles();
    const userName = '김용기';
    return <div className={classes.root}>{userName + '님의 계좌 잔고'}</div>;
}

const currTotal = 5900000;
const lastTotal = 3200000;
const profitAmount = currTotal - lastTotal;
// const profitRate = currTotal / lastTotal;
const profitRate = 5.4;

function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer className="animate-change" component={Paper}>
            <UserName />
            <Table>
                <TableRow>
                    <TableCell>총 평가금액</TableCell>
                    {/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell> */}
                    <TableCell style={{ fontSize: 30 }} align="right">
                        {currTotal}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>작년대비</TableCell>
                    <TableCell align="right">
                        {'+' +
                            profitAmount +
                            '(+' +
                            `${(profitRate * 100).toFixed(0)} %)`}
                    </TableCell>
                    {/* <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> */}
                </TableRow>
            </Table>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>종목명</StyledTableCell>
                        <StyledTableCell align="right">
                            매입금액
                        </StyledTableCell>
                        <StyledTableCell align="right">주식수</StyledTableCell>
                        <StyledTableCell align="right">
                            현재금액
                        </StyledTableCell>
                        <StyledTableCell align="right">수익률</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <CreateLine />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTables;
