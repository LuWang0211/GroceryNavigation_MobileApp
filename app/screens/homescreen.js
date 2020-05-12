import React, { Component, useState, useContext } from 'react';
import { Dimensions, Button, View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Partition } from '../newstyle/Partition';
import { Card } from '../newstyle/Card';
import { Badge } from '../newstyle/Badge';
import { theme } from '../constants';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ShoppingListContext } from '../context/shoppingListContext'


const { width } = Dimensions.get("window");
// const navigation = useNavigation();

export const HomeScreen = (props) => {
    const [active, setActive] = useState('Products');

    const { categories, shoppingListData, addShoppingListItem} = useContext(ShoppingListContext);
    
    const [filteredCategories, setFilteredCategories] = useState(categories);


    const handleTab = tab => {
        const filtered = categories.filter(category =>
          category.tags.includes(tab.toLowerCase())
        );
    
        setActive(tab);
        setFilteredCategories(filtered);
    };
    
    const renderTab = (tab) => {
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => handleTab(tab)}
            style={[styles.tab, isActive ? styles.active : null]}
          >
            <Text size={16} medium gray={!isActive} secondary={isActive}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
    }

    const getItemCount = () => {
        return (shoppingListData || []).reduce((sum, current) => {
            return sum + current.count;
        }, 0);
    }

    const { navigation } = props; //     const navigation = useNavigation();
    // const { categories } = this.state;
    // const tabs = ["Meat & Seafood", "Produce", "Breads & Bakery", "Beverages"];
    const tabs = ["Products", "Inspirations", "Shop"];
    return (

        <Partition>
            <Partition flex={false} center>
                <Text style={styles.header}> ITEM CATEGORIES </Text>
            </Partition>

            <Partition flex={false} style={{flexDirection: 'row-reverse'}}> 
                <Text style={{marginRight: 25, height: 20, width: 20, borderRadius: 10, backgroundColor: 'rgba(95,197,123,0.8)', 
                    right: 10, bottom: 10, alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                    {shoppingListData.length} 
                </Text>                   
                <Icon onPress={() => navigation.navigate('Shopping List')} name="ios-cart" size={30} style={{...styles.icon}}/>
            </Partition>

            <Partition flex={false} row style={styles.tabs}>
                {tabs.map(tab => renderTab(tab))}
            </Partition>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: theme.sizes.base * 2 }}
                >
                <Partition flex={false} row space="between" style={styles.categories}>
                    {filteredCategories.map(category => (
                    <TouchableOpacity
                        key={category.name}
                        onPress={() => addShoppingListItem(category)}
                    >
                        <Card center middle shadow style={styles.category}>
                        <Badge
                            margin={[0, 0, 15]}
                            size={50}
                            color="rgba(41,216,143,0.20)"
                        >
                            <Image source={category.image} />
                        </Badge>
                        <Text medium height={20}>
                            {category.name}
                        </Text>
                        <Text gray caption>
                            price: $ {category.count}
                        </Text>
                        </Card>
                    </TouchableOpacity>
                    ))}
                </Partition>
            </ScrollView>


            <Partition flex={false} center>
                <Button onPress={() => navigation.navigate('Shopping List')} title = "Check your shopping list" />
            </Partition>
        </Partition>
    );
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
        paddingHorizontal: 16 * 2
    },
    text: {
        color: "black",
        fontSize: 20,
        textAlign: "right"
    },
    icon: {
        // marginHorizontal: 32,
        textAlign: "right"
    },
    avatar: {
        height: 16 * 2.2,
        width: 16 * 2.2
    },
    tabs: {
        borderBottomColor: "#C5CCD6",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 16,
        marginHorizontal: 32
    },
    tab: {
        marginRight: 32,
        paddingBottom: 16
    },
    active: {
        borderBottomColor: "#2BDA8E",
        borderBottomWidth: 4
    },
    categories: {
        flexWrap: "wrap",
        paddingHorizontal: 32,
        marginBottom: 56
    },
    category: {
    // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
    }
  })