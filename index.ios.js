'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/Home';

class ReactNativeJest extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('ReactNativeJest', () => ReactNativeJest);
