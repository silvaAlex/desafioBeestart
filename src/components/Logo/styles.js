import { StyleSheet } from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
    
    container:{
        padding: metrics.padding,
    },
    
    logo:{
        width: 256,
        height: 256,
        resizeMode: 'contain',
       // zIndex: -1,
    },
});

export default styles;
