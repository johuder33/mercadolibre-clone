import React from 'react';
import App, { Container } from 'next/app';
import { AppStateProvider } from '../src/components/AppStateProvider';

class MercadoLibreApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <AppStateProvider>
          <Component {...this.props.pageProps} />
        </AppStateProvider>
      </Container>
    );
  }
}

export default MercadoLibreApp;
