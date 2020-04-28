import React, {Component} from 'react';
import {View, Button, Text, ImageBackground, StyleSheet} from 'react-native';
// import {
//   Container,
//   Content
// } from 'native-base';
// import { DrawerNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {SplashScreen} from './screens/splashscreen';

// const Splash = {
//     screen: SplashScreen,
//     navigationOptions: {
//       header: null
//     }
//   }

// const RouteConfig = {
//     initialRoute: 'Splash'
// }

// // const AppNavigator = DrawerNavigator({
// //     Splash: Splash
// // },RouteConfig)

// const image = {uri: "../images/login.jpg"};
const image = require("../images/login.jpg");

export const HomeScreen = () => {
  return (
      <View style={styles.container}>

        <ImageBackground source={image} style={styles.image}>
            <Text  style={styles.text}>Hi, I'm your shopping assistant </Text>

            <Button
              onPress={() => navigation.navigate('Tap here to start')}
              title="Tap here to start"
            />
        </ImageBackground>
      </View>
  );
}


const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SplashScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
})