import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SnackbarCustom } from '../atoms';
import { ModalAddProduct, Product } from '../molecules';
import SaveIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  modalContainer: {
    maxWidth: 345,
    paddingTop: 30,
  },
  cardContainer: {
    paddingTop: 30,
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const ProductOrganism = ({
  handleSaveEdit,
  handleDelete,
  handleSaveNewProduct,
  productList,
  setIsEditing,
  isEditing,
  setOpenSnackbarSuccess,
  setOpenSnackbarError,
  openSnackbarSuccess,
  openSnackbarError,
  handleBuy,
}) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<SaveIcon />}
        color="primary"
        style={{ minWidth: 150 }}
        onClick={handleClickOpen}>
        Adicionar
      </Button>
      <div className={classes.container}>
        {productList.map((item, index) => {
          return (
            <div className={classes.cardContainer} key={index}>
              <Product
                image={item.image}
                title={item.title}
                price={item.price}
                sale={item.sale}
                index={index}
                handleSave={handleSaveEdit}
                handleDelete={handleDelete}
                productInEdtion={isEditing}
                setProductInEdtion={setIsEditing}
                handleErrorEditing={setOpenSnackbarError}
                handleBuy={handleBuy}
              />
            </div>
          );
        })}
        <div className={classes.modalContainer}>
          <ModalAddProduct
            open={openModal}
            handleClose={handleClickOpen}
            handleSave={handleSaveNewProduct}
          />
        </div>
        <SnackbarCustom
          open={openSnackbarSuccess}
          handleClose={() => setOpenSnackbarSuccess(false)}
          message={'Produto criado com sucesso!'}
          type={'success'}
        />
        <SnackbarCustom
          open={openSnackbarError}
          handleClose={() => setOpenSnackbarError(false)}
          message={'Ação inválida, um item está sendo editado!'}
          type={'error'}
        />
      </div>
    </div>
  );
};

export default ProductOrganism;
