import React from 'react';
import App, { Container } from 'next/app';
import { AppStateProvider, defaultState } from '../src/components/AppStateProvider';

const getInitialState = (products) => {
  if (!products) { return; }
  return products.items.reduce((state, product) => {
    const { id } = product;

    state.byIds[id] = product;
    state.ids.push(id);

    return state;
  }, defaultState);
}

class MercadoLibreApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const { products, ...props } = pageProps;
    return { pageProps: props, initialState: getInitialState(products) };
  }

  render() {
    const { Component, initialState } = this.props;

    return (
      <Container>
        <AppStateProvider initialState={initialState}>
          <Component {...this.props.pageProps} />
        </AppStateProvider>
      </Container>
    );
  }
}

export default MercadoLibreApp;
