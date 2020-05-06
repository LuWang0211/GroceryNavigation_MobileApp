import React, {useState} from 'react';
import { theme, mocks } from '../constants';

export const ShoppingListContext = React.createContext({});

export const ShoppingListContextProvider = (props) => {

    const [shoppingListDataDict, setShoppingListDataDict ] = useState({});

    const shoppingListData = Object.values(shoppingListDataDict);

    const addShoppingListItem = (category) => {
        const key = category.id;

        let dictEntry = shoppingListDataDict[key];
        if (!dictEntry) {
            shoppingListDataDict[key] = {
                category,
                count: 0
            };

            dictEntry = shoppingListDataDict[key];
        }
        dictEntry.count ++;
        

        setShoppingListDataDict({...shoppingListDataDict});
    }; 

    const deleteShoppingListItem = (category) => {
        const key = category.id;
        
        if (!shoppingListDataDict[key]) {
            return;
        }

        delete shoppingListDataDict[key];

        setShoppingListDataDict({...shoppingListDataDict});
    }; 

    return (
    <ShoppingListContext.Provider value= {
        {
            shoppingListData,
            categories: mocks.categories,
            addShoppingListItem,
            deleteShoppingListItem
        }
    }>
        {props.children}
    </ShoppingListContext.Provider>);
}

