
import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
// import Orientation, { orientation } from "react-native-orientation";

import NavigationContainer from './navigation/Navigator';

interface Props {}
export default class App extends Component<Props> {
  // componentDidMount = () => {
  //   Orientation.lockToPortrait();
  // };

  render() {
    return <NavigationContainer />;
  }
}