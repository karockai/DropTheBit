import {React, useState, useEffect} from 'react';

const messages = [
    '연결을 위한 포트를 찾는 중..',
    'DJ가 적절한 음악을 고르는 중..',
    '로딩 중..',
    '드럼 스틱 찾는 중..',
    '기타 줄을 조율 중..',
]



export default function LoadingScreen (props) {
    return (
        <>
            <div verticalAlign='middle' style={{height:'100vh', fontSize:'5vh',  lineHeight: '50vh',
  textAlign: 'center'}}>
                <span style={{  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: 'normal'}}>{'[16 : 9] 가로 화면으로 플레이 가능해요 😤'}</span>
            </div>
        </>
    );
}