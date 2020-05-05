import React, { Component } from 'react';
import {View, Button, Text, ImageBackground, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require("../../images/login.jpg");

// @inject("stores")
export const SplashScreen = (props) => {
  // constructor(props) {
  //   super(props)
  // }
  // componentDidMount() {
  //   const {stores, navigation } = this.props;
  //   setTimeout(() => {
  //     navigation.navigate("Login")
  //   }, stores.config.SplashTime)
  // }
    // const { stores } = this.props

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

        <ImageBackground source={image} style={styles.image}>
            <Text  style={styles.text}>Hi, I'm your shopping assistant </Text>

            <Button
              title="Tap here to start"
              onPress={() => navigation.navigate('Home')}
            />
        </ImageBackground>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
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