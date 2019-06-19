import { StyleSheet } from 'react-native';

import {metrics, colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  
  container:{
    alignSelf: 'stretch',
    padding : metrics.padding,
    paddingLeft: 60,
    paddingRight: 60,
    flexGrow:1,
    backgroundColor: colors.white,
  },

  logoContainer:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  formContainer:{
    alignSelf: 'stretch',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput:{
    alignSelf: 'stretch',
    height : 40,
    fontSize: fonts.big,
    marginBottom: 20,
    borderBottomColor:  colors.primary,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  
  button:{
    alignSelf:'stretch',
    alignItems: 'center',
    padding: metrics.padding,
    marginTop: 20,
  }

});

export default styles;
