import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
            <div className="App">
                <Route exact path="/" component={Routes} />
            </div>
          </Router>
      </div>
    );
  }
}
export default App;