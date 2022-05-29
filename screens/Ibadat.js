import React, { Component } from 'react'
import {View, Text, Image, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Ibadat extends Component{
   render(){
       return(
 <View style={{flex:1}}>
    <ScrollView>
     <View>
         <Text style={{fontWeight:"900",alignSelf:"center",color:"#953EA5" ,marginTop:30, fontSize:30}}>Dua and Azkar</Text>
      <Image source={require("../IbadatAssets/4.png")}
            style={{height:500, width:"100%",marginTop:20}}></Image>

             <Image source={require("../IbadatAssets/7.png")}
            style={{height:500, width:"100%",marginTop:20}}></Image>

             <Image source={require("../IbadatAssets/2.png")}
            style={{height:500, width:"100%",marginTop:0, resizeMode:"contain"}}></Image>

             <Image source={require("../IbadatAssets/1.png")}
            style={{height:500, width:"100%",marginTop:10}}></Image>

             <Image source={require("../IbadatAssets/8.png")}
            style={{height:500, width:"100%",marginTop:20}}></Image>

             <Image source={require("../IbadatAssets/3.png")}
            style={{height:500, width:"100%",marginTop:20, resizeMode:"contain"}}></Image>

             <Image source={require("../IbadatAssets/5.png")}
            style={{height:500, width:"100%",marginTop:20}}></Image>

             <Image source={require("../IbadatAssets/6.png")}
            style={{height:500, width:"100%",marginTop:20, resizeMode:"contain"}}></Image>

             <Image source={require("../IbadatAssets/9.png")}
            style={{height:500, width:"100%",marginTop:20, resizeMode:"contain"}}></Image>

             <Image source={require("../IbadatAssets/10.png")}
            style={{height:500, width:"100%",marginTop:20, resizeMode:"contain"}}></Image>

             <Image source={require("../IbadatAssets/11.png")}
            style={{height:500, width:"100%",marginTop:20}}></Image>


     </View>
     </ScrollView>
 </View>
       );
   }
}