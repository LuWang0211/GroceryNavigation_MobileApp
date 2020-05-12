import React from 'react';

import { PermissionsAndroid } from 'react-native';

export const ensurePermission = async () => {
    const permssion = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
    // const permssion = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;

    const granted = await PermissionsAndroid.check(permssion);

    console.log(permssion, granted);

    if (granted) {
        return true;
    }

    const newGrantResult = await PermissionsAndroid.request(
        permssion,
        {
          title: "Can I read your geolocation?",
          message:
            "Just give me the access. Haha!",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
    if (newGrantResult === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the GPS location");
    } else {
        console.log("GPS location permission denied");
    }

    return newGrantResult;
}