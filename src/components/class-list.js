import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';

class ClassList extends Component {
    render() {
        return(
            <View style={styles.list}>
                <Ripple rippleOpacity={0.2}>
                    <View style={styles.item}>
                        <View>
                            <Text style={styles.title}>Class 1 - 20/07</Text>
                            <Text style={styles.weekday}>Tuesday</Text>
                        </View>

                        <View>
                            <Icon name="check" size={50} color="#57BE60" />
                        </View>
                    </View>
                </Ripple>
                <Ripple rippleOpacity={0.2}>
                    <View style={styles.item}>
                        <View>
                            <Text style={styles.title}>Class 1 - 20/07</Text>
                            <Text style={styles.weekday}>Tuesday</Text>
                        </View>

                        <View>
                            <Icon name="cross" size={50} color="#B7043A" />
                        </View>
                    </View>
                </Ripple>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    list: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#ffffff',
        flex: 1
    },
    item: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18
    },
    weekday: {
        fontSize: 14,
        opacity: 0.5
    }
});

export default ClassList;