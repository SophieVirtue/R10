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
  