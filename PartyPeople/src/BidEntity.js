import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';




export default function BidTable(props) {
    const classes = useStyles(greenTheme);
    const testXs = 12;
    const [BidTable, setTable] = useState([]);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    useLayoutEffect(() => {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
        };
        props.socket.emit('bidTable_Req', reqJson);

        if (props.socket == null) {
            props.requestSocket('makeTableEntity', props.socket);
            setInit(true);
        } else {
            props.socket.on('bidTable_Res', (bidTable) => {
                setTable(bidTable);
            });
        }
    }, [isInit]);

    // for debugging

    // useEffect(() => {
    //     let reqJson = {
    //         socketID: props.socket.id,
    //         roomID: props.roomID,
    //     };

    //     props.socket.emit('bidTable_Req', reqJson);
    // }, [props]);

    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            {BidTable.map((bidTable) => {
                return (
                        <Paper
                            style={{ height: '4vh' }}
                            className={classes.paper}
                        >
                            <Grid container direction="row" alignItems="center">
                                <Grid
                                    style={{ width: '50%', height: '4vh' }}
                                    className="price"
                                >
                                    {bidTable.price}
                                </Grid>
                                <Grid
                                    style={{ width: '50%', height: '4vh' }}
                                    className="vol"
                                >
                                    {bidTable.vol}
                                </Grid>
                            </Grid>
                        </Paper>
                )
            )
}
