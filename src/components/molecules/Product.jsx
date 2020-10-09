import { IconButton, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { NumberFormatCustom } from '../atoms';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  actionContainer: {
    justifyContent: 'space-between',
  },
});

const Title = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'black',
    },
    '& .MuiInput-underline.Mui-disabled:before': {
      borderBottom: 0,
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
})(TextField);

const Price = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'gray',
      marginTop: 10,
    },
    '& .MuiInput-underline.Mui-disabled:before': {
      borderBottom: 0,
    },
  },
})(TextField);

const Product = ({
  product,
  index,
  handleSave,
  handleDelete,
  productInEdtion,
  setProductInEdtion,
  handleErrorEditing,
  handleBuy,
}) => {
  const [edit, setEdit] = useState(false);
  const { title, price, image } = product;
  const [productObj, setProductObj] = useState({
    title,
    price,
    image,
    ...product,
  });
  const classes = useStyles();

  const handleInputChange = (event) => {
    setProductObj({ ...productObj, [event.target.name]: event.target.value });
  };

  const saveProduct = () => {
    if (edit) {
      handleSave(index, productObj);
      setEdit(!edit);
      setProductInEdtion(false);
    } else {
      if (productInEdtion) {
        handleErrorEditing(true);
      } else {
        setProductInEdtion(true);
        setEdit(!edit);
      }
    }
  };

  const buyProduct = () => {
    if (productInEdtion) {
      handleErrorEditing(true);
    } else {
      handleBuy(productObj);
    }
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Title
              name={'title'}
              value={productObj.title}
              disabled={!edit}
              onChange={handleInputChange}
            />
            <Price
              name={'price'}
              value={productObj.price}
              disabled={!edit}
              onChange={handleInputChange}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actionContainer}>
          <div>
            <Button size="small" color="primary" onClick={saveProduct}>
              {edit ? 'Salvar' : 'Editar'}
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleDelete(index, product._id)}>
              Deletar
            </Button>
          </div>
          <div>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={buyProduct}>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
