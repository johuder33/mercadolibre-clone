import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PriceFormat from 'react-number-format';

const ShippingIcon = () => <img title={'Free Shipping'} alt={'free shipping icon'} style={{ paddingLeft: 10 }} src={'/static/icons/ic_shipping.png'} srcSet={'/static/icons/ic_shipping.png, /static/icons/ic_shipping@2x.png 2x'} />

export const Product = ({ product }: any) => {
  const { title, price: { amount }, picture, free_shipping } = product;
  return (
    <Grid container={true} style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16 }}>
      <Grid item={true} xs={12} sm={12} md={'auto'}>
        <img src={picture} style={{ marginRight: 16, width: 180, height: 180, borderRadius: 4, margin: 'auto', display: 'block' }} />
      </Grid>
      <Grid item={true} container={true} xs={12} sm={12} md={true} alignContent={'center'}>
        <Grid item={true} xs={12} container={true} style={{ marginBottom: 32 }}>
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
  );
}
