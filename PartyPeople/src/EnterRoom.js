import React, { useState } from 'react';
import { Button, Fab, Grid, Paper, makeStyles } from '@material-ui/core';
// import Lobby from 'Lobby';

export default function MakeRoom() {

    let buttonMsg ='Create Private Room';
    return(
        <Button color="primary">
            {buttonMsg}
        </Button>
    );
}