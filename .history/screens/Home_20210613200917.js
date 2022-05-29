import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [
        {

          prayer_image: require("../assets/fajaaar.jpg"),
          prayer_time: "3:30 AM",
          prayer_name: "Fajar"
        },
        {

          prayer_image: require("../assets/duhar.jpg"),
          prayer_time: "1:30 PM",
          prayer_name: "Duhar"
        },
        {

          prayer_image: require("../assets/asar.jpg"),
          prayer_time: "5:00 PM",
          prayer_name: "Asar"
        },
        {

          prayer_image: require("../assets/mugrib.jpg"),
          prayer_time: "7:10 PM",
          prayer_name: "Mugrib"
        },
        {

          prayer_image: require("../assets/isha.jpg"),
          prayer_time: "8:30 PM",
          prayer_name: "Isha"
        }
      ]
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 140, backgroundColor: "gray" }}>

          <View style={{ flexDirection: "row", height: 120, margin: 10, backgroundColor: "white", borderRadius: 15 }}>

            <View>
              <ScrollView horizontal={true}>
                <View >
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('quran') }}>
                    <Image style={{ height: 60, width: 60, margin: 10, borderRadius: 35, marginTop: 19 }} source={require("../assets/Quran.png")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 20, marginBottom: 20, fontWeight: "bold" }}>Quran</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('ibadat') }}>
                    <Image style={{ height: 70, width: 70, margin: 10, borderRadius: 35 }} source={require("../assets/ibadat.png")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 17, marginBottom: 40, fontWeight: "bold" }}>Ibadat</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('sun_PrayerDetails', {
                        method: 0,
                      })
                    }}>
                    <Image style={{ height: 70, width: 70, margin: 10, borderRadius: 35 }} source={require("../assets/sun.png")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 25, marginBottom: 40, fontWeight: "bold" }}>Shafi</Text>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('sun_PrayerDetails', {
                        method: 1,
                      })
                    }}>
                    <Image style={{ height: 70, width: 70, margin: 10, borderRadius: 35 }} source={require("../assets/sun.png")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 25, marginBottom: 40, fontWeight: "bold" }}>Hanfi</Text>
                </View>


                <View>
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("qibla") }}>
                    <Image style={{ height: 70, width: 70, margin: 10, borderRadius: 35 }} source={require("../assets/qibla.jpg")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 20, marginBottom: 40, fontWeight: "bold" }}>Qibla</Text>

                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("mapScreen") }}>
                    <Image style={{ height: 70, width: 70, margin: 10, borderRadius: 35 }} source={require("../assets/location.jpg")}></Image>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 7, marginBottom: 40, fontWeight: "bold" }}>Location</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ height: 500, backgroundColor: "gray" }}>
            <View style={{ height: 480, margin: 10, backgroundColor: "white", borderRadius: 15 }}>
              <View style={{ flexDirection: "row" }}>
                <Image style={{ height: 90, width: 70, borderRadius: 35 }} source={require("../assets/clock.jpg")}></Image>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, marginLeft: 10 }}>Prayer Timings</Text>
                  <Text style={{ marginLeft: 10 }}>Get Accurate Salah Timings</Text>
                </View>
              </View>
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row", paddingRight: 10 }}>
                  {this.state.home.map(element => (
                    <View>
                      <ImageBackground style={{ height: 180, width: 160, marginLeft: 15 }} source={element.prayer_image} >
                        <Text style={{ fontSize: 25, marginLeft: 30, marginTop: 120, color: "white" }}>{element.prayer_time}</Text>
                      </ImageBackground>
                      <Text style={{ marginTop: 10, fontSize: 20, marginLeft: 60, fontFamily: "serif" }}>{element.prayer_name}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>

          </View>
        </ScrollView>
        {/* <View style={{ height: 20 }}>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate("login") }}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}