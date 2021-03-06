import React, { Component, useContext, useState, useRef, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Geolocation from 'react-native-geolocation-service';
import Svg, { Circle } from 'react-native-svg';

import { mocks } from '../constants';
import { ShoppingListContext } from '../context/shoppingListContext';
import { drawPath, drawPlannedPath, iconPositions } from '../tools/lineHelper';
import { planShopping } from '../tools/mapHelper';
import { ensurePermission } from '../tools/permissionHelper';
import { useNavigation } from '@react-navigation/native';
import { SmallCamera } from './camera';


// const image = require("../../images/map_v1.jpg");
const image = require("../../images/map_v2.jpg");

function Shoppingprogess({ label }) {
    return (
        <View >
            <ProgressStep label={{ lable }} onNext={() => Alert.alert('Please ensure that you have put the item into your cart')} removeBtnRow={false}>
                {/* <View style={{ alignItems: 'center' }}>
            <Text>This is the content within {{label}} </Text>
            </View> */}
            </ProgressStep>
            <Text style={{ alignItems: 'center' }}>This is the content within {{ label }} </Text>
        </View>
    );
}

// console.log('start')
const mock_list = mocks.categories
// console.log(mock_list)

export const MapScreen = (props) => {

    const navigation = useNavigation();

    const [activeStep, setActiveStep] = useState(0);

    const [mapWidth, setMapWidth] = useState(100);
    const [mapHeight, setMapHeight] = useState(100);
    const [mapResized, setMapResized] = useState(false);

    const [mapLines, setMapLines] = useState(null);

    const [isPermissionChecked, setIsPermissionChecked] = useState(false);

    let { shoppingListData, location } = useContext(ShoppingListContext);

    const shoppingMapImage = useRef(null);

    const [iconCur, setIconPosition] = useState(null);

    const [isPromptShown, setIsPromptShown] = useState(false);

    useEffect(() => {
        async function getPermission() {
            if (isPermissionChecked) {
                return;
            }
            const granted = await ensurePermission();
            if (granted) {
                setIsPermissionChecked(true);
            }
        }
        getPermission();

        if (shoppingListData.length - 1 < activeStep) {
            let activeStep = shoppingListData.length - 1;
            setActiveStep(activeStep < 0 ? 0 : activeStep);
        }
       
    }, [shoppingListData]);

    useEffect(() => {
        if (!mapResized) {
            return;
        }


        if (!sortedShoppingListData) {
            return;
        }

        const goalAnchors = sortedShoppingListData.map(({ category }) => category.location);

        if (goalAnchors.length > activeStep) {
            const nextgoalAnchor = goalAnchors[activeStep];
            // const allLines = drawPlannedPath(goalAnchors, mapWidth, mapHeight);

            // const linesToNextStep = drawPath(location, nextgoalAnchor, mapWidth, mapHeight);
            const futureSteps = goalAnchors.slice(activeStep);
            const linesFuture = drawPlannedPath(futureSteps, mapWidth, mapHeight, location, '#669df6');
            const linesCurrentStepToComplete = drawPlannedPath(goalAnchors, mapWidth, mapHeight);
            setMapLines(linesCurrentStepToComplete.concat(linesFuture));
        }

    }, [shoppingListData, mapWidth, mapHeight, location, activeStep]);

    useEffect(() => {
        if (!!location) {
            let icons = iconPositions(location, mapWidth, mapHeight);
            setIconPosition(icons);
        }
    }, [mapWidth, mapHeight, location])


    useEffect(() => {
        console.log('isPermissionChecked', isPermissionChecked);
        if (!isPermissionChecked) {
            return;
        }
    }, [isPermissionChecked]);

    let sortedShoppingListData = null
    if (shoppingListData && shoppingListData.length > 0) {
        sortedShoppingListData = planShopping(shoppingListData);
    }

    useEffect(() =>{
        console.log('debug', location);

        if (isPromptShown || !sortedShoppingListData) {
            return;
        }

        if (!mocks.productToLocationReverseMap[location]) {
            return;
        }
        
        const closeItems = mocks.productToLocationReverseMap[location];

        const targetShoppingListItem = sortedShoppingListData[limitedActiveStep];
        const { id: targetShoppingItemId } = targetShoppingListItem.category;

        console.log('targetShoppingItemId', targetShoppingItemId)
        // console.log('goalAnchors', shoppingListData[shoppingListData.length -1].category.id)

        for (let item of closeItems) {
            if (item == targetShoppingItemId) {
                Alert.alert(`You are now near ${item}, make sure you have put it into the cart.`, undefined, 
                    [ 
                        {text: 'OK', onPress: () => {
                            setActiveStep(activeStep + 1);
                            setIsPromptShown(false);
                        }}
                    ]
                );
                setIsPromptShown(true);
                break;
            }
        }

    },  [sortedShoppingListData, location, limitedActiveStep]);

    let pre_position = [];

    // console.log('shoppingMapImage');

    window.shoppingMapImage = shoppingMapImage;

    const ImageBackgroundOnLayout = (event) => {
        const layout = event.nativeEvent.layout;
        console.log(event.nativeEvent.layout);

        setMapWidth(layout.width);
        setMapHeight(layout.height);
        setMapResized(true);
    }

    if (!shoppingListData || shoppingListData.length == 0 || !sortedShoppingListData || activeStep == undefined) {
        return (
            <View style={styles.container}  >
                <Text style={{ ...styles.header, minHeight: 20 }}>MAP</Text>
                <Text style={{ ...styles.text }}>You do not have shopping list yet. You can view the map without navigation </Text>
                <View style={{ ...styles.container, flex: 5 }}>
                    <ImageBackground source={image} style={{ ...styles.image, height: "80%" }}>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    let limitedActiveStep = Math.min(shoppingListData.length - 1, activeStep);

    return (
        <View key={'PSKEY' + shoppingListData.length} style={styles.container}  >
            <Text style={{ ...styles.header, minHeight: 20 }}>MAP</Text>
            <ScrollView
                showsHorizontalScrollIndicator={true} horizontal={true}
                automaticallyAdjustContentInsets={true}
                style={{ paddingLeft: 10, paddingRight: 10, flex: 1, minHeight: 10}}
            >
                {/* <TouchableOpacity
                    onPress={() => {
                        if (activeStep == shoppingListData.length - 1) {
                            Alert.alert('You have gotten all items, Please take your phone and checkout');
                            return;
                        }
                        setActiveStep(activeStep + 1);
                        Alert.alert('Please ensure that you have put the item into your cart');
                    }}>
                    <Text style={{ width: '10%', color: "white" }}> N </Text>
                </TouchableOpacity> */}
                {<ProgressSteps key={'PSKEY' + shoppingListData.length} style={{ flex: 2 }} removeBtnRow={true} activeStep={limitedActiveStep} 
                    activeLabelColor = "#E63F5D" activeStepIconBorderColor ="#E63F5D" completedProgressBarColor ="gray" completedStepIconColor='gray'
                    activeLabelColor = "#E63F5D">
                    {
                        ([...sortedShoppingListData] || []).map((entry) => {
                            const { category: category_, count } = entry;

                            const category = { ...category_ };
                            return (
                                <ProgressStep key={category.id} label={category.name}
                                    onNext={() => Alert.alert('Please ensure that you have put the item into your cart')}
                                    removeBtnRow={true}
                                >
                                    <Text style={{color:"#E63F5D"}} >{category.name}</Text>
                                </ProgressStep>);
                        })
                    }

                </ProgressSteps>}

            </ScrollView>
{/* 
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}> */}
                {/* <Button
                        style={{ width: '40%'}}
                        onPress={() => {
                            if (activeStep == 0) {
                                return;
                            }
                            setActiveStep(activeStep - 1);
                            Alert.alert('Please ensure that you have put the item into your cart');
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
                        Alert.alert('Please ensure that you have put the item into your cart');
                    }}
                    title="Next"
                /> */}

            {/* </View> */}

            <View style={{ ...styles.container, flex: 5 }}>
                <ImageBackground ref={shoppingMapImage}
                    source={image}
                    style={{ ...styles.image }}
                    imageStyle={{ resizeMode: 'stretch' }}
                    onLayout={ImageBackgroundOnLayout}>
                    <Svg height={mapHeight} width={mapWidth} style={{ position: 'absolute', top: 0 }}>
                        {mapLines}
                        {/* <Circle cx="50" cy="50" r="5" fill="red" /> */}
                    </Svg>
                    {iconCur}
                </ImageBackground>
            </View>

            {/*Real-time Detecion*/}
            <SmallCamera />

            {/*For Test and Demo */}
            <View style={styles.btn}>
              <Button
                title="See Camera Detection (For Demo)"
                color = "#E63F5D"
                onPress={() => navigation.navigate('CameraTest')}
              />
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: "column",
        justifyContent: 'center',
        // backgroundColor: 'transparent'
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
        textAlign: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        marginVertical: 2,
        padding: 2,
        backgroundColor: 'lightgray',
    },
    icon: {
        textAlign: "right",
        justifyContent: "flex-start"
    },
    btn: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
})