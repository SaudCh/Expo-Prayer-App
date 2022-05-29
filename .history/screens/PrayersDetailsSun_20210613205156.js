import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';


import { cities } from './cities'

const PRAYER_API_URL = 'http://api.aladhan.com/v1/calendarByCity?'


export default function App(props) {

  const [data, setData] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState('Lahore')
  const d = new Date();
  const date = d.getDate() - 1;

  const timeFormat = (time) => {
    //console.log(time)
    var hour;
    var mint;
    var zone = 'AM';
    hour = (time.substring(0, 2))
    if (hour >= 12) {
      zone = 'PM'
    }
    if (hour != 12) {
      hour = (hour) % 12
    }

    mint = time.substring(3, 5)
    return (hour + ":" + mint + " " + zone)
  }
  const zawalTime = (time) => {
    var hour;
    var mint;
    var zone = 'AM';
    hour = (time.substring(0, 2)) + 6
    if (hour >= 12) {
      zone = 'PM'
    }
    if (hour != 12) {
      hour = (hour) % 12
    }

    mint = parseInt(time.substring(3, 5)) + 40
    if (mint >= 60) {
      hour = hour + 1
    }
    mint = mint % 60
    var string1 = (hour + ":" + mint + " " + zone)
    return ("Starts From " + string1)
  }

  const { method } = props.route.params;


  useEffect(() => {
    load()
  }, [city]);


  async function load() {
    try {

      const apiURL = `${PRAYER_API_URL}city=${city}&country=Pakistan&method=${method}`
      const response = await fetch(apiURL)
      const result = await response.json()

      if (response.ok) {
        setData(result)
        //console.log(result.data[date - 1].date.readable)
        //console.log(data.data[0].date.hijri)
      } else {
        console.log(error.message)
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  const changeCity = (value) => {
    //console.log(value)
    setCity(value)
    //load()
    setModalVisible(false)

  }
  if (data) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={{ fontSize: 20 }}>{data.data[date].date.hijri.day} {data.data[date].date.hijri.month.en} {data.data[date].date.hijri.year} / {data.data[date].date.readable}</Text>
          <Text style={{ fontSize: 20 }}>{city}</Text>
        </View>
        <View>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ ...styles.button }}>
            <Text>{city}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView >

          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Imsak</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Imsak)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Fajar</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Fajr)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Sunrise</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Sunrise)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Zawal</Text>
            <Text style={{ ...styles.text }}>{zawalTime(data.data[date].timings.Sunrise)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Duhar</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Dhuhr)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Asr</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Asr)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Sunset</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Sunset)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Maghrib</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Maghrib)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Ishaa</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Isha)}</Text>
          </View>
          <View style={{ ...styles.timing }}>
            <Text style={{ ...styles.text }}>Mid Night</Text>
            <Text style={{ ...styles.text }}>{timeFormat(data.data[date].timings.Midnight)}</Text>
          </View>

        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >

          <View style={{ marginHorizontal: 20 }}>
            <View style={{ backgroundColor: 'rgba(192,192,192,0.9)', marginBottom: 150 }}>
              <Text style={{ fontSize: 20, alignSelf: 'center', paddingBottom: 20 }}>Select City</Text>
              <FlatList
                data={cities}
                keyExtractor={(item, index) => item.key}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => changeCity(item.Name)}
                    style={{ ...styles.city }}
                  >
                    <Text style={{ color: '#4185f6', fontSize: 20 }}>{item.Name}</Text>
                  </TouchableOpacity>
                )}
              />

            </View>
            <Pressable
              style={{ backgroundColor: 'rgba(192,192,192,0.9)', ...styles.cancelBtn }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>

        </Modal>
      </View>
    );
  } else {
    return (
      <View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 30,
    backgroundColor: '#edeff1',
    margin: 2,
    flex: 1
  },
  timing: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 2,
    elevation: 5,
    paddingLeft: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 17
  },
  button: {
    marginVertical: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20
  },
  cancelBtn: {
    marginTop: 10,
    marginVertical: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
  city: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'rgba(192,192,192,0.9)'
  }
});
