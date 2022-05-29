import React from 'react';
import { View } from 'react-native';
import PrayTimeItem from '../prayerDetails/PrayerTimeItems';
import prayNames from '../prayerDetails/PrayerNames';


export default class PrayTimeLists extends React.Component {
    render() {
        const lists = Object.keys(this.props.times).map(key => {
            const _name = prayNames[key];
            if (key === "midnight") {
                return;
            }
            return <PrayTimeItem key={key} name={_name} time={this.props.times[key]} />
        })
        return (
            <View>
                {lists}
            </View>
        )
    }
}

