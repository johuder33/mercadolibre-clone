import React from 'react'
import { Topbar } from '../src/components/Topbar'
import Head from '../src/components/head';

class Search extends React.Component {
  static getInitialProps = ({ query }) => {
    return { query };
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Topbar value={this.props.query.q} />
      </div>
    )
  }
}

export default Search
