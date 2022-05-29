import React, { Component } from 'react'
import { View, Text, Platform, TextInput, Linking, ImageBackground, ScrollView, BackHandler, PermissionsAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { PROVIDER_GOOGLE } from 'expo';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';




export default class Map extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        showMap: false,
                        errorMsg: '',
                        latitude:     33.67737924792086, 
                        longitude:  73.06804228040166,
                        yLocation: ""
                }
        }
        callFun = async () => {
                try {
                        const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.CAMERA,
                                {
                                        title: "Location Permission",
                                        message:
                                                "Localized Prayer App needs access to your location. " +
                                                "So, you can find nearby mosques.",
                                        buttonNeutral: "Ask Me Later",
                                        buttonNegative: "Cancel",
                                        buttonPositive: "OK"
                                }
                        );
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                console.log("You can use the location");
                                if (Platform.OS === 'android' && !Constants.isDevice) {
                                        this.setState({
                                                errorMsg: 'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                                        });
                                        return;
                                }
                                let { status } = await Location.requestPermissionsAsync();
                                // let { status } = await Location.requestForegroundPermissionsAsync();
                                if (status !== 'granted') {
                                        this.setState({
                                                errorMsg: ('Permission to access location was denied')
                                        })
                                        return;
                                }

                                let location = await Location.getCurrentPositionAsync({});
                                //       alert(JSON.stringify(location))
                                console.log("asdaf", location.coords.latitude, "==", location.coords.longitude)
                                this.setState({
                                        latitude: location.coords.latitude,
                                        longitude: location.coords.longitude
                                })

                        } else {
                                console.log("Camera permission denied");
                        }
                } catch (err) {
                        console.warn(err);
                }


        }

        componentDidMount() {
                this.callFun()
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        }
        componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        }
        handleBackPress = async () => {
                this.setState({ showMap: false })
                return true;
        }
        openGoogleMap = () => {
                const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                const latLng = `${this.state.latitude},${this.state.longitude}`;
                const label = 'Custom Label';
                const url = Platform.select({
                        ios: `${scheme}${label}@${latLng}`,
                        android: `${scheme}${latLng}(${label})`
                });


                Linking.openURL(url);
        }

        render() {
                return (
                        (this.state.showMap) ?
                                <View style={{ flex: 1 }}>
                                        <View style={{ backgroundColor: '#FBFBFB', margin: 20 }}>
                                                <TextInput
                                                        placeholder="   Enter your manual location"
                                                        value={this.state.yLocation}
                                                        onChange={(e) => this.setState({ yLocation: e })}
                                                        keyboardType="number-pad"
                                                />
                                                <Text>-------------------------------------------------------------------------------</Text>
                                                <TextInput
                                                        value="  33.67737924792086, 73.06804228040166"
                                                />

                                                <Button mode="contained" onPress={() => this.openGoogleMap()} style={{ margin: 20 }}>
                                                        Search
                                                </Button>

                                        </View>
                                        <MapView
                                                style={{ flex: 1 }}
                                                loadingEnabled={true}
                                                loadingIndicatorColor="#666666"
                                                loadingBackgroundColor="#eeeeee"
                                                moveOnMarkerPress={false}
                                                showsUserLocation={true}
                                                showsCompass={true}
                                                showsPointsOfInterest={false}
                                                initialRegion={{
                                                        latitude: this.state.latitude,
                                                        longitude: this.state.longitude,
                                                        latitudeDelta: 1,
                                                        longitudeDelta: 1,
                                                }}
                                        >

                                                <MapView.Marker
                                                        coordinate={{
                                                                latitude: 33.67737924792086,
                                                                longitude: 73.06804228040166
                                                        }}
                                                        title={"SZABIST Mosque"}
                                                        description={"by Huzaifa and Shahab"}
                                                />
                                        </MapView>
                                </View>
                                :
                                <View style={{ flex: 1 }}>

                                        <ImageBackground source={require('../assets/Masjid11.jpg')}
                                                style={{ height: 600, width: 462 }}>

                                                <Text style={{ marginLeft: 130, fontSize: 22, marginTop: 25, fontWeight: 'bold', fontStyle: 'italic' }}>Nearby Mosques</Text>


                                                <ScrollView>

                                                        <View style={{ flexDirection: 'row', marginLeft: 7, marginTop: 30, borderWidth: 3, borderColor: 'black', borderRadius: 12, height: 70, width: '97%' }}>

                                                                <TouchableOpacity
                                                                onPress={()=>{this.props.navigation.navigate('mosqueList')}}>
                                                                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>SZABIST Mousque</Text>
                                                                </TouchableOpacity>

                                                                <TouchableOpacity onPress={() => this.setState({ showMap: true })}>
                                                                        <View style={{ width: 100, height: 45, marginLeft: 75, marginTop: 11, borderColor: 'black', backgroundColor: "blue", borderRadius: 8 }}>
                                                                                <Text style={{ marginLeft: 26, fontSize: 21, fontWeight: 'bold', marginTop: 5 }}>Map</Text>
                                                                        </View>
                                                                </TouchableOpacity>
                                                        </View>


                                                        {/* <View style={{flexDirection:'row',marginLeft:7,marginTop:15, borderWidth:3, borderColor:'black', borderRadius:12,height:70,width:'97%'}}>
                         <Text style={{fontSize:20, marginLeft:20,marginTop:20, fontWeight:'bold'}}>Shifa Hospital Mosque</Text>
                         <View style={{width:100, height:45, marginLeft:40,marginTop:11,borderColor:'black' ,backgroundColor:"blue",borderRadius:8}}>
                                 <Text style={{marginLeft:26, fontSize:21 ,fontWeight:'bold', marginTop:5 }}>Map</Text>
                         </View>
                    </View>

                    <View style={{flexDirection:'row',marginLeft:7,marginTop:15, borderWidth:3, borderColor:'black', borderRadius:12,height:70,width:'97%'}}>
                         <Text style={{fontSize:20, marginLeft:20,marginTop:20, fontWeight:'bold'}}>Jamia Masjid I-8/2</Text>
                         <View style={{width:100, height:45, marginLeft:73,marginTop:11,borderColor:'black' ,backgroundColor:"blue",borderRadius:8}}>
                                 <Text style={{marginLeft:26, fontSize:21 ,fontWeight:'bold', marginTop:5 }}>Map</Text>
                         </View>
                    </View> */}


                                                </ScrollView>

                                                {/* <View>
                     <ImageBackground source={require('../assets/Masjid11.jpg')}
                        style={{height:600, width:462}}>
                            <View style={{margin:50}}>
                            <Text style={{fontSize:25, color:'white', left:48, top:50}}>SZABIST Mosque</Text>
                            <Text style={{fontSize:20, color:'white', marginTop:60}}>Fajar           3:40</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Duhar         1:30</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Asar           5:00</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Jumma      0:00</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Mugrib       7:15</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Isha            8:15</Text>
                            <Text style={{fontSize:20, color:'white',marginTop:2}}>Women Prayer Area : Available</Text>
                            </View>
                        </ImageBackground>
                  </View> */}



                                        </ImageBackground>
                                </View>

                );
        }
}