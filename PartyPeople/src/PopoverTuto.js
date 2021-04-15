import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import mark from './images/question.png';

export default function PopoverTuto(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
        <>
        <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
              style : {
                  fontSize: '5vw'
              }
            }}

            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<h5 style={{fontSize:'1vw', fontFamily:'NEXON Lv1 Gothic OTF'}}>{props.content}</h5>}
          >
            <button style={{padding:'0', margin:'0', border:'none'}} onClick={handleTooltipOpen}><img style={{height:'30%', width:'30%'}} src={mark} alt="궁금해요?"/></button>
          </Tooltip>
        </div>
      </ClickAwayListener>
      </>
    );
}