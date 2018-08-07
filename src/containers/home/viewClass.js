import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import ClassList from '../../components/class-list';

class ViewClass extends Component {

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <LinearGradient colors={['#F27121', '#E94057', '#8A2387']} style={styles.linearGradient}>
                    <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                            <View style={{ justifyContent: 'center' }}>
                                <Icon name="chevron-thin-left" size={30} color="#fff" />
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={{marginLeft: 20}}>
                            <Text style={styles.disciplineName}>Color Theory</Text>
                            <Text style={styles.teacherName}>by Robert Thomps</Text>
                        </View>
                    </View>

                    <ClassList style={{flex: 1, backgroundColor: '#000000'}}></ClassList>
                </LinearGradient>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingBottom: 10,
        marginBottom: -10
    },
    header: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    disciplineName: {
        fontSize: 28,
        color: '#ffffff'
    },
    teacherName: {
        opacity: 0.5,
        fontSize: 14,
        color: '#ffffff'
    }
})

export default ViewClass;