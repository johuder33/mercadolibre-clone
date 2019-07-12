import React, { useCallback, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import { withRouter } from 'next/router';
import axios from 'axios';

import './topbar.scss';
import { AppContext } from '../../context';
import { Search } from '../Search';
import { ADD_PRODUCT, IS_LOADING } from '../../components/AppStateProvider/reducer/events';
import { router as navigator } from '../../server/routes';

const TopbarContainer = ({ children }: any) => (
  <div style={{ backgroundColor: '#FFE600', width: '100%', paddingTop: 5, paddingBottom: 5 }}>
    {children}
  </div>
)

export const TopbarBase = ({ router }: any) => {
  const [, dispatch] = useContext(AppContext);
  const SearchProducts = useCallback((query) => {
    dispatch({ type: IS_LOADING, payload: { loading: true } });
    navigator.Router.pushRoute('result', { search: query }, { shallow: true });
    axios.get(`/api/items?q=${query}`)
      .then(({ data }) => data)
      .then(({ items }) => {
        dispatch({ type: ADD_PRODUCT, payload: { items } });
        dispatch({ type: IS_LOADING, payload: { loading: false } });
      });
  }, []);

  return (
    <TopbarContainer>
      <Grid container={true} style={{ margin: 'auto', maxWidth: '1280px', width: '100%' }} alignItems={'center'} spacing={2}>
        <Grid xs={2} item={true} container={true} justify={'flex-end'}>
          <Link href={'/'} shallow={true}>
            <img className={'logo'} src={'/static/logos/Logo_ML.png'} srcSet={'/static/logos/Logo_ML.png, /static/logos/Logo_ML@2x.png 2x'} style={{ width: '100%', maxWidth: 50 }} />
          </Link>
        </Grid>

        <Grid xs={9} item={true}>
          <Search onClick={SearchProducts} onEnter={SearchProducts} name={'searchable'} value={router.query.search} />
        </Grid>

        <Grid xs={1} item={true}>
        </Grid>
      </Grid>
    </TopbarContainer>
  );
};

export const Topbar = withRouter(TopbarBase);
