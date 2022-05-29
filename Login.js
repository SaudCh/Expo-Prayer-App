import React, { Component } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import axios from 'axios';


export default class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this._loadInitialState();
    }

    async _loadInitialState() {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate("home");
        }
    }

    // login = () => {

    //     axios.post('http://192.168.1.6:8000/api/login', {
    //         email: this.state.email,
    //         password: this.state.password

    //     })

    //         .then(res => {
    //             if (res.data.success) {
    //                 AsyncStorage.setItem('user', res.data.user);
    //                 this.props.navigation.navigate("mainScreen");
    //             }
    //             else {
    //                 alert("Not matching credentials");
    //             }
    //        })

    // }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require("./assets/login.jpg")} style={{ height: "100%" }}>
                    <Text style={{ fontSize: 25, marginLeft: 85, marginTop: 190, color: "black", fontWeight: "bold" }}>Localized prayer App</Text>
                    <View style={{ marginLeft: 125, marginTop: 50 }}>
                        <TextInput placeholder="Email" placeholderTextColor="black" fontWeight="bold"
                            style={{ marginTop: 10, borderWidth: 1, borderColor: "black", borderRadius: 4, height: 30, fontSize: 20, paddingLeft: 10, width: 170, color: "black" }}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}></TextInput>
                        <TextInput placeholder="Password" placeholderTextColor="black" fontWeight="bold"
                            style={{ borderWidth: 1, marginTop: 15, borderColor: "black", width: 170, height: 30, fontSize: 20, borderRadius: 4, paddingLeft: 10, color: "black"}}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}></TextInput>
                        <View style={{ height:20, width:60, marginTop:15,  }}>
                            <Button
                                title="Login"
                                color="#2F2FA2"
                                onPress={() => {
                                    this.props.navigation.navigate("mainScreen")  //remove only this line {this.props.navigate("mainscreen")} if you want to run axios.
                                  //this.login(); // uncomment this line for running axios
                                }}/>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, color: "black", marginLeft: 80, marginTop: 70 }}>Not Regeistered?</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("register")}}>
                        <Text style={{ fontSize: 18, color: "black", marginLeft: 80, fontWeight: "bold", textDecorationLine: "underline" }}>Register Now!</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}