import React from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import {PurpleButton, PurpleSwitch} from './PurpleComponent';
//@ 5 params
//? ------- props -----------------------------
//? {
//?     onAlert = 조건문.
//?     severity = [error, warning, info, success]
//?     message = "스낵메세지"
//?     label = "버튼라벨"
//?     class = ex "btn btn-warning"
//?     onClick = ...
//? }
//? -------------------------------------------




export function SnackAlertBtn(props) {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        console.log('btn 수행한다.')
        props.onClick();
        // variant could be success, error, warning, info, or default
        if (props.onAlert) {
            enqueueSnackbar(props.message, {
                variant,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                autoHideDuration: 1500,
            });
        }
    };

    return (
        <>
            <PurpleButton
                className={props.class}
                onClick={handleClickVariant(props.severity)}
            >
                {props.label}
            </PurpleButton>

        </>
    );
}

//@ 2 params
//? ------- props -----------------------------
//? {
//?     severity = [error, warning, info, success]
//?     message = "스낵메세지"
//? }
//? -------------------------------------------
let index = 0;
export function SnackAlertFunc(props) {
    const { enqueueSnackbar } = useSnackbar();
    // variant could be success, error, warning, info, or default
    const callback = () => {
        enqueueSnackbar(props.message, {
            variant: props.severity,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
            autoHideDuration: 1500,
            preventDuplicate: true
        }); 
    }
    callback();
    return <></>;
}