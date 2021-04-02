import React, {
    useState,
    useRef,
    useEffect,
    makeStyle,
    useLayoutEffect,
} from 'react';
import {
    IconButton,
    Button,
    Box,
    TextField,
    Grid,
    Paper,
    withStyles,
    makeStyles,
    GridList,
} from '@material-ui/core';
import './ShiningButton.css'

function YellowShiningButton (props) {
    return(
        <>
            <button class="pulse">{props.text}</button>
        </>
    );
}
// function YellowShiningButton () {
//     return(
//         <>
//             <button class="pulse">Pulse</button>
//         </>
//     );
// }

export {YellowShiningButton};
