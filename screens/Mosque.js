import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';



import * as FireBase from 'firebase';
import { firebaseConfig } from './config'
import { set } from 'react-native-reanimated';
if (!FireBase.apps.length) {
    FireBase.initializeApp(firebaseConfig);
}
const db = FireBase.database();


export default function Mosque(props) {

    const [asr, setAsr] = useState('')
    const [dhuhar, setDhuhar] = useState('')
    const [fajar, setFajar] = useState('')
    const [isha, setIsha] = useState('')
    const [jumma, setJumma] = useState('')
    const [Magrib, setMagrib] = useState('')
    const [women, setWomen] = useState('')


    useEffect(() => {

        db.ref("Asar").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setAsr(snapshot.val());
        });
        db.ref("Dhuhar").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setDhuhar(snapshot.val())
        });
        db.ref("Fajar").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setFajar(snapshot.val())
        });
        db.ref("Isha").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setIsha(snapshot.val())
            //console.log(isha)
        });
        db.ref("Jumma").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setJumma(snapshot.val())
        });
        db.ref("Magrib").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setMagrib(snapshot.val())
        });
        db.ref("Women_Prayer").on('value', snapshot => {
            //console.log('User data: ', snapshot.val());
            setWomen(snapshot.val())
            //console.log(women)
        });


    }, [])

    const womenArea = (value) => {
        //console.log(value)
        if (value == 1) {
            return "Available"
        } else if (value == 0) {
            return "Not Available"
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/Masjid11.jpg')}
                style={{ height: 600, width: 462 }}>
                <View style={{ margin: 50 }}>
                    <Text style={{ fontSize: 25, color: 'white', left: 48, top: 50 }}>SZABIST Mosque</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 60 }}>Fajar          {fajar.Hours}:{fajar.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Duhar         {dhuhar.Hours}:{dhuhar.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Asar           {asr.Hours}:{asr.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Jumma      {jumma.Hours}:{jumma.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Mugrib       {Magrib.Hours}:{Magrib.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Isha            {isha.Hours}:{isha.Minutes}</Text>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 2 }}>Women Prayer Area : {womenArea(women)}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}