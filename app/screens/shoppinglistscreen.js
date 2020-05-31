import React, { useContext } from 'react';
import {View, Button, Text, FlatList, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useNavigation, createNavigatorFactory } from '@react-navigation/native';
import { mocks } from '../constants';
import { ShoppingListContext } from '../context/shoppingListContext';
import { planShopping } from '../tools/mapHelper'

function Item({ image, name, count, aisle, onDelete }) {
    return (
      <View style={styles.item}>
        <Image style={{...styles.img}} source={image} />
        <Text style={{...styles.text, flex:1}}>{name}</Text>
        <Text style={{...styles.text, flex:1}}>{count} in cart </Text>
        <Text style={{...styles.text, flex:1}}>Aisle: {aisle}</Text>
        <Button color="#E63F5D"  title="delete" onPress={onDelete} />
      </View>
    );
  }

export const ShoppinglistScreen = (props) => {

    const navigation = useNavigation();

    let { shoppingListData, deleteShoppingListItem } = useContext(ShoppingListContext);

    shoppingListData = planShopping(shoppingListData);

    const mock_list = mocks.categories
    // console.log(shoppingListData)

    if (shoppingListData.length == 0) {
        return (
        <View style={styles.container}>
            <Text style={{...styles.header, flex:1, minHeight:20}}> YOUR SHOPPING LIST </Text>

            <Text style={{...styles.header, flex:1, minHeight:20}}> Sorry, your shopping list is empty! </Text>

            <View style={styles.btn}>
                <Button
                title="Continue to see the store map"
                color = "#E63F5D"
                onPress={() => navigation.navigate('Map')}
                />
            </View>
            <View style={styles.btn}>
                <Button
                title="Back to edit shopping list"
                color = "#E63F5D"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
        )

    }

    return (
        <View style={styles.container}>
            <Text style={{...styles.header, flex:1, minHeight:20}}> YOUR SHOPPING LIST </Text>

            <SafeAreaView style={{flex:100}}>
                <FlatList 
                    data={shoppingListData}
                    renderItem={({item: {category, count}}) => {
                        return <Item image={category.image} name={category.name} count={count} aisle={category.aisle} onDelete={() => {
                            deleteShoppingListItem(category);
                        }} />;
                    }}
                    keyExtractor={({category}) => category.id}
                />
                <Text style={styles.text}> {mock_list.id} </Text>
            </SafeAreaView>

            <View style={styles.btn}>
              <Button
                title="OPEN MAP, START SHOPPING"
                color = "#E63F5D"
                onPress={() => navigation.navigate('Map')}
              />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 200,
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
        flex: 5,
        flexDirection: "row",
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 8,
    },
    text: {
        color: "black",
        fontSize: 15,
        textAlign: "left",
        marginHorizontal: 10
    },
    img: {
        width: 50,
        height: 50,
    },
    btn: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
})