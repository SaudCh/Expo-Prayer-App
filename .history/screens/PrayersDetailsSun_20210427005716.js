import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from '../prayerDetails/Header';
import PrayTimeLists from '../prayerDetails/PrayerTimeLists';
import colors from '../prayerDetails/Colors';


const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Islamabad',
    coord: [33.6844, 73.0479]
  },
  {
    key: 2,
    label: 'Karachi',
    coord: [24.8607, 67.0011]
  },
  {
    key: 3,
    label: 'Lahore',
    coord: [31.5204, 74.3587]
  },
  {
    key: 4,
    label: 'Rawalpindi',
    coord: [33.5651, 73.0169]
  },
  {
    key: 5,
    label: 'Quetta',
    coord: [30.1798, 66.9750]
  },
  {
    key: 6,
    label: 'Faisalabad',
    coord: [31.4504, 73.1350]
  },
  {
    key: 7,
    label: 'Peshawar',
    coord: [34.0151, 71.5249]
  },
  {
    key: 8,
    label: "Gilgit",
    coord: [35.920834, 74.308334]
  },
  {
    key: 9,
    label: "Bahawalpur",
    coord: [29.143644, 71.257240]
  },
  {
    key: 10,
    label: "Gujranwala",
    coord: [31.976515, 74.222015]
  },
  {
    key: 11,
    label: "Toba Tek Singh",
    coord: [30.767956, 72.437813]
  },
  {
    key: 12,
    label: "Jacobabad",
    coord: [28.281891, 68.438171]
  },
  {
    key: 13,
    label: "Sahiwal",
    coord: [30.677717, 73.106812]
  },
  {
    key: 14,
    label: "Narowal",
    coord: [32.337006, 74.903336]
  },
  {
    key: 15,
    label: "Khanewal",
    coord: [30.286415, 71.932030]
  },
  {
    key: 16,
    label: "Multan",
    coord: [30.181459, 71.492157]
  },
  {
    key: 17,
    label: "Mirpur, Azad Kashmir",
    coord: [33.148392, 73.751770]
  },

  {
    key: 18,
    label: "Nawabshah",
    coord: [26.244221, 68.410034]
  },
  {
    key: 19,
    label: "Dera Ghazi Khan",
    coord: [30.032486, 70.640244]
  },
  {
    key: 20,
    label: "Larkana",
    coord: [27.563993, 68.215134]
  },
  {
    key: 21,
    label: "Malakwal",
    coord: [32.555496, 73.194351]
  },
  {
    key: 22,
    label: "Haveli Lakha",
    coord: [30.448601, 73.697578]
  },
  { key: 23, label: "Jalalpur Pirwala", coord: [29.505283, 71.222084] },
  { key: 24, label: "Nowshera", coord: [34.015858, 71.975449] },
  { key: 25, label: "Hafizabad", coord: [32.071697, 73.685730] },
  { key: 26, label: "Vehari", coord: [30.045246, 72.348869] },
  { key: 27, label: "Okara", coord: [30.808500, 73.459396] },
  { key: 28, label: "Attock", coord: [33.768051, 72.360703]},
  { key: 29, label: "Abbottabad", coord: [34.168751, 73.221497] },
  { key: 30, label: "Mandi Bahauddin", coord: [32.588169, 73.497345] },
  { key: 31, label: "Karak", coord: [33.115269, 71.095535] },
  { key: 32, label: "Muzaffargarh", coord: [30.074377, 71.184654] },
  { key: 33, label: "Shikarpur", coord: [27.955648, 68.637672] },
  { key: 34, label: "Khairpur", coord: [27.529951, 68.758141] },
  { key: 35, label: "Kamoki", coord: [31.975508, 74.223801] },

]

export default class PrayerDetailsSun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: prayTimes.getTimes(new Date(), locations[0].coord, 'auto', '12h'),
      locationSelected: locations[0]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header location={this.state.locationSelected.label} />
        <ModalSelector
          style={styles.locationSelector}
          data={locations}
          initValue="Islamabad"
          onChange={(option) => {
            this.setState({
              times: prayTimes.getTimes(new Date(), option.coord, 'auto', '12h'),
              locationSelected: option
            })
          }} />

        <PrayTimeLists times={this.state.times} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pale_grey,
    padding: 30,
  },
  configContainer: {
    alignItems: 'flex-end',
    paddingBottom: 15
  },
  locationSelector: {
    marginBottom: 10
  }
});
