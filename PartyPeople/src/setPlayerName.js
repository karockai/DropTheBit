import React, { useState, useRef, useEffect, } from 'react';

import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
    withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import Logo from './images/Logo.png';
import { PurpleButton } from './PurpleComponent';
import { SnackAlertBtn } from './SnackAlert';
import { SnackbarProvider } from 'notistack';
import './ShiningButton.css';
import './index.css';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#CDD7E0',
        },
        '& .MuiInputLabel-root': {
            color: '#CDD7E0',
            fontSize: '0.8vw',
        },
        '& .MuiInputBase-input': {
            width: '15vw',
            opacity: 0.8,
            backgroundColor: '#000000',
            color: '#CDD7E0',
            fontSize: '0.9vw',
            size:"large"
        },
        '& .MuiInputBase-formControl': {
            color: '#CDD7E0',
            fontSize: '0.9vw',
            height: '100%',
        },
        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'white',
        //   },
        //   '& .MuiInput-underline:before': {
        //     borderBottomColor: 'white',
        //   },
        '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': {
                color: '#CDD7E0',
            },
            '& .MuiInputLabel-root': {
                color: '#CDD7E0',
                fontStyle: 'italic',
            },
            '& fieldset': {
                borderColor: '#2D4053',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#635ee7',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    input: {
        color: 'white',
    },
}));
function SetPlayerName(props) {
    const title = 'DROP THE BIT'
    const classes = useStyles();
    const params = window.location
        .toString()
        .substring(window.location.toString().indexOf('?'));
    const searchParams = new URLSearchParams(params);
    const [tmp, setTemp] = React.useState('');
    const [isEmpty, setIsEmpty] = React.useState(false);
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleOnSave(e);
        }
    };

    const handleChange = (event) => {
        setTemp(event.target.value);
    };

    const handleOnSave = (event) => {
        if(tmp === '') {
        }
        if (tmp !== '') {
            // event.preventDefault();
            props.onSave(tmp, 0);
        }
    };
    useEffect(()=> {
        setIsEmpty(tmp === '');
    }, [tmp]);

    const handleOnSave2 = (event) => {
        if (tmp === '') {
        }
        if (tmp !== '') {
            // event.preventDefault();
            props.onSave(tmp, 1);
        }
    };
    let buttonMsg = '친구들과 즐기기';
    let publicButton = '사람들과 즐기기';
    if (searchParams.has('id')) {
        // 초대링크 받아서 온 사람
        buttonMsg = '함께하기';

        return (
            <>
                <Grid
                    container
                    justify={'center'}
                    alignItems={'center'}
                    // spacing={2}
                    direction="column" 
                    style={{ width: '100vw', height: '100vh' }}
                >
                    <Grid style={{ position: 'relative'}}>
                        <div class="title">
                        {title}
                        </div>
                        <div class="title_overlay">
                        {title}
                        </div>
                        <div class="title_overlay2">
                        {title}
                        </div>
                    </Grid>
                    <Grid style={{ margin: '4vh' }} item>
                        <CssTextField
                            id="form-control text-center fw-bold bg-transparent"
                            label="인게임 닉네임 (10자 제한)"
                            inputRef={props.textInput}
                            onChange={handleChange}
                            variant="outlined"
                            size="medium"
                            InputProps={{
                                className: classes.input,
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            autoFocus
                            onKeyPress={onKeyPress}
                            inputProps={{ maxLength: 10 }}
                        />
                    </Grid>

                    <Grid item container direction="column" justify="center" alignItems="center">
                    <SnackbarProvider maxSnack={1}>
                        <SnackAlertBtn
                            class="start"
                            severity="success"
                            message="닉네임을 입력해주세요."
                            label={buttonMsg}
                            onAlert={isEmpty}
                            type="button"
                            onClick={handleOnSave}
                            id="copy"
                            // style={{ width: '50vh', height: '7vh' }}
                            width="25vw"
                            height="7vh"
                        />
                    </SnackbarProvider>
                    </Grid>
                </Grid>
            </>

        );
    } else {
        buttonMsg = '친구들과 즐기기';

        return (
            <>
                <Grid
                    container
                    justify={'center'}
                    alignItems={'center'}
                    direction="column"
                    style={{ width: '100vw', height: '100vh' }}
                >
                    <Grid style={{ position: 'relative'}}>
                        {/* <div class="title">
                        {title}
                        </div> */}
                        {/* <div class="title_overlay">
                        {title}
                        </div> */}
                        <div class="title_overlay2">
                        {title}
                        </div>
                    </Grid>
                    <Grid style={{ margin: '4vh' }} item>
                        <CssTextField
                            id="form-control text-center fw-bold "
                            placeholder="인게임 닉네임 (10자 제한)"
                            inputRef={props.textInput}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                className: classes.input,
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            // ref={nameInput}
                            autoFocus
                            onKeyPress={onKeyPress}
                            inputProps={{ maxLength: 10 }}

                        />
                    </Grid>

                    <Grid item container direction="column" justify="center" alignItems="center" style={{ padding:'5vh 0 0 0'}}>

                        <Grid style={{padding:"0.3vh"}}>
                            <SnackbarProvider maxSnack={1}>
                            <SnackAlertBtn
                                class="start"
                                severity="success"
                                message="닉네임을 입력해주세요."
                                label={buttonMsg}
                                onAlert={isEmpty}
                                type="button"
                                onClick={handleOnSave}
                                id="copy"
                                width="25vw"
                            height="7vh"
                            />
                        </SnackbarProvider>    
                        </Grid>

                        <SnackbarProvider maxSnack={1}>
                        <SnackAlertBtn
                            class="start"
                            severity="success"
                            message="닉네임을 입력해주세요."
                            label={publicButton}
                            onAlert={isEmpty}
                            type="button"
                            onClick={handleOnSave2}
                            id="copy"
                            width="25vw"
                            height="7vh"
                            margin="0.5vw"
                            // padding="1vw"
                        />
                    </SnackbarProvider>
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default withRouter(SetPlayerName);


{/* <button
class="start"
onClick={handleOnSave}
style={{ width: '50vh', height: '7vh'}}
>
{buttonMsg}
</button> */}