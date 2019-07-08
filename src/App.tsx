
import React, { Component } from "react";
import { Provider } from 'react-redux';
// import Orientation, { orientation } from "react-native-orientation";
import NavigationContainer from './shared/Navigation/Navigator';

import configureStore from "./store/configureStore";
import { StatusBar } from "react-native";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <StatusBar backgroundColor="#234" barStyle="light-content" />
        <NavigationContainer />
      </Provider>
    );
  }
}