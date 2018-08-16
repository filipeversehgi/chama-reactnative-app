/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import Home from './containers/home/home';
import StartPage from './containers/start';
import ViewClass from './containers/home/viewClass';
import NewCoursePage from './containers/new-course';

type Props = {};

export default createStackNavigator({
  Start: {
    screen: StartPage,
    navigationOptions: () => ({
      title: 'Start',
      header: null
    })
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      header: null
    })
  },
  Class: {
    screen: ViewClass,
    navigationOptions: () => ({
      title: 'View Class',
      header: null
    })
  },
  NewCourse: {
    screen: NewCoursePage,
    navigationOptions: () => ({
      title: 'New Course',
      header: null
    })
  }
})
