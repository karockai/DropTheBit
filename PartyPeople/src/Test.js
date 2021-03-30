import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider } from 'notistack';
import { SnackAlertFunc } from './SnackAlert';

export default function Test() {
  
  const snackAlert = <SnackAlertFunc severity="info" message="안뇽!" />;
    return (
        <SnackbarProvider>
            <Button variant="contained" color="primary">
                  {true && <SnackAlertFunc severity="info" message="안뇽!" />};
                .
                {/* {() => {
                    console.log('안녕하세요..');
                    return <SnackAlertFunc severity="info" message="안뇽!" />;
                }} */}
            </Button>
        </SnackbarProvider>
    );
}
