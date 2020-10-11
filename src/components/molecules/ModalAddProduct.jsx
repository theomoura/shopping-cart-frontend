import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { sales, defaultImage } from '../../utils/constants';
import { validate } from '../../utils/product';
import { NumberFormatCustom } from '../atoms';

const useStyles = makeStyles({
  formControl: {
    minWidth: 200,
  },
});

const ModalAddProduct = ({ handleSave, handleClose, open }) => {
  const initalState = {
    title: '',
    price: 0,
    image: '',
    sale: sales[0],
  };
  const classes = useStyles();
  const [newProduct, setNewProduct] = useState(initalState);
  const [formErrors, setFormErros] = useState({
    title: false,
    price: false,
  });

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const clearForm = () => {
    setNewProduct(initalState);
  };

  const handleCloseModal = () => {
    handleClose();
    clearForm();
    setFormErros({
      title: false,
      price: false,
    });
  };

  const handleSaveModal = () => {
    const errors = validate(newProduct, setFormErros);

    if (Object.keys(errors).length === 0) {
      if (!newProduct.image) newProduct.image = defaultImage;
      handleSave(newProduct);
      handleClose();
      clearForm();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar novo produto</DialogTitle>
        <DialogContent>
          <DialogContentText>Adicione um novo produto á loja</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            name="title"
            error={formErrors.title}
            value={newProduct.title}
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Preço"
            name="price"
            error={formErrors.price}
            value={newProduct.price}
            fullWidth
            onChange={handleInputChange}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <TextField
            margin="dense"
            label="Url da imagem"
            name="image"
            value={newProduct.image}
            fullWidth
            onChange={handleInputChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel>Promoção</InputLabel>
            <Select
              name="sale"
              value={newProduct.sale}
              onChange={handleInputChange}>
              {sales.map((sale, index) => {
                return (
                  <MenuItem key={index} value={sale}>
                    {sale.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveModal} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAddProduct;
