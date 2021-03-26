import { Grid, GridList } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'

export default function StockDoneList(props) {
    // socket ,  type (me , others), socket
    const [doneItem, setItem] = useState(null);
    const [doneList, setList] = useState([]);
    const scroll = useRef(null);

   
    const scrollToBottom = () => {
        const { scrollHeight, cleintHeight } = scroll.current;
        scroll.current.scrollTop = scrollHeight - cleintHeight;
    }

    
    useEffect(() => {
        if(props.socket == null) {
            props.requestSocket('StockDoneList', props.socket);
        }
        else {
            if(!props.isMine){
                props.socket.on('buyDone_Room', (done) => {
                    setItem(done);
                })
                props.socket.on('sellDone_Room', (done) => {
                    setItem(done);
                })
                props.socket.on('bidDone_Room', (done) => {
                    setItem(done);
                })
                props.socket.on('askDone_Room', (done) => {
                    setItem(done);
                })
            }
            props.socket.on('buyDone', (done) => {
                console.log('매수가 체결되었습니다.')
                setItem(done);
            })
            props.socket.on('sellDone', (done) => {
                console.log('매도가 체결되었습니다.')
                setItem(done);
            })
            props.socket.on('bidDone', (done) => {
                console.log('등록된 호가에 매수가 체결되었습니다.')
                setItem(done);
            })
            props.socket.on('askDone', (done) => {
                console.log('등록된 호가에 매도가 체결되었습니다.')
                setItem(done);
            })
        }
    },[])
    
    useEffect(() => {
        setList([...doneList, doneItem]);
    }, [doneItem])

    console.log(doneList)

    return (
        <GridList spacing={1} wrap='wrap' style={{ width: '100%' ,height: '100%' }}>
            {
                <Grid style={{ width: '100%'}}>
                    <div ref={scroll} >
                    {doneList.map((done, idx)=>{ 
                        if(done === null) return;    
                        let buySellColor = {color: done.type.substring(0,2) === '매수' ? red[300] : blue[300]}
                        return (
                            <pre>
                                {props.isMine? '' : (done.playerID +'이(가)')} <span style={{ fontWeight:'bold'}}>"{done.price}"</span> 에 [ {done.vol} ] 개를 <span style={ buySellColor }>{done.type}.</span> 
                            </pre>
                            )
                    })}
                    </div>
                </Grid>
            }
        </GridList>
    );
}