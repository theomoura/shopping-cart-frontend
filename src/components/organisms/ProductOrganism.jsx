import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ModalAddProduct, NoProducts, Product } from '../molecules';

const useStyles = makeStyles({
  modalContainer: {
    maxWidth: 345,
    paddingTop: 30,
  },
  cardContainer: {
    padding: 10,
    display: 'flex',
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
  setOpenSnackbarError,
  handleBuy,
  openModal,
  handleClickOpen,
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {productList.length === 0 && <NoProducts />}
        {productList.map((item, index) => {
          return (
            <div className={classes.cardContainer} key={index}>
              <Product
                product={item}
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
      </div>
    </div>
  );
};

export default ProductOrganism;
