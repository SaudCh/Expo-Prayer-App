import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../prayerDetails/Colors';


export default class PrayTimeItems extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.prayName}>{this.props.name}</Text>
                    <Text style={styles.prayTime}>{this.props.time}</Text>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginBottom: 2,
    },
    prayName: {
        fontSize: 15,
        color: colors.brownish_grey
    },
    prayTime: {
        fontSize: 17,
        color: colors.brownish_grey
    },
    icon: {
        width: 35,
        height: 30
    }
})