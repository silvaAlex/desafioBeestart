import React, { Component } from "react";

import {
  Alert,
  AsyncStorage,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  View
} from "react-native";

import styles from "../styles";

import Logo from "../../Logo";
import Button from "../../Buttons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.gotoDashBoard = this.gotoDashBoard.bind(this);
  }

  async check() {
    const token_email = await AsyncStorage.getItem("@BeeStart:email");

    const token_pass = await AsyncStorage.getItem("@BeeStart:pass");

    if (token_email === this.state.email && token_pass === this.state.password)
      this.gotoDashBoard();
  }

  gotoDashBoard = () => {
    const { navigate } = this.props.navigation;
    return navigate("Dashboard");
  };

  validate() {
    let message = "";
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password } = this.state;

    if (email == "" || password == "") {
      message = "Todos os campos foram preenchidos?";
      Alert.alert("Login", "Verifique os dados preenchidos: \n" + message);
    } else if (reg.test(email) === false) {
      message = "O e-mail está no formato correto?";
      Alert.alert("Login", "Verifique os dados preenchidos: \n" + message);
    } else if (email != "" && password != "") {
      message =
        "O e-mail informado é: " +
        email +
        " \n A senha informada é: " +
        password;

      this.setState({ email: email });
      this.setState({ password: password });

      Alert.alert(
        "Login",
        message,
        [
          {
            text: "OK",
            onPress: () => {
              this.check();
            }
          }
        ],
        { cancelable: false }
      );
    }

    Keyboard.dismiss();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.textInput}
            placeholder="Email"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
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
            ref={input => (this.passwordInput = input)}
            returnKeyType="next"
            secureTextEntry
          />

          <Button
            style={styles.button}
            onPress={() => {
              this.validate();
            }}
          >
            Login
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
