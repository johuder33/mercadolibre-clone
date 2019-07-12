import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PriceFormat from 'react-number-format';
import './detail.scss';

const Translate = (word: string) => word === 'new' ? 'Nuevo' : 'Usado';

export const Detail = ({ product }: any) => {
  const { item: { picture, title, sold_quantity, condition, description, price: { amount } } } = product;
  return (
    <Paper square={true} elevation={0} className={'container-detail'}>
      <Grid container={true}>
        <Grid item={true} xs={true}>
          <Grid container={true} className={'mainPhoto'}>
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

        <Grid item={true} xs={3}>
          <div>
            <Typography className={'conditionText'} variant={'body2'}>{`${Translate(condition)} - ${sold_quantity} vendidos`}</Typography>
          </div>
          <div>
            <Typography className={'spacingBottomText'} variant={'h5'}>{title}</Typography>
          </div>
          <div>
            <PriceFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Typography className={'spacingBottomText'} variant={'h3'}>{value}</Typography>} />
          </div>
          
          <div style={{ paddingRight: 32 }}>
            <Button fullWidth={true} color={'primary'} variant={'contained'}>{'Comprar'}</Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
