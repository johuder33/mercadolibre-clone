import React from 'react'
import { Topbar } from '../src/components/Topbar'
import Head from '../src/components/head';

class Result extends React.Component {
  static getInitialProps = ({ query }) => {
    return { query };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head title="Result" />
        <h1>Result {this.props.query.search}</h1>
      </div>
    )
  }
}

export default Result;
