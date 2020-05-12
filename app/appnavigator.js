import React, {Component} from 'react';
// import {View, Button, Text, ImageBackground, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {SplashScreen} from './screens/splashscreen';
import {HomeScreen} from './screens/homescreen';
import {ShoppinglistScreen} from './screens/shoppinglistscreen';
import {MapScreen} from './screens/mapscreen';
import { ShoppingListContextProvider } from './context/shoppingListContext';
import { MapTest } from './screens/maptest';
import { CameraTest } from './screens/cameratest'
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
// const image = require("../images/login.jpg");

// export const HomeScreen = () => {
//   return (
//       <View style={styles.container}>

//         <ImageBackground source={image} style={styles.image}>
//             <Text  style={styles.text}>Hi, I'm your shopping assistant </Text>

//             <Button
//               onPress={() => navigation.navigate('Tap here to start')}
//               title="Tap here to start"
//             />
//         </ImageBackground>
//       </View>
//   );
// }


const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <ShoppingListContextProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Splash">
          <Drawer.Screen name="Splash" component={SplashScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Shopping List" component={ShoppinglistScreen} />
          <Drawer.Screen name="Map" component={MapScreen} />
          <Drawer.Screen name="MapTest" component={MapTest} />
          <Drawer.Screen name="CameraTest" component={CameraTest} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ShoppingListContextProvider>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// })