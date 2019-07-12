import React from 'react'
import { Topbar } from '../src/components/Topbar'
import Head from '../src/components/head';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import PriceFormat from 'react-number-format';

const Translate = (word) => word === 'new' ? 'Nuevo' : 'Usado';

const Detail = ({ product }) => {
  const { item: { picture, title, sold_quantity, condition, description, price: { amount } } } = product;
  return (
    <div>
      <Head title="Detail" />
      <Topbar />
      <Grid container={true} style={{ maxWidth: 1280, margin: 'auto' }}>
        <Grid item={true} xs={'auto'} style={{ maxWidth: 680 }}>
          <Grid container={true}>
            <Grid item={true}>
              <img width={680} height={680} alt={'product-main-image'} src={picture} />
            </Grid>
            <Grid item={true} xs={12} style={{ marginBottom: 32 }}>
              <Typography variant={'h4'}>{'Description del producto'}</Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <Typography variant={'body1'}>{description}</Typography>
            </Grid>
          </Grid>

        </Grid>

        <Grid item={true} xs={true}>
          <div>
            <Typography style={{ marginTop: 32, marginBottom: 16 }} variant={'body2'}>{`${Translate(condition)} - ${sold_quantity} vendidos`}</Typography>
          </div>
          <div>
            <Typography style={{ marginBottom: 32 }} variant={'h5'}>{title}</Typography>
          </div>
          <div>
            <PriceFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Typography style={{ marginBottom: 32 }} variant={'h3'}>{value}</Typography>} />
          </div>
          
          <div style={{ paddingRight: 32 }}>
            <Button fullWidth={true} color={'primary'} variant={'contained'}>{'Comprar'}</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const product = await axios.get(`http://localhost:3000/api/items/${query.id}`);
  return { query, product: product.data };
}

export default Detail;
