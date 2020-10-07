import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../components/molecules';
import { ProductOrganism } from '../../components/organisms';
import {
  deleteProduct,
  editProduct,
  insertProduct,
} from '../../redux/actions/productAction';
import { insertToCart } from '../../redux/actions/cartAction';

const useStyles = makeStyles({
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 50,
  },
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const productList = useSelector((state) => state.product.products);
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);

  const handleSaveEdit = (index, obj) => {
    dispatch(editProduct(obj, index));
  };

  const handleDelete = (index) => {
    isEditing ? setOpenSnackbarError(true) : dispatch(deleteProduct(index));
  };

  const handleSaveNewProduct = (product) => {
    dispatch(insertProduct(product));
    setOpenSnackbarSuccess(true);
  };

  const handleBuy = (product) => {
    dispatch(insertToCart(product));
  };

  return (
    <div>
      <div className={classes.titleContainer}>
        <Typography variant="h4" gutterBottom color="textSecondary">
          Produtos
        </Typography>
      </div>
      <ProductOrganism
        productList={productList}
        handleSaveEdit={handleSaveEdit}
        handleDelete={handleDelete}
        handleSaveNewProduct={handleSaveNewProduct}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        openSnackbarSuccess={openSnackbarSuccess}
        openSnackbarError={openSnackbarError}
        setOpenSnackbarSuccess={setOpenSnackbarSuccess}
        setOpenSnackbarError={setOpenSnackbarError}
        handleBuy={handleBuy}
      />
    </div>
  );
};

export default Home;
