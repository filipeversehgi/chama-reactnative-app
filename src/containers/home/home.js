import React, { Component } from 'react';
import { Text, Container, View, ScrollView, StyleSheet } from 'react-native';
import Database from './../../utils/layoutDb';
import Discipline from '../../components/discipline';
import NextClass from '../../components/nextclass';
import lodash from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import { ActionButton } from 'react-native-material-ui';
import { getNextClasses } from '../../utils/class-utils';

class Home extends Component {

    course = Database.courses[0];

    static navigationOptions = {
        headerMode: null
    }

    handleClick() {
        this.props.navigation.navigate('Class');
    }
    
    render() {
        let classes = this.course.disciplines.reduce((acc, cur) => {
            acc.push(...cur.classes);
            return acc;
        }, []);

        classes = getNextClasses(lodash.orderBy(classes, ['date'], ['asc']));

        return (
            <LinearGradient colors={['#F27121', '#E94057', '#8A2387']} style={styles.linearGradient}>
                <ScrollView>
                    <View style={styles.appPad}>
                        <Text style={styles.courseTitle}>{this.course.name}</Text>
                        <Text style={styles.motivation}>Keep up the good work!</Text>
                    </View>
                    <View>
                        { this.course.disciplines.map((discipline, i) => 
                            <Discipline onClick={this.handleClick.bind(this)} discipline={discipline} key={i} />
                        ) }
                    </View>

                    <View style={styles.nextBox}>
                        <Text style={styles.nextTitle}>Next classes</Text>
                        
                        { classes.map((c, i) => 
                            <NextClass onClick={this.handleClick.bind(this)} class={c} key={i} />
                        ) }
                    </View>
                </ScrollView>

                <ActionButton icon="add" style={{ container: { backgroundColor: '#79f2a7'}}} />
            </LinearGradient>
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    appPad: {
        padding: 25,
        paddingBottom: 10,
        fontFamily: 'Roboto'
    },
    courseTitle: {
        color: '#ffffff',
        fontSize: 28
    },
    motivation: {
        color: '#ffffff',
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 20
    },
    nextBox: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#ffffff',
        marginTop: 20,
    },
    nextTitle: {
        padding: 25,
        color: '#8A2387',
        fontWeight: 'bold',
        fontSize: 22,
    }
});

export default Home;