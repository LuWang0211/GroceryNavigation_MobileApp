/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {Text} from 'react-native';

import { AppNavigator } from './app/appnavigator';




// export default class App extends Component {
//   render() {
//     return (
//       <AppNavigator/>
//     );
//   }
// }

export class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


  // <Provider stores={stores}>
      //   <StyleProvider style={getTheme(custom)}>
      //     <AppNavigator/>
      //   </StyleProvider>
      // </Provider>