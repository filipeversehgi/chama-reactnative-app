import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as courseService from '../services/course-service';
// Form Variables
import t from 'tcomb-form-native';
let Form = t.form.Form;
const Course = t.struct({
  name: t.String,
  school: t.String
});
const options = {
  fields: {
    name: {
      label: 'Nome do Curso',
      error: 'Este campo é obrigatório!'
    },
    school: {
      label: 'Escola / Instituição',
      error: 'Este campo é obrigatório!'
    }
  }
};

export default class NewCoursePage extends Component {
  
  
  constructor(props) {
    super(props);
  }

  formValue = {
    name: 'Design de Interiores',
    school: 'Proarte'
  }

  handleSubmit = async () => {
    const value = this._form.getValue();
    const isValid = this._form.validate().isValid();
    
    if(!isValid) return;

    await courseService.createCourse(value.name, value.school);

    this.props.navigation.navigate('NewDiscipline');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Bem vindo! Para começar, vamos adicionar seu primeiro curso: </Text>

        <Form
          ref={c => this._form = c}
          type={Course}
          options={options}
          value={this.formValue}
        />

        <Button title="Adicionar Curso" onPress={this.handleSubmit}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
})

const formStyles = {
  ... Form.stylesheet
}
