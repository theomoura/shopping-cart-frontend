import { sales } from './constants';

export const calcTotal = (cartList) => {
  let total = 0;
  console.log(cartList);
  cartList.map((prod) => {
    const { product } = prod;
    console.log(product, prod, product.sale.id === sales[1].id);
    if (!product.sale || product.sale.id === sales[0].id) {
      const calc = product.price * prod.quantity;
      total += calc;
    } else if (product.sale.id === sales[1].id) {
      const rest = prod.quantity % 2;
      const promo = (prod.quantity - rest) / 2;
      const calc = product.price * rest + product.price * promo;
      total += calc;
    } else if (product.sale.id === sales[2].id) {
      const rest = prod.quantity % 3;
      const promo = (prod.quantity - rest) / 3;
      const calc = product.price * rest + 10 * promo;
      total += calc;
    }
  });
  return total;
};
