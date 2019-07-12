import React from 'react'
import { Topbar } from '../src/components/Topbar'
import Head from '../src/components/head';

class Home extends React.Component {
  static getInitialProps = ({ query }) => {
    return { query };
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Topbar />
      </div>
    )
  }
}

export default Home;
