import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BidTab from './BidTab';
import BidTable from './BidTable';
import AskTable from './AskTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));



function TabControl(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [isBind, SetBind] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function HandleKeyUp(e) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();
        // if (props.socket == null || isBind === false) {
        //     props.requestSocket('TradeStock', props.socket);
        //     return;
        // }
        if (e.keyCode === 81) {
            //_ Q
            setValue(0);
        } else if (e.keyCode === 87) {
            //_ W
            setValue(1);
        } else if (e.keyCode === 69) {
            //_ E
            setValue(2);
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', HandleKeyUp);
        // document.addEventListener('keydown', HandleKeyDown);
        return () => {
            document.removeEventListener('keyup', HandleKeyUp);
            // document.removeEventListener('keydown', HandleKeyDown);
        };

    },);


    return (
        <div className={classes.demo2}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='"Q" 매수 주문 목록' {...a11yProps(0)} />
                    <Tab label='"W" 매도 주문 목록' {...a11yProps(1)} />
                    <Tab label='"E" 호가 목록' {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <BidTable
                    roomID={props.roomID}
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AskTable
                    roomID={props.roomID}
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BidTab
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                />
            </TabPanel>
        </div>
    );
}
export { TabPanel, TabControl};