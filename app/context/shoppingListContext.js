import React, {useState} from 'react';
import { mocks } from '../constants';
import { localize} from '../tools/mapHelper';

export const ShoppingListContext = React.createContext({});

export const ShoppingListContextProvider = (props) => {

    const [shoppingListDataDict, setShoppingListDataDict ] = useState({});
    const [textCapture, setTextCapture ] = useState(null);
    const [location, setLocation ] = useState('ZZ');

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

    const reportTextCapture = (textCapture) => {
        setTextCapture(textCapture);

        const newLocation = localize(textCapture);

        if (newLocation != location && newLocation != null) {
            setLocation(newLocation);
        }
    }

    return (
    <ShoppingListContext.Provider value= {
        {
            shoppingListData,
            categories: mocks.categories,
            addShoppingListItem,
            deleteShoppingListItem,
            textCapture,
            reportTextCapture,
            location
        }
    }>
        {props.children}
    </ShoppingListContext.Provider>);
}

