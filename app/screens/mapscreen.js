import React, { Component, useContext, useState, useRef } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ScrollView, ImageBackground } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { mocks } from '../constants';
import { ShoppingListContext } from '../context/shoppingListContext';
import Svg, { Line } from 'react-native-svg';
import { AnimatedSVGPaths } from 'react-native-svg-animations';
import ds from '../context/d';
import { drawLine, drawPath} from '../tools/lineHelper'

const image = require("../../images/map_v1.jpg");

function Shoppingprogess({ label }) {
    return (
        <View >
        <ProgressStep label={{lable}} onNext={() => Alert.alert('Please ensure that you have put the item into your cart')} removeBtnRow={false}>
            {/* <View style={{ alignItems: 'center' }}>
            <Text>This is the content within {{label}} </Text>
            </View> */}
        </ProgressStep>
            <Text style={{ alignItems: 'center' }}>This is the content within {{label}} </Text>
        </View>
    );
  }

// console.log('start')
const mock_list = mocks.categories
// console.log(mock_list)

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

    const [mapWidth, setMapWidth] = useState(100);

    const [mapHeight, setMapHeight] = useState(100);

    const { shoppingListData } = useContext(ShoppingListContext);
    
    const shoppingMapImage = useRef(null);

    console.log('shoppingMapImage', shoppingMapImage.current);

    window.shoppingMapImage = shoppingMapImage;

    const ImageBackgroundOnLayout = (event) => {
        const layout = event.nativeEvent.layout;
        console.log(event.nativeEvent.layout);

        setMapWidth(layout.width);
        setMapHeight(layout.height);
    }


    // const path = "M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z";

    if (shoppingListData.length == 0) {
        return (
            <View style={styles.container}  >
                <Text style={{...styles.header, minHeight:20}}>MAP</Text>
                <Text style={{...styles.text}}>You do not have shopping list yet. You can view the map without navigation </Text>
                <View style={{...styles.container,flex: 5}}>
                    {/* <Image source={image} style={{...styles.image, width: "100%", height: "100%"}}/> */}
                    <ImageBackground source={image} style={{...styles.image, height: "80%"}}>
                        <Svg height="100" width="100">
                            <Line x1="0" y1="0" x2="0" y2="10" stroke="red" strokeWidth="10" />
                        </Svg>
                    </ImageBackground>

                    {/* <AnimatedSVGPaths
                        strokeColor={"green"}
                        duration={500}
                        strokeWidth={10}
                        strokeDashArray = {[42.76482137044271, 42.76482137044271]}
                        height={400}
                        width={400}
                        scale={0.75}
                        delay={100}
                        d={path}
                        loop={false}
                    /> */}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}  >
            <Text style={{...styles.header, minHeight:20}}>MAP</Text>
                
            <ScrollView
                showsHorizontalScrollIndicator={true} horizontal={true}
                automaticallyAdjustContentInsets= {true}
                style={{ paddingLeft: 20, paddingRight: 40, flex: 1}}

                
            >
                {<ProgressSteps key={'PSKEY' + shoppingListData.length} style={{flex: 2}} removeBtnRow={true} activeStep={activeStep} >
                    {
                        ([...shoppingListData] || []).map((entry) => {
                            const { category: category_, count} = entry;

                            const category = {...category_};
                            return (
                            <ProgressStep key={category.id} label={category.name} 
                                onNext={() => Alert.alert('Please ensure that you have put the item into your cart')} 
                                removeBtnRow={true}
                                >
                                <Text>{category.name}</Text>
                                {/* </View> */}
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
                />
            </View>
            

            <View style={{...styles.container,flex: 5}}>
                <ImageBackground ref={shoppingMapImage} source={image} style={{...styles.image, height: "100%"}} onLayout={ImageBackgroundOnLayout}>
                    <Svg height={mapHeight} width={mapWidth} style={{position:'absolute', top: 0}}>
                        <Line x1="0" y1="0" x2="0" y2="10" stroke="red" strokeWidth="10" />
                        {drawPath('ZZ', 'BB', mapWidth, mapHeight)}
                    </Svg>
                </ImageBackground>
                {/* <Image source={image} style={{...styles.image, width: "100%", height: "100%"}}/> */}
            </View>

            <Button
                // style={{flex: 1}}
                onPress={() => Alert.alert('in process')}
                title="Auto Navigation"
            />

            {/* <ImageBackground size={200} source={image} style={{...styles.image, width: 500}}>
                <Text  style={styles.text}> temp map </Text>
            </ImageBackground> */}
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
    }
})