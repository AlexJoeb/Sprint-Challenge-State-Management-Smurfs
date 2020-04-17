import React, { Component } from "react";

import { connect } from 'react-redux';
import { fetchSmurfs } from '../Redux/Actions/MainActions';

import SmurfList from './SmurfList';
import Form from './Form';

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default connect(() => ({}), {
  fetchSmurfs
})(App);
