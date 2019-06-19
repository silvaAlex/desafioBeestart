import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },

  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    alignItems: 'flex-end',
    textAlign: 'center',
    marginBottom: 5,
    color: colors.primary,
    fontSize: fonts.bigger,
  },

  formContainer: {
    flex: 1,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  firstButton:{
    marginRight: 10,
  },


});

export default styles;