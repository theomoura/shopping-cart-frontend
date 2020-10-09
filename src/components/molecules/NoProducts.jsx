import React from 'react';
import { makeStyles } from '@material-ui/core';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import { Text } from '../atoms';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
});

function NoProducts() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ErrorOutline
        style={{ color: '#A9A9A9', width: 50, height: 50, paddingBottom: 10 }}
      />
      <Text variant={'h4'} textColor={'#A9A9A9'}>
        {'Não há produtos registrados :('}
      </Text>
      <Text variant={'h4'} textColor={'#A9A9A9'}>
        {'tente adicionar algum produto!'}
      </Text>
    </div>
  );
}

export default NoProducts;
