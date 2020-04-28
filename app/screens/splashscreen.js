import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
// import { inject } from 'mobx-react';



// export class HomeScreen  extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return <Text>"Test"</Text>;
//   }
// }

export const HomeScreen = () => {
  return <Text>"Test"</Text>;
}

// @inject("stores")
export class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   const {stores, navigation } = this.props;
  //   setTimeout(() => {
  //     navigation.navigate("Login")
  //   }, stores.config.SplashTime)
  // }
  render() {
    // const { stores } = this.props
    return (
      <View style={{flex: 1}}>
        <Image style={{flex: 1, width: null, height: null}}/>
        <Text>"Chudian dongxi"</Text>
      </View>
    )
  }
}