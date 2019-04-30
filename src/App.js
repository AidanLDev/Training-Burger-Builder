import React, { Component } from 'react';

//  Components
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
//  Style

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
