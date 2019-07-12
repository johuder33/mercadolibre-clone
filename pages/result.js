import React, { useState, useEffect, useCallback, useContext } from 'react'
import { AppContext } from '../src/context'
import { Topbar } from '../src/components/Topbar'
import { withRouter } from 'next/router'
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
  const [loading, setLoading] = useState(false);
  const [_, dispatch] = useContext(AppContext);
  const onSearch = useCallback((query) => {
    searchProducts(query);
  }, []);
  const onEnter = useCallback((query) => {
    searchProducts(query);
  }, []);

  const showDetail = (product) => {
    router.Router.pushRoute('detail', { id: product.id }, { shallow: true });
  }

  const searchProducts = (query) => {
    setLoading(true);
    router.Router.pushRoute('result', { search: query }, { shallow: true });
    axios.get(`/api/items?q=${query}`)
      .then(({ data }) => data)
      .then(({ items }) => {
        dispatch({ type: 'ADD_PRODUCT', payload: { items } })
      })
      .then(() => setLoading(false));
  };

  return (
    <div>
      <Head title="Result" />
      <Topbar onClick={onSearch} value={props.router.query.search} onEnter={onEnter} />
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

export default withRouter(Result);
