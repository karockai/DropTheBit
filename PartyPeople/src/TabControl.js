import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BidTab from './BidTab';
import BidTable from './BidTable';
import AskTable from './AskTable';


const StyledTabs = withStyles({
    indicator: {
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-start",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 60,
        width: "100%",
        backgroundColor: "#635ee7"
      }
    }
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      color: "#fff",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.8vw',
      alignItems: 'center',
      maxWidth: '33%',
      "&:focus": {
        opacity: 1
      }
    },
    '& .MuiTab-root': {
        width: '33%',
    },
  }))((props) => <Tab disableRipple {...props} />);

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
                <Box p={3} style={{padding:'0', height:'100%'}}>
                    {children}
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
        flexGrow: 1
      },
      padding: {
      },
      demo1: {
        backgroundColor: theme.palette.background.paper
      },
      demo2: {
        backgroundColor: "#0C151C"
      }
    }));

export default function TabControl(props) {
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
    });

    return (
        <div className={classes.demo2}  style={{height:'100%'}}>
            <StyledTabs value={value} onChange={handleChange} style={{height:'10%', width:'100%'}}>
                <StyledTab label="[Q] 매수 주문" {...a11yProps(0)} />
                <StyledTab label="[W] 매도 주문" {...a11yProps(1)} />
                <StyledTab label="[E] 호가" {...a11yProps(2)} />
            </StyledTabs>
            <TabPanel value={value} index={0} style={{height:'90%'}}>
                <BidTable
                    roomID={props.roomID}
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                />
            </TabPanel>
            <TabPanel value={value} index={1} style={{height:'90%'}}>
                <AskTable
                    roomID={props.roomID}
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                />
            </TabPanel>
            <TabPanel value={value} index={2} style={{height:'90%'}}>
                <BidTab
                    socket={props.socket}
                    requestSocket={props.requestSocket}
                    style={{height: '100%'}}
                />
            </TabPanel>
        </div>
    );
}