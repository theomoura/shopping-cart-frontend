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
import { sales } from '../../utils/constants';
import { NumberFormatCustom } from '../atoms';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
}));

const ModalAddProduct = ({ handleSave, handleClose, open }) => {
  const initalState = {
    title: '',
    price: 0,
    image: '',
    sale: sales[0],
  };
  const classes = useStyles();
  const [newProduct, setNewProduct] = useState(initalState);

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    console.log(newProduct);
  };

  const clearForm = () => {
    setNewProduct(initalState);
  };

  const handleCloseModal = () => {
    handleClose();
    clearForm();
  };

  const handleSaveModal = () => {
    handleSave(newProduct);
    handleClose();
    clearForm();
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
            value={newProduct.title}
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Preço"
            name="price"
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
