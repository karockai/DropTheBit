import React from 'react';
import Button from '@material-ui/core/Button';

export default function Test() {
<<<<<<< HEAD
    const snackAlert = <SnackAlertFunc severity="info" message="안뇽!" />;
    return (
        <SnackbarProvider>
            <Button variant="contained" color="primary">
                {true && <SnackAlertFunc severity="info" message="안뇽!" />}; .
                {/* {() => {
                    console.log('안녕하세요..');
                    return <SnackAlertFunc severity="info" message="안뇽!" />;
                }} */}
            </Button>
        </SnackbarProvider>
    );
=======
  
>>>>>>> 60f645f88054fe8026fd924372e0bba1fa284d1e
}
