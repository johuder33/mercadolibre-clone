import { Result } from './types';

export const getNewResultBody = ({ id,
  title,
  price: amount,
  currency_id: currency,
  thumbnail: picture,
  shipping: {
    free_shipping
  },
  condition }: Result) => ({
  id,
  title,
  price: {
    amount,
    currency,
    decimals: 0
  },
  picture,
  condition,
  free_shipping
});

export const getNewDetailBody = (item: Result) => {
  const { sold_quantity } = item;
  const newBody = getNewResultBody(item);

  return { ...newBody, sold_quantity };
}
