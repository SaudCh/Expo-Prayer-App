import { View, Text, TextInput, Button, ToastAndroid, ImageBackground } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios'


export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        }
    }


    register = () => {
        axios.post("http://192.168.1.5:8000/api/register", {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            name: this.state.fullname,
        })
            .then(response => { console.log(response.data) })
            .catch(error => {
                console.log(error);
            })
    }

    showToast = () => {
        ToastAndroid.show("User Registered", ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <ImageBackground source={require("./assets/register1.jpg")} style={{height:"100%"}}>
                <Text style={{ marginTop: 30, fontSize: 30, marginLeft: 70}}>Localized Prayer App</Text>
                <Text style={{ fontSize: 22, marginTop: 20, color: "black", fontWeight: "bold", textAlign: "center" }}>Sign up to see prayer timings and more</Text>
                <View style={{ flexDirection: "row" }}>
                    <Entypo name="facebook" size={28} color="blue" style={{ marginTop: 20, marginLeft: 85 }} />
                    <Text style={{ fontWeight: "bold", alignItems: "center", marginTop: 24, fontSize: 17, marginLeft: 10, color: "blue" }}>Login with Facebook</Text>
                </View>
                <Text style={{ fontSize: 22, marginTop: 15 }}>              ----------------- OR -----------------</Text>
                <TextInput placeholder=" Mobile Number or Email"  placeholderTextColor="black"  fontWeight="bold" style={{ marginLeft: 20, height: 50, width: 350, marginTop: 30, fontSize: 18, borderWidth: 1, borderColor: "black", borderRadius: 3, textShadowColor: "black", paddingLeft: 10 }}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}

                />
                <TextInput placeholder=" Full Name"    placeholderTextColor="black" fontWeight="bold" style={{ marginLeft: 20, height: 50, width: 350, marginTop: 10, fontSize: 18, borderWidth: 1, borderColor: "black", borderRadius: 3, textShadowColor: "black", paddingLeft: 10 }}
                    onChangeText={fullname => this.setState({ fullname: fullname })}
                    value={this.state.fullname}
                />
                <TextInput placeholder=" Username"   placeholderTextColor="black" fontWeight="bold" style={{ marginLeft: 20, height: 50, width: 350, marginTop: 10, fontSize: 18, borderWidth: 1, borderColor: "black", borderRadius: 3, textShadowColor: "black", paddingLeft: 10 }}
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username} />
                <TextInput placeholder=" Password"   placeholderTextColor="black" fontWeight="bold" style={{ marginLeft: 20, height: 50, width: 350, marginTop: 10, fontSize: 18, borderWidth: 1, borderColor: "black", borderRadius: 3, textShadowColor: "black", paddingLeft: 10 }}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password} />
                <View style={{ height:70, width: 350, marginTop: 20, marginLeft: 20,fontSize: 50,borderRadius:2,}}>
                    <Button title="Sign up"

                        onPress={() => {
                            this.showToast();
                            this.register();
                        }} />

                </View>
                <Text style={{ fontSize: 18, marginTop: -7, marginLeft: 30, justifyContent: "center", alignItems: "center", marginRight: 10, color: "black", textAlign: "center" }}>By signing up, you agree to our <Text style={{ fontWeight: "bold" }}>Terms</Text>  & <Text style={{ fontWeight: "bold" }}>Privacy Policy.</Text> </Text>
                </ImageBackground>
            </View>
        )
    }


}