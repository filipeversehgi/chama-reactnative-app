import React, { Component } from 'react';
import { Text, Container, View, ScrollView, StyleSheet } from 'react-native';
import Database from './../utils/layoutDb';
import Discipline from '../components/discipline';
import NextClass from '../components/nextclass';
import lodash from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import { ActionButton } from 'react-native-material-ui';
import { getNextClasses } from '../utils/class-utils';
import * as courseService from '../services/course-service';
import Spinner from 'react-native-loading-spinner-overlay';

class Home extends Component {

    static navigationOptions = {
        headerMode: null
    }

    constructor(props) {
        super(props);

        this.state = {
            course: null,
            loading: true
        }
    }

    componentDidMount() {
        courseService.getCurrentCourse()
            .subscribe(data => {
                console.log('New State!!!');
                this.setState({course: data, loading: false});
            });
    }

    handleClick() {
        this.props.navigation.navigate('Class');
    }

    onAddClick() {
        console.log('Click');
        this.props.navigation.navigate('NewDiscipline');
    }
    
    render() {
        const { course, loading } = this.state;

        let classes;

        if(course){
            
            classes = course.disciplines.reduce((acc, cur) => {
                acc.push(...cur.classes);
                return acc;
            }, []);
    
            classes = getNextClasses(lodash.orderBy(classes, ['date'], ['asc']));

        }
        

        return ([


            <ScrollView key={'sv'} style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Spinner visible={loading} textContent={"Carregando..."} textStyle={{ color: '#FFF' }} />
                    <LinearGradient colors={['#F27121', '#E94057', '#8A2387']} style={styles.linearGradient}>
                    
                    { !loading &&

                        <View>

                            <View style={styles.appPad}>
                                <Text style={styles.courseTitle}>{course.name}</Text>
                                <Text style={styles.motivation}>Força! Continue o bom trabalho.</Text>
                            </View>
                            <View>
                                { !!course && !!course.disciplines && course.disciplines.map((discipline, i) => 
                                    <Discipline onClick={this.handleClick.bind(this)} discipline={discipline} key={i} />
                                ) }
                            </View>
                        

                            <View style={styles.nextBox}>
                                <Text style={styles.nextTitle}>Próximas aulas</Text>
                                
                                {!!classes && classes.map((c, i) => 
                                    <NextClass onPress={this.handleClick.bind(this)} class={c} key={i} />
                                ) }
                            </View>

                        </View>

                    }
                    
                </LinearGradient>
            </ScrollView>,

            <ActionButton 
                key={'ab'} 
                icon="add" 
                style={{ container: { backgroundColor: '#79f2a7'}}} 
                onPress={this.onAddClick.bind(this)}
            />

        ])
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
        flex: 1
    },
    nextTitle: {
        padding: 25,
        color: '#8A2387',
        fontWeight: 'bold',
        fontSize: 22,
    }
});

export default Home;