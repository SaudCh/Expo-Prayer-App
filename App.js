import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Login from './Login';
import Register from './Register';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import Map from './screens/Map';
import Mosque from './screens/Mosque'
import Qibla from './screens/Qibla';
import Ibadat from './screens/Ibadat'
import PrayerDetailsSun from './screens/PrayersDetailsSun'
import MapScreen from './screens/MapScreen'
import Quran from './screens/Quran';


const Stack = createStackNavigator();
const bottomTabs = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <bottomTabs.Navigator>
      <bottomTabs.Screen name="home" component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (<Entypo name="home" size={24} color="black" />)
        }} />
      <bottomTabs.Screen name="map" component={Map}
        options={{

          tabBarLabel: "Map",
          tabBarIcon: () => (<MaterialCommunityIcons name="map-marker" size={26} color="black" />)
        }} />
      <bottomTabs.Screen name="mosque" component={Mosque}
        options={{
          tabBarLabel: "Mosque",
          tabBarIcon: () => (<FontAwesome5 name="mosque" size={18} color="black" />)
        }} />
    </bottomTabs.Navigator>
  )
}

function mainScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <SimpleLineIcons name="home" size={24} color="black" />

        }} />
      <Drawer.Screen name="Settings" component={Settings}
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => <SimpleLineIcons name="settings" size={24} color="black" />
        }} />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerLabel: "Profie",
          drawerIcon: () => <SimpleLineIcons name="user" size={24} color="black" />
        }} />
    </Drawer.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="mainScreen" component={mainScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="ToHome" component={Home} />
        <Stack.Screen name="quran" component={Quran} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="qibla" component={Qibla} />
        <Stack.Screen name="ibadat" component={Ibadat} />
        <Stack.Screen name="sun_PrayerDetails" component={PrayerDetailsSun} />
        <Stack.Screen name="mapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
