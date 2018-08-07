import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import Ripple from 'react-native-material-ripple';

class NextClass extends Component {

    formatDate(date) {
        return moment(date).format('DD/MM, dddd');
    }

    handleClick() {
        console.log('Handle Click Child');
        console.log(this.props);
        console.log(this.props.onClick);
        this.props.onClick();
    }

    render() {
        const c = this.props.class;

        return (
            <Ripple rippleOpacity={0.2} onPress={this.handleClick.bind(this)}>
                <View style={styles.nextClass}>
                    <Text style={styles.className}>{c.discipline} - Class {c.number}</Text>
                    <Text style={styles.classDate}>{this.formatDate(c.date)}</Text>
                </View>
            </Ripple>
        )
    }
}

var styles = StyleSheet.create({
    nextClass: {
        padding: 25,
        paddingTop: 10,
        paddingBottom: 10
    },
    className: {
        fontSize: 18,
        opacity: 0.8
    },
    classDate: {
        fontSize: 14,
        opacity: 0.4
    }
});

export default NextClass;