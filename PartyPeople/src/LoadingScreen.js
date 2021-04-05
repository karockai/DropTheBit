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
            <div verticalAlign='middle' style={{height:'100vh'}}>
                {messages[0]}
            </div>
        </>
    );
}