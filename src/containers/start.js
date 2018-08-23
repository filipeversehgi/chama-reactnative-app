import React, { Component } from 'react';
import { View } from 'react-native';

import * as storageService from '../services/storage-service';
import * as courseService from '../services/course-service';

import moment from 'moment/src/moment';

class StartPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.resolveAppInitialization();
    }

    resolveAppInitialization = async () => {
        await storageService.setup();
        await courseService.setup();

        courseService.getCurrentCourse()
            .subscribe(course => {
                console.log('Course Sub', course);
                if(!course) {
                    this.props.navigation.navigate('NewCourse');
                    return;
                }

                if(!course.disciplines.length) {
                    this.props.navigation.navigate('NewDiscipline');
                    return;
                }

                this.props.navigation.navigate('Home');
            }, err => {
                console.log('Ocorreu um erro na inicialização do app.');
            })
    }
    
    render() {
        console.log('- Start Page');
        return (
            <View></View>
        );
    }
}

export default StartPage;