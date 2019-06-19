import { StyleSheet } from 'react-native';
import { metrics, colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container:{
    alignSelf: 'stretch',
    padding : metrics.padding,
    paddingLeft: 60,
    paddingRight: 60,
    flex:1,
    backgroundColor: colors.white,
  },

  title: {
    alignItems: 'flex-end',
    textAlign: 'center',
    marginBottom: 5,
    color: colors.primary,
    fontSize: fonts.bigger,
  },

  logoContainer:{
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  formContainer:{
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button:{
    alignSelf:'stretch',
    alignItems: 'center',
    padding: metrics.padding,
    marginTop: 30,
  }

});

export default styles;
