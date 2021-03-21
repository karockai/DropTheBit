import React, { useState } from "react";
import { render } from "react-dom";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import { Tabs, Tab, Button } from "@material-ui/core";
import { makeStyles,withStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     tabs: {
//         '& > *': {
//             margin: theme.spacing(1),
//           },
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));
// export default function BidTabs() {
//     const classes=useStyles();
//     return(
//         <div className={classes.tabs}>
//             <Button color="primary">전체 호가</Button>
//             <Button disabled>방 호가</Button>
//             <Button disabled>내 호가</Button>
//         </div>
//     );
// }

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center"
  },
  scroller: {
    flexGrow: "0"
  }
});

const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(3),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

const TabsContainer = () => {
  const classes = useTabStyles();

  const cities = [
    "전체 호가",
    "방 호가",
    "나의 호가",
  ];

  const [active, setActive] = useState(cities[0]);

  return (
    <Tabs
      classes={{ root: classes.root, scroller: classes.scroller }}
      value={active}
      onChange={(event, newValue) => {
        setActive(newValue);
      }}
      indicatorColor="primary"
      textColor="primary"
      // variant={"scrollable"}
    //   scrollButtons={"on"}
    >
      {cities.map((city, index) => (
        <AntTab key={index} label={city} value={city} />
      ))}
    </Tabs>
  );
};

export default function BidTab() {
  return (
    <MuiThemeProvider>
      <TabsContainer />
    </MuiThemeProvider>
  );
};

// render(<App />, document.getElementById("root"));