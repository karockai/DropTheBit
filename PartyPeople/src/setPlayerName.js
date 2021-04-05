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
import './ShiningButton.css';
import './index.css'

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
            color: '#CDD7E0',
            fontSize: '0.9vw',
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

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleOnSave(e);
        }
    };

    const handleChange = (event) => {
        setTemp(event.target.value);
    };

    const handleOnSave = (event) => {
        if (tmp != '') {
            event.preventDefault();
            props.onSave(tmp, 0);
        }
    };

    const handleOnSave2 = (event) => {
        if (tmp != '') {
            event.preventDefault();
            props.onSave(tmp, 1);
        }
    };
    let buttonMsg = 'Create Private Room';
    let publicButton = 'Join Public Room';
    if (searchParams.has('id')) {
        // 초대링크 받아서 온 사람
        buttonMsg = 'Join Room';

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
                            label="인게임 닉네임 (5자 제한)"
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
                            inputProps={{ maxLength: 5 }}
                        />
                    </Grid>

                    <Grid item container direction="column" justify="center" alignItems="center">
                        <button
                            onClick={handleOnSave}
                            style={{ width: '50vh', height: '7vh' }}
                        >
                            {buttonMsg}
                        </button>
                    </Grid>
                </Grid>
            </>
        );
    } else {
        buttonMsg = 'Create Private Room';

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
                            placeholder="인게임 닉네임 (5자 제한)"
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
                            // ref={nameInput}
                            autoFocus
                            onKeyPress={onKeyPress}
                            inputProps={{ maxLength: 5 }}
                        />
                    </Grid>

                    <Grid item container direction="row" justify="center" alignItems="center">
                        <button
                            class="start"
                            onClick={handleOnSave}
                            style={{ width: '50vh', height: '7vh' }}
                        >
                            {buttonMsg}
                        </button>
                        <Grid style={{padding:"0.3vh"}}>    
                        </Grid>

                        <button
                            class="start"
                            onClick={handleOnSave2}
                            style={{ width: '50vh', height: '7vh' }}
                        >
                            {publicButton}
                        </button>
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default withRouter(SetPlayerName);
