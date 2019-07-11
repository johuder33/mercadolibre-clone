import React from 'react'
import { Topbar } from '../src/components/Topbar'
import Head from '../src/components/head';

class Detail extends React.Component {
  static getInitialProps = ({ query }) => {
    return { query };
  }

  render() {
    return (
      <div>
        <Head title="Detail" />
        <h1>Detail</h1>
      </div>
    )
  }
}

export default Detail;
