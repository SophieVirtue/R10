import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
    container: { 
        backgroundColor: colors.blue,
        height: '100%',
        marginTop: 30
      },
      list: {
        color: 'black', 
        flexDirection: 'column'
      }, 
      line: {
        borderStyle: 'solid',
        borderWidth: 0.5, 
      }
  });

  export default styles;
  