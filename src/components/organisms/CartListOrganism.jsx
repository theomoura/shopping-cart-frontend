import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Add, Remove, Delete } from '@material-ui/icons';

import { formatCurrency } from '../../utils/cart';

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  image: {
    width: 30,
    height: 30,
    paddingRight: 20,
  },
  productContainer: {
    display: 'flex',
  },
});

function CartListOrganism({ cartList, handleChangeQuantity, handleDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '5%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box fontWeight={600}>produto</Box>
                </TableCell>
                <TableCell>
                  <Box fontWeight={600}>preço</Box>
                </TableCell>
                <TableCell align="center">
                  <Box fontWeight={600}>quantidade</Box>
                </TableCell>
                <TableCell align="center">
                  <Box fontWeight={600}>promoção</Box>
                </TableCell>
                <TableCell align="center" size="small" />
              </TableRow>
            </TableHead>
            <TableBody>
              {cartList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell scope="row">
                    <div className={classes.productContainer}>
                      {row.product.image && (
                        <img
                          src={row.product.image}
                          className={classes.image}
                        />
                      )}
                      {row.product.title}
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(row.product.price)}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleChangeQuantity(index, false)}>
                      <Remove />
                    </Button>
                    {row.quantity}
                    <Button onClick={() => handleChangeQuantity(index, true)}>
                      <Add />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    {row.product.sale.id === 1 ? '-' : row.product.sale.name}
                  </TableCell>
                  <TableCell align="center" size="small">
                    <Button onClick={() => handleDelete(index)}>
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default CartListOrganism;
