import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Add';

import { ProductOrganism } from '../../components/organisms';
import {
  deleteProduct,
  editProduct,
  insertProduct,
  changeRequestError,
  retrieveProducts,
} from '../../redux/actions/productAction';
import { insertToCart } from '../../redux/actions/cartAction';
import { Loading, SnackbarCustom, Text } from '../../components/atoms';
import { ProductMessages } from '../../components/molecules';

const useStyles = makeStyles({
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const productList = useSelector((state) => state.product.products);
  const errorRequest = useSelector((state) => state.product.error);
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [openSnackbarBuy, setOpenSnackbarBuy] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(retrieveProducts()).then((_) => {
      setLoading(false);
    });
  }, []);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  const handleSaveEdit = (index, obj) => {
    dispatch(editProduct(obj, index));
  };

  const handleDelete = (index, id) => {
    isEditing ? setOpenSnackbarError(true) : dispatch(deleteProduct(index, id));
  };

  const handleSaveNewProduct = (product) => {
    dispatch(insertProduct(product));
    setOpenSnackbarSuccess(true);
  };

  const handleBuy = (product) => {
    dispatch(insertToCart(product));
    setOpenSnackbarBuy(true);
  };

  return (
    <div>
      <div className={classes.titleContainer}>
        <div>
          <Text variant="h5" color="textSecondary" bold>
            Produtos
          </Text>
        </div>
        <div>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            color="primary"
            style={{ minWidth: 150 }}
            onClick={handleClickOpen}>
            Adicionar
          </Button>
        </div>
      </div>
      <Loading loading={loading} />
      <ProductOrganism
        productList={productList}
        handleSaveEdit={handleSaveEdit}
        handleDelete={handleDelete}
        handleSaveNewProduct={handleSaveNewProduct}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleBuy={handleBuy}
        openModal={openModal}
        handleClickOpen={handleClickOpen}
        setOpenSnackbarError={setOpenSnackbarError}
      />
      <ProductMessages
        openSnackbarError={openSnackbarError}
        setOpenSnackbarError={() => setOpenSnackbarError(false)}
        openSnackbarSuccess={openSnackbarSuccess}
        setOpenSnackbarSuccess={() => setOpenSnackbarSuccess(false)}
        openSnackbarBuy={openSnackbarBuy}
        setOpenSnackbarBuy={() => setOpenSnackbarBuy(false)}
        errorRequest={errorRequest}
        setErrorRequest={() => dispatch(changeRequestError(false))}
      />
    </div>
  );
};

export default Home;
