import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    height: '100vh',
  },
});

function Loading({ loading }) {
  const classes = useStyles();
  return (
    <>
      {loading && (
        <div className={classes.container}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default Loading;
