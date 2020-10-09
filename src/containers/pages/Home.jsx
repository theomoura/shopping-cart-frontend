import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Add';

import { ProductOrganism } from '../../components/organisms';
import {
  deleteProduct,
  editProduct,
  insertProduct,
} from '../../redux/actions/productAction';
import { insertToCart } from '../../redux/actions/cartAction';
import { SnackbarCustom, Text } from '../../components/atoms';

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
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [openSnackbarBuy, setOpenSnackbarBuy] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

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
      />
      <SnackbarCustom
        open={openSnackbarError}
        handleClose={() => setOpenSnackbarError(false)}
        message={'Ação inválida, um item está sendo editado!'}
        type={'error'}
      />
      <SnackbarCustom
        open={openSnackbarSuccess}
        handleClose={() => setOpenSnackbarSuccess(false)}
        message={'Produto criado com sucesso!'}
        type={'success'}
      />
      <SnackbarCustom
        open={openSnackbarBuy}
        handleClose={() => setOpenSnackbarBuy(false)}
        message={'Item adicionado ao carrinho!'}
        type={'success'}
      />
    </div>
  );
};

export default Home;
