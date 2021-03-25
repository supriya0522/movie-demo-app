import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieListing from './apps';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            <Route exact path='/' component={MovieListing} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default (Routes);
