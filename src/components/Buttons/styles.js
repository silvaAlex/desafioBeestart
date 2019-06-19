import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container:{
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.padding,
  },

  'button-outline':{
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  text:{
    color: colors.white,
      fontWeight: 'bold',
      fontSize: fonts.regular,
  },

  'text-outline':{
    color: colors.primary,
  },

});

export default styles;
