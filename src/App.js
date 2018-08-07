/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import Home from './containers/home/home';
import ViewClass from './containers/home/viewClass';

type Props = {};

export default createStackNavigator({
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
  }
})
