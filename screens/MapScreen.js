import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import Map from './Map'

export default class MapScreen extends Component{
    render(){
        return(
           <SafeAreaView forceInset={{top: 'always'}}>
               <Map/>
             </SafeAreaView>
        );
    }
}