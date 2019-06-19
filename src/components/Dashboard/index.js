import React, { Component } from 'react';

import {
    Alert,
    AsyncStorage,
    Text,
    View
} from 'react-native';
import Button from '../Buttons';
import Logo from '../Logo';
import styles from './styles';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.backHome = this.backHome.bind(this);
    }

    backHome = () => {

        const { navigate } = this.props.navigation;

        return navigate('Home');
    }

    clear() {
        AsyncStorage.removeItem('@BeeStart:name');
        AsyncStorage.removeItem('@BeeStart:email');
        AsyncStorage.removeItem('@BeeStart:pass');
        
        this.backHome();
    }

    quit() {
        Alert.alert(
            "Dashboard",
            "Deseja realmente sair?",
            [
                { text: 'Não', onPress: () => {}},
                { text: 'Sim', onPress: () => {this.clear();}}
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <Text style={styles.title}>Desafio Concluido com sucesso!</Text>
                <View style={styles.formContainer}>
                    <Button
                        style={styles.button}
                        onPress={() => {this.quit()}}
                    >
                        Sair
                    </Button>
                </View>
            </View>
        );
    }
}
