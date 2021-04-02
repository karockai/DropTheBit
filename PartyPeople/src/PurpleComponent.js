import { Button, Switch } from '@material-ui/core';
import { purple, yellow } from '@material-ui/core/colors';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const PurpleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    // backgroundColor: purple[500],
    backgroundColor: 'rgba(89, 32, 146, 0.37)',
    '&:hover': {
      // color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[700],
    },
  },
}))(Button);

const PurpleSwitch = withStyles({
  switchBase: {
    color: yellow[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export {PurpleButton, PurpleSwitch};