import React from 'react'
import Head from '../src/components/head';
import { Detail } from '../src/components/Detail';
import axios from 'axios';

const DetailPage = ({ product }) => {
  return (
    <>
      <Head title="Detail" />
      <Detail product={product} />
    </>
  );
}

DetailPage.getInitialProps = async ({ query }) => {
  const product = await axios.get(`http://localhost:3000/api/items/${query.id}`);
  return { query, product: product.data };
}

export default DetailPage;
