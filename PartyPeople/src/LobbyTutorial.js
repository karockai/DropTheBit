import { React, useEffect, useState } from 'react';
import { Grid, } from '@material-ui/core';

export default function LobbyTutorial(props) {
    return (
        <Grid container direction='column' className="튜토리얼그리드" style={{height: '80vh', width: '40vw'}}>
            <Grid item className="tuto-title" style={{width:'100%',height:'20%'}}>
                타이틀
            </Grid>
            <Grid item className="tuto-image" style={{width:'100%',height:'50%'}}>
                이미지
            </Grid>
            <Grid item className="tuto-content" style={{width:'100%',height:'20%'}}>
                컨텐츠
            </Grid>
            <Grid item className="tuto-pagenation" style={{width:'100%',height:'10%'}}>
                페이지네이션
            </Grid>
        </Grid>
    );

}