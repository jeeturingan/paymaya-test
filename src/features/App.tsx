import React from 'react';
import { Button } from 'modus-ui';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Status } from './Status/index';
import Checkout from './Checkout/index';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/status" component={Status} />
            <Route path="/">
              <h2>Paymaya Test</h2>
              <Link to="/checkout">
                <Button text="Checkout" />
              </Link>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
