import './App.css';
import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import Router from './router';

class App extends Component {
  render () {
    let Persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
        <Router></Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
