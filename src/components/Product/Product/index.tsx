import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PriceFormat from 'react-number-format';
import './product.scss';

const ShippingIcon = () => <img title={'Free Shipping'} alt={'free shipping icon'} className={'spacingShippingLeft'} src={'/static/icons/ic_shipping.png'} srcSet={'/static/icons/ic_shipping.png, /static/icons/ic_shipping@2x.png 2x'} />

export const Product = ({ product }: any) => {
  const { title, price: { amount }, picture, free_shipping } = product;
  return (
    <div className={'containerProductResult'}>
    <Grid container={true}>
      <Grid item={true} xs={12} sm={12} md={'auto'}>
        <img src={picture} className={'pictureProduct'} />
      </Grid>
      <Grid item={true} container={true} xs={12} sm={12} md={true} alignContent={'center'}>
        <Grid item={true} xs={12} container={true} className={'priceSpacing'}>
          <Grid item={true} xs={true}>
            <PriceFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Typography variant={'h5'}>{value}{free_shipping && <ShippingIcon />}</Typography>} />
          </Grid>
          <Grid item={true}>
            <Typography align={'right'} variant={'caption'}>{'Capital Federal'}</Typography>
          </Grid>
        </Grid>
        <Grid item={true} xs={12}>
          <Typography variant={'h6'}>{title}</Typography>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
