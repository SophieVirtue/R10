import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

const styles = StyleSheet.create({
      flexTitle: {
        flexDirection: 'row'
      },
      sessionTitle: {
        color: colors.purple,
        paddingBottom: 10, 
        fontSize: 17,
        fontFamily: fonts.regular,
        paddingLeft: 10
      },
      sessionDescription: {
        fontFamily: fonts.light, 
        fontSize: 17, 
        paddingBottom: 10
      }
  });

  export default styles;
  