# GroceryNavigation_MobileApp

This is a project we working in HW/SW Lab 2 at GIX. An android app based on React Native Platform, which will help people to quickly collect their shopping items in a grocery store.

![app image](./images/app.JPG)

* previous version project base on raspberry pi and PyQt please see [navigation](https://github.com/LuWang0211/navigation) * 

## Main Function

By creating a user's shopping list on the mobile application, our navigation app will search for the aisle information of the desired items in the database and plan the route. On Clicking the button to start navigation, the app displays a navigation route, scans the surrounding environment through image processing, detects the aisle number and label, and corrects the position through the beacon signal and locating the user's real-time position as well. When the user is close to the desired product, it prompts the information about that product. If the user fails to follow the planned route for shopping, the system re-routes the path based on the user's current location.

![map](./images/map.JPG)

## Implement

1. Firebase text detection

Aisle number detection uses Firebase ML Kit for text recognition on android.

2. Third-Party Components
This app uses some third-party components to implement part functions, please make sure you have integrated them in your app before started integration of this repo.
- react-native-camera
- react-native-vector-icons
- react-native-svg
- react-native-progress-steps
- react-native-ble-manager

  <!-- ### 4. react-native-svg-animations -->
 <!-- ### test(would not be used): react-native-maps
 ### test(would not be used): react-native-geolocation-service -->
 <!-- react-native-openalpr missing 64 bit version --> 

3. Others

Because some code files involve secret information such as API key, did upload to this repo. please make sure you add these files before you build this app.

- AndroidManifest.xml
  Edit this file under  "android/app/src/main". In this file, you should add the camera and ble permission, and google API key etc information, related detailed please read "react-native-camera", "react-native-ble-manager" and react-native google map docs   

- google-services.json
  Edit this file under "android/app". For more details please see firebase ml kit docs.

## Team

Thanks for my teammates Ketki Hardas and Gulnara Sarymbekova working with me in this project, and thanks to all help from instructor John Raiti, Yuntao Wang

## Reference
The style of "Create Shopping List" page and some icons reference [plant-app](https://github.com/react-ui-kit/dribbble2react/tree/master/plant-app)
