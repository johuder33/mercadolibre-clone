import React, { useContext, useCallback } from 'react'
import { AppContext } from '../src/context'
import { router } from '../src/server/routes'
import Head from '../src/components/head';
import { List, Product } from '../src/components/Product';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

const withLoadingState = (Wrapped) => ({ loading, ...rest }) => {
  return loading ? <CircularProgress /> : <Wrapped {...rest} />;
}

const ListWithLoading = withLoadingState(List);

const Result = (props) => {
  const [{ loading }] = useContext(AppContext);

  const showDetail = useCallback((product) => {
    router.Router.pushRoute('detail', { id: product.id }, { shallow: true });
  });

  return (
    <div>
      <Head title="Result" />
      <ListWithLoading loading={loading} itemComponent={Product} onClick={showDetail} />
    </div>
  )
}

Result.getInitialProps = async ({ query }) => {
  let response;
  if (query && query.search) {
    response = await axios.get(`http://localhost:3000/api/items?q=${query.search}`);
  }
  return { query, products: response && response.data };
}

export default Result;
