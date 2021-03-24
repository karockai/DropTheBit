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

    useLayoutEffect(() => {
        console.log('stockdoneList opened!')
        if(props.socket == null) {
            props.requestSocket('StockDoneList', props.socket);
            setInit(true);
        }
        else {
            if(props.isMine){
                props.socket.on('buyDone', (done) => {
                    setList([...doneList, done]);
                })
            }
            else {
                props.socket.on('buyDone_Room', (done) => {
                    setList([...doneList, done]);
                })
            }
        }
    },[isInit])

    console.log(doneList)

    return (
        <>
            {
                doneList.map((done, idx)=>{ return (
                <p>
                        {props.isMine? "내" : done.playerID}가 {done.price}에 {done.vol}개를 {done.type === 'buy'? "구매": "판매"}하셨습니다.
                </p>
                )})
            }
        </>
    );
}