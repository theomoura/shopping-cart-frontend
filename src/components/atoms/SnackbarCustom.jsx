import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';

function SnackbarCustom({ open, message, type, handleClose = () => {} }) {
  let openBar = open;
  return (
    <>
      <Snackbar open={openBar} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={type}>
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default SnackbarCustom;
