import React from 'react';

import { Image,View } from 'react-native';
import logo from '../../images/logo.png'

import styles from './styles';

const Logo = () => (
    <View>
        <Image 
            style={[styles.logo]}
            source={logo}
        >
        </Image>
    </View>
);

export default Logo;
