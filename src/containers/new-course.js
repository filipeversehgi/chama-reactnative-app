import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewCoursePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Bem vindo! Para começar, vamos adicionar seu primeiro curso: </Text>
      </View>
    );
  }
}
