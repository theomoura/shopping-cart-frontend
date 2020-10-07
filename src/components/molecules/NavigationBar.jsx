import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import { Icon } from '../atoms';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  productLink: {
    marginLeft: 30,
  },
  linkContainer: {
    display: 'flex',
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    padding: '0 4px',
    color: 'white',
    '& .MuiIconButton-root': {
      color: 'white',
    },
  },
}))(Badge);

function NavigationBar() {
  const history = useHistory();
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div className={classes.linkContainer}>
            <Avatar alt="logo" src={require('../../assets/images/logo.jpg')} />
            <Button
              className={classes.productLink}
              color="inherit"
              onClick={() => history.push('/')}>
              Produtos
            </Button>
          </div>
          <div>
            <IconButton aria-label="cart" onClick={() => history.push('/cart')}>
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon style={{ color: 'white' }} />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
