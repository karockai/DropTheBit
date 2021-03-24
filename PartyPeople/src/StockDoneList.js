import React, {useEffect, useState, useLayoutEffect} from 'react'

export default function StockDoneList(props) {
    // socket ,  type (me , others), socket
    const [isInit, setInit] = useState(false);
    const [doneList, setList] = useState([{
        playerID: 'ID',
        vol: 0,
        price: 0,
        type: 'buy'
    }]);


    if(!isInit) setInit(true);

    useEffect(() => {
        if(props.socket == null) {
            props.requestSocket('StockDoneList', props.socket);
            setInit(true);
        }
        else {
            if(!props.isMine){
                props.socket.on('buyDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.on('sellDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.on('bidDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.on('askDone_Room', (done => {
                    setList([...doneList, done]);
                }))
            }
            props.socket.on('buyDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.on('sellDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.on('bidDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.on('askDone', (done => {
                setList([...doneList, done]);
            }))
        }
    },[isInit])

    console.log(doneList)

    return (
        <>
            {
                doneList.map((done, idx)=>{ return (
                <p>
                        {props.isMine? "내" : done.playerID}가 {done.price}에 {done.vol}개를 {done.type}하셨습니다.
                </p>
                )})
            }
        </>
    );
}