import React, { Component, useContext } from 'react';
import {View, Button, Text, FlatList, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useNavigation, createNavigatorFactory } from '@react-navigation/native';
import { mocks } from '../constants';
import { ShoppingListContext } from '../context/shoppingListContext';

function Item({ image, name, count, onDelete }) {
    return (
      <View style={styles.item}>
        <Image size={50} source={image} />
        <Text style={{...styles.text, flex:1}}>{name}</Text>
        <Text style={{...styles.text, flex:1}}>{count}</Text>
        <Button style={{flex:1}}title="delete" onPress={onDelete} />
      </View>
    );
  }

export const ShoppinglistScreen = (props) => {

    const navigation = useNavigation();

    const { shoppingListData, deleteShoppingListItem } = useContext(ShoppingListContext);

    
    const mock_list = mocks.categories

    return (
        <View style={styles.container}>
            <Text style={{...styles.header, flex:1, minHeight:20}}> YOUR SHOPPING LIST </Text>

            <SafeAreaView style={{flex:100}}>
                <FlatList 
                    data={shoppingListData}
                    renderItem={({item: {category, count}}) => {
                        return <Item image={category.image} name={category.name} count={count} onDelete={() => {
                            deleteShoppingListItem(category);
                        }} />;
                    }}
                    keyExtractor={({category}) => category.id}
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
    backgroundColor: 'lightgray',
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