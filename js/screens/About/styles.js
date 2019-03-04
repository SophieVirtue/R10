import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

const styles = StyleSheet.create({
    container: { 
        backgroundColor: colors.white,
        height: '100%',
        padding: 15,
        paddingBottom: 0
      },
      displayLogo: { 
        justifyContent: 'center',
        alignItems: 'center', 
        paddingTop: 13,
        paddingBottom: 23,
        marginBottom: 20,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,

      },
      logo: {
        width: 205, 
        height: 50
      },
      text: {
        paddingBottom: 20,
        fontSize: 17, 
        fontFamily: fonts.light,
        lineHeight: 23
      },
      title: {
        paddingBottom: 20,
        fontSize: 24,
        fontFamily: fonts.regular
      },
      list: {
        color: colors.black, 
        flexDirection: 'column'
      },
      RED: {
        paddingBottom: 36,
        paddingTop: 18,
        fontFamily: fonts.light,
        fontSize: 18
      },
      display: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1 
      }
  });

  export default styles;
  