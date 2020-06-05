import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {SplashScreen} from './screens/splashscreen';
import {HomeScreen} from './screens/homescreen';
import {ShoppinglistScreen} from './screens/shoppinglistscreen';
import {MapScreen} from './screens/mapscreen';
import { ShoppingListContextProvider } from './context/shoppingListContext';
import { MapTest } from './screens/maptest';
import { CameraTest } from './screens/cameratest';
import { BeaconTest } from './screens/beacontest';

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
          <Drawer.Screen name="MapTest(For Further Dev)" component={MapTest} />
          <Drawer.Screen name="CameraTest(For Test)" component={CameraTest} />
          <Drawer.Screen name="BeaconTest(For Test)" component={BeaconTest} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ShoppingListContextProvider>
  );
}
