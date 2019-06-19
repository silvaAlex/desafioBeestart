import React, { Component } from 'react';

import { Text,View } from 'react-native';

import styles from './styles';
import Logo from '../Logo';
import Button from '../Buttons';

export default class Home extends Component {

 
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Logo/>
        </View>

        <Text style={styles.title}>Bem-vindo ao desafio da BeeStart</Text>

        <View style={styles.formContainer}>
            <Button 
              style={styles.firstButton} 
              onPress={() =>{navigate('Login')}}
            >
              Acessar o sistema
            </Button>
            <Button 
              onPress={()=> {navigate('Register')}}
            >
              Cadastrar-se
            </Button>
        </View> 

      </View>
    );
  }
}
