import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
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


export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
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
  