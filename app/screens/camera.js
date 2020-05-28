import React, { PureComponent, Component, useCallback, useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { ShoppingListContext} from '../context/shoppingListContext'
import { TextCapture, TextCaptureComponent} from './cameratest'

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

export const SmallCamera = () => {
    const { reportTextCapture } = useContext(ShoppingListContext);

    const onTextRecognized = useCallback(({ textBlocks }) => {
        const textCapture = new TextCapture();
    
        for (const textBlock of textBlocks) {
          const components = textBlock.components;
    
          for (const component of components) {
            const textCaptureBlock = new TextCaptureComponent();
            textCaptureBlock.bounds = component.bounds;
            textCaptureBlock.text = component.value;
            textCapture.components.push(textCaptureBlock);        
          }
        }
        
        reportTextCapture(textCapture);
      }, [reportTextCapture]);

    // return (<RNCamera
    //     style={styles.small}
    //     type={RNCamera.Constants.Type.back}
    //     flashMode={RNCamera.Constants.FlashMode.off}
    //     androidCameraPermissionOptions={{
    //     title: 'Permission to use camera',
    //     message: 'We need your permission to use your camera',
    //     buttonPositive: 'Ok',
    //     buttonNegative: 'Cancel',
    //     }}
    //     androidRecordAudioPermissionOptions={{
    //     title: 'Permission to use audio recording',
    //     message: 'We need your permission to use your audio',
    //     buttonPositive: 'Ok',
    //     buttonNegative: 'Cancel',
    //     }}
    //     onTextRecognized={onTextRecognized}
    // >
    //     {({ camera, status, recordAudioPermissionStatus }) => {
    //     if (status !== 'READY') return <PendingView />;
    //         return null;
    //     }}
    // </RNCamera>);
    return (<View style={styles.small}>
        <RNCamera
            style={styles.small}
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
            onTextRecognized={onTextRecognized}
        >
            {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
                return null;
            }}
        </RNCamera>
    </View>);
};

const styles = StyleSheet.create({
    small: {
      flex: 1,
      maxHeight: 1,
      height: 1,
      overflow: 'hidden'
    }
  });
