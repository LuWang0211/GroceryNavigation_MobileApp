import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, Dimensions, Button, Alert} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon, Polyline, LatLng } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    //   height: 800,
    //   width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height; 
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 1.3039991;
const LONGITUDE = 103.8316911;

export const MapTest = () => {
    const [currentMargin, setCurrentMargin] = useState(1);

    useEffect(() => {
      setTimeout(() => {
        setCurrentMargin(0);
      }, 2000);
    }, []);
    
    return (<View style={styles.container}>
        <Text> ITEM CATEGORIES </Text>

        <MapView 
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{ marginBottom: currentMargin, ...StyleSheet.absoluteFillObject }}
            showsIndoors={true}
            showsIndoorLevelPicker= {true}
            // showsMyLocationButton={true}
            initialRegion={{
                latitude: 47.615717,
                longitude: -122.203605,
                // latitude: 45.497284367030844,
                // longitude: -73.5790109820664,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}

        
    /></View>);
}


// class MapTest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setIndoorLevel = this.setIndoorLevel.bind(this);
//   }

//   handleIndoorFocus(event) {
//     const { indoorBuilding } = event.nativeEvent;
//     const { defaultLevelIndex, levels } = indoorBuilding;
//     const levelNames = levels.map(lv => lv.name || '');
//     const msg = `Default Level: ${defaultLevelIndex}\nLevels: ${levelNames.toString()}`;
//     Alert.alert('Indoor building focused', msg);
//   }

//   setIndoorLevel(level) {
//     this.map.setIndoorActiveLevelIndex(level);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={this.props.provider}
//           style={styles.map}
//           initialRegion={{
//             latitude: LATITUDE,
//             longitude: LONGITUDE,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }}
//           showsIndoors
//           showsIndoorLevelPicker
//           onIndoorBuildingFocused={this.handleIndoorFocus}
//           ref={map => {
//             this.map = map;
//           }}
//         />
//         <Button
//           title="go to level 5"
//           onPress={() => {
//             this.setIndoorLevel(5);
//           }}
//         />
//         <Button
//           title="go to level 1"
//           onPress={() => {
//             this.setIndoorLevel(1);
//           }}
//         />
//       </View>
//     );
//   }
// }

// MapTest.propTypes = {
//   provider: MapView.ProviderPropType,
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// module.exports = MapTest;