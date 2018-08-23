import React, { Component } from 'react';

// Interface
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

// Logic
import moment from 'moment/src/moment';
import * as courseService from '../services/course-service';

// Form Variables
import t from 'tcomb-form-native';

let Form = t.form.Form;

const classesPerDay = t.enums({
  0: 'Nenhuma',
  1: '1 aula',
  2: '2 aulas',
  3: '3 aulas',
  4: '4 aulas',
  5: '5 aulas',
  6: '6 aulas'
});

const Discipline = t.struct({
  name: t.String,
  teacher: t.String,
  startAt: t.Date,
  endsAt: t.Date,
  sun: classesPerDay,
  mon: classesPerDay,
  tue: classesPerDay,
  wed: classesPerDay,
  thu: classesPerDay,
  fri: classesPerDay,
  sat: classesPerDay  
});

export default class NewDisciplinePage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }
  
  options = {
    fields: {
      name: {
        label: 'Nome do Curso',
        error: 'Este campo é obrigatório!'
      },
      teacher: {
        label: 'Escola / Instituição',
        error: 'Este campo é obrigatório!'
      },
      startAt: {
        label: 'Início das aulas',
        mode: 'date',
        config: {
          format: (date) => moment(date).format('DD/MM/YYYY'),
        },
      },
      endsAt: {
        label: 'Fim das aulas',
        mode: 'date',
        config: {
          format: (date) => moment(date).format('DD/MM/YYYY'),
        },
      },
      classDays: {
        label: 'Dia das Aulas'
      }
    }
  };

  formatDate(date) {
    console.log(date);
    console.log(moment(date).format('DD/MM/YYYY'));
    return moment(date).format('DD/MM/YYYY');
  }

  formValue = {
    name: 'Teoria das Cores',
    teacher: 'Cassio Ferreira',
    startAt: moment().startOf('month').toDate(),
    endsAt: moment().endOf('month').toDate(),
    sun: 1,
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0
  }

  handleSubmit = async () => {
    const value = this._form.getValue();
    const isValid = this._form.validate().isValid();

    
    if(!isValid) return;
    
    this.setState({ loading: true });
    
    const classesPerDay = [ value.sun, value.mon, value.tue, value.wed, value.thu, value.fri, value.sat ].map(i => Number(i));

    console.log('classesPerDay', classesPerDay);

    await courseService.createDiscipline(value.name, value.teacher, value.startAt, value.endsAt, classesPerDay);

    this.setState({ loading: false });

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ScrollView>
        <Spinner visible={this.state.loading} textContent={"Carregando..."} textStyle={{ color: '#FFF' }} />
        <View style={styles.container}>
          <Text> Agora, adicione sua primeira matéria: </Text>

          <Form
            ref={c => this._form = c}
            type={Discipline}
            options={this.options}
            value={this.formValue}
          />

          <Button title="Adicionar Matéria" onPress={this.handleSubmit}></Button>
        </View>
      </ScrollView>
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
