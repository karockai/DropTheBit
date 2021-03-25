import { Grid, GridList } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'

export default function StockDoneList(props) {
    // socket ,  type (me , others), socket
    const [doneList, setList] = useState([]);

    const scroll = useRef(null);

   
    const scrollToBottom = () => {
        const { scrollHeight, cleintHeight } = scroll.current;
        scroll.current.scrollTop = scrollHeight - cleintHeight;
    }

    useEffect(() => {
        scrollToBottom();
        if(props.socket == null) {
            props.requestSocket('StockDoneList', props.socket);
        }
        else {
            if(!props.isMine){
                props.socket.once('buyDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.once('sellDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.once('bidDone_Room', (done) => {
                    setList([...doneList, done]);
                })
                props.socket.once('askDone_Room', (done => {
                    setList([...doneList, done]);
                }))
            }
            props.socket.once('buyDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.once('sellDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.once('bidDone', (done) => {
                setList([...doneList, done]);
            })
            props.socket.once('askDone', (done => {
                setList([...doneList, done]);
            }))
        }
    },)
 

    return (
        <GridList spacing={1} wrap='wrap' style={{ width: '100%' ,height: '100%' }}>
            {
                <Grid style={{ width: '100%'}}>
                    <div ref={scroll} >
                    {doneList.map((done, idx)=>{ 
                    let buySellColor = {color: done.type.substring(0,2) === '매수' ? red[300] : blue[300]}
                    return (
                        <pre>
                            {props.isMine? "내" : done.playerID}가(이) <span style={{ fontWeight:'bold'}}>"{done.price}"</span> 에 [ {done.vol} ] 개를 <span style={ buySellColor }>{done.type}.</span> 
                        </pre>
                        )
                    })}
                    </div>
                </Grid>
            }
        </GridList>
    );
}