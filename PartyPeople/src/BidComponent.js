import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import stock_list from './stock.json'
import user_list from './user.json'

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

export default function BidComponent(props) {
    return (
        <>
        <StyledTableRow key={props.stock_name}>
          <StyledTableCell component="th" scope="row">
            {object.stock_name}
          </StyledTableCell>
          <StyledTableCell align="right">{object.purchase_amount}</StyledTableCell>
          <StyledTableCell align="right">{object.number}</StyledTableCell>
          <StyledTableCell align="right">{object.curr_price}</StyledTableCell>
          <StyledTableCell align="right">{object.yield_amount}</StyledTableCell>
        </StyledTableRow>
        </>
    )
}