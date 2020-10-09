import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { formatCurrency } from '../../utils/cart';
import { ShoppingBasket } from '@material-ui/icons';
import { Text } from '../atoms';

const useStyles = makeStyles({
  container: {
    background: '#eee',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    paddingBottom: 10,
  },
});

function CartSummaryOrganism({ total, numProdutos }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Text variant="h6" color="textPrimary" bold>
          resumo do pedido
        </Text>
      </div>
      <div>
        <Text variant="body2" color="textPrimary">
          {numProdutos} produtos
        </Text>
        <Text variant="subtitle1" color="textPrimary" bold>
          total:
        </Text>
        <Text variant="subtitle1" color="textPrimary">
          {formatCurrency(total)}
        </Text>
      </div>
      <div className={classes.button}>
        <Button
          style={{ width: '100%', height: 45 }}
          variant="contained"
          color="primary">
          <ShoppingBasket style={{ paddingRight: 15 }} />
          Continuar
        </Button>
      </div>
    </div>
  );
}

export default CartSummaryOrganism;
