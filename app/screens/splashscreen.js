import React from 'react';
import {View, Button, Text, ImageBackground, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require("../../images/login.jpg");

export const SplashScreen = (props) => {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

        <ImageBackground source={image} style={styles.image}>
            <Text  style={styles.text}>Hi, I'm your shopping assistant </Text>
            <View style={styles.btn}>
              <Button
                title="Tap here to start"
                color = "#E63F5D"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  btn: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
})