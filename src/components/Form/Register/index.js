import React, { Component } from 'react';

import {
  Alert,
  AsyncStorage,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  View
} from 'react-native';

import styles from '../styles';
import Logo from '../../Logo';
import Button from '../../Buttons';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  backHome = () => {

    const { navigate } = this.props.navigation;

    return navigate('Home');
  }

  async onValidate() {
    let message = '';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password, name } = this.state;

    if (name == '' || email == '' || password == '') {
      message = 'Todos os campos foram preenchidos?';
      Alert.alert("Cadastro", "Verifique os dados preenchidos: \n" + message);
    }

    else if (reg.test(email) === false) {
      message = 'O e-mail está no formato correto?';
      Alert.alert("Cadastro", "Verifique os dados preenchidos: \n" + message);
    }

    else if (name != '' && email != '' || password != '') {


      AsyncStorage.setItem('@BeeStart:name'.name);
      AsyncStorage.setItem('@BeeStart:email',email);
      AsyncStorage.setItem('@BeeStart:pass',password);
  
      this.setState({
        name: name, 
        email: email,
        pass: password,
      });
  
      message = 'Você foi cadastrado com sucesso!';
      Alert.alert("",
        message,
        [
          { text: 'OK', onPress: () => this.backHome() },
        ],
        { cancelable: false }
      );
    }

    Keyboard.dismiss();

  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="position"
      >
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.textInput}
            placeholder="Name"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />

          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.textInput}
            placeholder='Email'
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />

          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            ref={input => (this.passwordCInput = input)}
            returnKeyType="next"
            secureTextEntry
          />

          <Button
            style={styles.button}
            onPress={() => { this.onValidate() }}
          >
            Cadastrar-se
          </Button>

        </View>
      </KeyboardAvoidingView>
    );
  }

}
