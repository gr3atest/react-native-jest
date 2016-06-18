'use strict';

import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <TouchableHighlight>
        <Text>
          React Native Test Examples
        </Text>
      </TouchableHighlight>
    );
  }
}

export default Home;