import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/atoms';
import {
  CartListOrganism,
  CartSummaryOrganism,
} from '../../components/organisms';
import useDevice from '../../hooks/useDevice';
import {
  deleteFromCart,
  editCartQuantity,
} from '../../redux/actions/cartAction';

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
  },
  titleContainer: {
    paddingBottom: 30,
  },
  contentContainer: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
  }),
  listContainer: (isMobile) => ({
    display: 'flex',
    flex: 2,
    paddingRight: !isMobile && 20,
    paddingBottom: isMobile && 20,
  }),
  summaryContainer: {
    display: 'flex',
    flex: 1,
    height: 300,
  },
});

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { mobile } = useDevice();
  const classes = useStyles(mobile);
  const dispatch = useDispatch(mobile);

  const handleChangeQuantity = (index, increment) => {
    dispatch(editCartQuantity(index, increment));
  };

  const handleDelete = (index) => {
    dispatch(deleteFromCart(index));
  };

  const totalNumProdutos = () => {
    if (cart.cart.length !== 0) {
      return cart.cart.reduce((increment, item) => {
        return increment + item.quantity;
      }, 0);
    }
    return 0;
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Text variant="h5" color="textSecondary">
          Meu carrinho
        </Text>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.listContainer}>
          <CartListOrganism
            cartList={cart.cart}
            handleChangeQuantity={handleChangeQuantity}
            handleDelete={handleDelete}
          />
        </div>
        <div className={classes.summaryContainer}>
          <CartSummaryOrganism
            total={cart.total}
            numProdutos={totalNumProdutos()}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
