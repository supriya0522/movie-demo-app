import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RentedListing from './apps';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            <Route exact path='/' component={RentedListing} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default (Routes);
