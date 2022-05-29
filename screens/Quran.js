import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, } from 'react-native'

export default class Quran extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/Quran9.jpg')}
                    style={{ height: Dimensions.get('window').height, width: "100%" }}>

                    <Text style={{ fontSize:20,marginLeft:100,color: '#B6BFBC', marginTop:10 }}>We are working on it</Text>
                </ImageBackground>
           </View>
        );
    }
}