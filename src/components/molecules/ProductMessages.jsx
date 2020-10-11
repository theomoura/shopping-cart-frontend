import React from 'react';
import { SnackbarCustom } from '../atoms';

// import { Container } from './styles';

function ProductMessages({
  openSnackbarError,
  setOpenSnackbarError,
  openSnackbarSuccess,
  setOpenSnackbarSuccess,
  openSnackbarBuy,
  setOpenSnackbarBuy,
  errorRequest,
  setErrorRequest,
}) {
  return (
    <>
      <SnackbarCustom
        open={openSnackbarError}
        handleClose={() => setOpenSnackbarError()}
        message={'Ação inválida, um item está sendo editado!'}
        type={'error'}
      />
      <SnackbarCustom
        open={openSnackbarSuccess}
        handleClose={() => setOpenSnackbarSuccess()}
        message={'Produto criado com sucesso!'}
        type={'success'}
      />
      <SnackbarCustom
        open={openSnackbarBuy}
        handleClose={() => setOpenSnackbarBuy()}
        message={'Item adicionado ao carrinho!'}
        type={'success'}
      />
      <SnackbarCustom
        open={errorRequest}
        handleClose={() => setErrorRequest()}
        message={'Erro na requisição! Por favor tente novamente'}
        type={'error'}
      />
    </>
  );
}

export default ProductMessages;
