import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HijriDate from 'hijri-date/lib/safe';
import colors from '../prayerDetails/Colors';

export default class Header extends React.Component {
    _formatDate = date => {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    _formatDateHijri = date => {
        var monthNames = [
            "Muharram", "Safar", "Rabi’ul Awwal",
            "Rabi’ul Akhir", "Jumadil Awwal", "Jumadil Akhir", "Rajab",
            "Sha’ban",   "Shawwal", "Ramadhan",
             "Dhual-hijjah", "Dhulqa’dah"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day-1 + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    render() {
        const today = this._formatDate(new Date());
        const hijriToday = this._formatDateHijri(new HijriDate());
        return (
            <View style={styles.container}>
                <Text style={styles.dateText}>{hijriToday} / {today}</Text>
                <Text style={styles.locationText}>{this.props.location}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 25
    },
    dateText: {
        fontSize: 16,
        color: colors.greyish_brown
    },
    locationText: {
        fontSize: 12,
        color: colors.brownish_grey
    }
})