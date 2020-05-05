import React, { Component } from 'react';
import {View, Button, Text, FlatList, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mocks } from '../constants';

function Item({ image, name }) {
    return (
      <View style={styles.item}>
        <Image size={50} source={image} />
        <Text style={{...styles.text, flex:1}}>{name}</Text>
        <Button style={{flex:1}}title="delete"/>
      </View>
    );
  }

export const ShoppinglistScreen = (props) => {

    const navigation = useNavigation();
    
    const mock_list = mocks.categories

    return (
        <View style={styles.container}>
            <Text style={{...styles.header, flex:1, minHeight:20}}> YOUR SHOPPING LIST </Text>

            <SafeAreaView style={{flex:100}}>
                <FlatList 
                    data={mock_list}
                    renderItem={({ item }) => <Item image={item.image} name={item.name} />}
                    keyExtractor={item => item.id}
                />
                <Text style={styles.text}> {mock_list.id} </Text>
            </SafeAreaView>

            <View style={{flex:1, minHeight:20, marginVertical: 10}}>
                <Button
                title="Tap here to start"
                onPress={() => navigation.navigate('Map')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "column"
},
header: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
},
item: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 8,
},
text: {
    color: "black",
    fontSize: 20,
    textAlign: "left",
    marginHorizontal: 10
}
})