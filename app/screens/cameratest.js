
import React, { PureComponent, Component, useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNTextDetector from 'react-native-text-detector';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export const CameraTest = () => {

  const [detection, setDetection] = useState('No Detection')

  const takePicture = async function(camera) {
    console.log('take picture');
    const options = { quality: 0.5, base64: true, skipProcessing: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri );

    const result = await RNTextDetector.detectFromUri(data.uri);

    console.log('detection, origianl result', result);

    setDetection(result.map(e => e.text).join(" - "));

    // console.log('reset result text', detection);

    const AisleNo1 = new Set(['1', 'hispanic foods', 'can prepared', 'pckgd. dinners', 'pckgd.', 'pasta', 'condiments', 'condiments']);
    const AisleNo2 = new Set(['2', 'food storage', 'spices', 'peanut butter', 'cake mixes', 'soups', 'canned fruit']);

    let detectionlist = detection.split(" - ");

    for (let i = 0; i < detectionlist.length; i++) {
      // console.log('test: ', detectionlist[i], detectionlist[i] in AisleNo1);
      if ( AisleNo1.has(detectionlist[i])) {
        console.log('You are in Aisle One');
        break;
      }

      if ( AisleNo2.has(detectionlist[i])) {
        console.log('You are in Aisle Two');
        break;
      }

    }
  };

  const onTextRecognized = (response) => {
    console.log('onTextRecognized', response);
  };

  return (
    <View style={styles.container}>
      <Text style={{...styles.header, minHeight:20}}> Camera Test </Text>
      <Text style={{...styles.text}}> {detection} </Text>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> Snap </Text>
              </TouchableOpacity>
                
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: 'black',
  },
  header: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    left: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});