import React, { useState, useEffect, useCallback, useContext } from 'react'
import { AppContext } from '../src/context'
import { Topbar } from '../src/components/Topbar'
import { withRouter } from 'next/router'
import { router } from '../src/server/routes'
import Head from '../src/components/head';
import { List, Product } from '../src/components/Product';
import { CircularProgress } from '@material-ui/core';

const withLoadingState = (Wrapped) => ({ loading, ...rest }) => {
  return loading ? <CircularProgress /> : <Wrapped {...rest} />;
}

const ListWithLoading = withLoadingState(List);

const Result = (props) => {
  const [loading, setLoading] = useState(false);
  const [_, dispatch] = useContext(AppContext);
  const onSearch = useCallback((query) => {
    router.Router.pushRoute('result', { search: query }, { shallow: true });
  }, []);
  const onEnter = useCallback((query) => {
    router.Router.pushRoute('result', { search: query }, { shallow: true });
  }, []);

  useEffect(() => {
    if (Boolean(props.router.query.search)) {
      setLoading(true);
      fetch(`/api/items?q=${props.router.query.search}`)
      .then(resp => resp.json())
      .then(({ items }) => {
        dispatch({ type: 'ADD_PRODUCT', payload: { items } })
      })
      .then(() => setLoading(false));
    }
  }, [props.router.query.search]);


  useEffect(() => {
    onSearch('iphone');
  }, []);

  return (
    <div>
      <Head title="Result" />
      <Topbar onClick={onSearch} value={props.router.query.search} onEnter={onEnter} />
      <ListWithLoading loading={loading} itemComponent={Product} />
    </div>
  )
}

Result.getInitialProps = ({ query }) => {
  return { query };
}

export default withRouter(Result);
