import React from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';

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
        props.onClick();
        // variant could be success, error, warning, info, or default
        if (props.onAlert) {
            enqueueSnackbar(props.message, {
                variant,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
                autoHideDuration: 700,
            });
        }
    };

    return (
        <>
            <Button
                class={props.class}
                onClick={handleClickVariant(props.severity)}
            >
                {props.label}
            </Button>
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
export function SnackAlertFunc(props) {
    const { enqueueSnackbar } = useSnackbar();
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(props.message, {
        variant: props.severity,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        autoHideDuration: 1000,
    });
    return (<></>);
}
