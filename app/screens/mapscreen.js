import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert } from 'react-native';


export const MapScreen =(props) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MAP</Text>
            <Button
                onPress={() => Alert.alert('in process')}
                title="Auto checkout"
            />
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})