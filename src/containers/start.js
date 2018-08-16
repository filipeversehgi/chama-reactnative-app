import React, { Component } from 'react';
import { View } from 'react-native';
import * as courseService from '../services/course-service';

class StartPage extends Component {

    constructor(props) {
        super(props);

        if( !courseService.getCourseCount() ) {
            this.props.navigation.navigate('NewCourse')
        }
    }
    
    render() {
        console.log('- Start Page');
        return (
            <View></View>
        );
    }
}

export default StartPage;