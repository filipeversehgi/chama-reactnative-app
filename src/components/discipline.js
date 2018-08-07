import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RadialProgress from './radial-progress';
import Ripple from 'react-native-material-ripple';

import {
    getPastClasses,
    getAttendedClasses,
    getPercentage } from '../utils/class-utils';

class Discipline extends Component {

    handleClick() {
        this.props.onClick();
    }

    render() {
        const discipline = this.props.discipline;
        console.log(discipline);

        return (
            <Ripple rippleOpacity={0.2} onPress={this.handleClick.bind(this)}>
            <View style={styles.item} >
                <View style={styles.itemLeft}>
                    <Text style={styles.itemTitle}>{discipline.name}</Text>
                    <Text style={styles.itemCount}>{getAttendedClasses(discipline.classes).length} of {getPastClasses(discipline.classes).length} classes attended</Text>
                </View>
                <View style={styles.itemRight}>
                    {/* <RadialProgress color="#ffffff" size="100" value={getPercentage(discipline)} /> */}
                    <RadialProgress color="#ffffff" radius={25} value={getPercentage(discipline.classes)} stroke={3} />
                </View>
            </View>
            </Ripple>
        )
    }
}

var styles = StyleSheet.create({
    item: {
        padding: 25,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexGrow: 3
    },
    itemRight: {
        flexGrow: 1,
        alignItems: 'flex-end'
    },
    itemTitle: {
        fontSize: 20,
        color: '#ffffff'
    },
    itemCount: {
        opacity: 0.5,
        fontSize: 14,
        color: '#ffffff'
    },
})

export default Discipline;