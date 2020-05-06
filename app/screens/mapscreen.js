import React, { Component, useContext, useState, useMemo } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { mocks } from '../constants';
import { ShoppingListContext } from '../context/shoppingListContext';

const image = require("../../images/splash.jpg");

function Shoppingprogess({ label }) {
    return (
        <View >
        <ProgressStep label={{lable}} onNext={() => Alert.alert('Please ensure that you have put the item into your cart')} removeBtnRow={false}>
            <View style={{ alignItems: 'center' }}>
            <Text>This is the content within {{label}} </Text>
            </View>
        </ProgressStep>
        </View>
    );
  }

console.log('start')
const mock_list = mocks.categories
console.log(mock_list)

export const MapScreen = (props) => {

    // state = {
    //     isValid: false,
    //     errors: 'are you sure?'
    // };
    
    // onNextStep = () => {
    //     if (!state.isValid) {
    //       setState({ errors: true });
    //     } else {
    //       setState({ errors: false });
    //     }
    // };

    const [activeStep, setActiveStep] = useState(0);

    const { shoppingListData } = useContext(ShoppingListContext);

    console.log(shoppingListData);

    return (
        <View style={styles.container}  >
            <Text style={{...styles.header, minHeight:20}}>MAP</Text>
                
          
            <ScrollView
                showsHorizontalScrollIndicator={true} horizontal={true}
                style={{ paddingLeft: 20, paddingRight: 40, flex: 1}}
            >
                {<ProgressSteps key={'PSKEY' + shoppingListData.length} style={{flex: 1}} removeBtnRow={true} activeStep={activeStep} >
                    {
                        ([...shoppingListData] || []).map((entry) => {
                            const { category: category_, count} = entry;
                            const category = {...category_};
                            return (
                            <ProgressStep key={category.id} label={category.name} 
                                onNext={() => Alert.alert('Please ensure that you have put the item into your cart')} 
                                removeBtnRow={true}
                                >
                                <View style={{ alignItems: 'center' }}>
                                <Text>{category.name}</Text>
                                </View>
                            </ProgressStep>);
                        })
                    }

                </ProgressSteps>}
            </ScrollView>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10}}>
                <Button
                        style={{ width: '40%'}}
                        onPress={() => {
                            if (activeStep == 0) {
                                return;
                            }
                            setActiveStep(activeStep - 1);
                        }}
                        title="Previous"
                    />
                <Button
                    style={{ width: '40%'}}
                    onPress={() => {
                        if (activeStep == shoppingListData.length - 1) {
                            return;
                        }
                        setActiveStep(activeStep + 1);
                    }}
                    title="Next"
                />
            </View>
            
            <Button
                // style={{flex: 1}}
                onPress={() => Alert.alert('in process')}
                title="Auto checkout"
            />

            <View style={{flex: 2}}>
                <Image size={200} soure={image} style={styles.image}/>
            </View>
        </View>
    )
};
    

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: "column",
        backgroundColor: 'transparent'
    },
    header: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center",
        marginVertical: 5,
        padding: 5,
        backgroundColor: 'gray',
    }
})