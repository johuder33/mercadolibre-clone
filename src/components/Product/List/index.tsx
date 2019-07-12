import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { AppContext } from '../../../context';
import { getProducts } from '../../AppStateProvider/reducer';

const isLast = (index: number, arr: any[]) => index === arr.length - 1;

export const List = ({ itemComponent: Item }: any) => {
  const [state] = useContext(AppContext);
  const products = getProducts(state);
  return products.map((product: any, index: number) => (
    <>
      <Paper key={product.id}>
        <Item product={product} index={index} />
      </Paper>
      {!isLast(index, products) && <Divider />}
    </>
  ));
}
