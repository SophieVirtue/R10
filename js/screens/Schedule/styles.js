import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  time: {
    backgroundColor: colors.lightGrey,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: fonts.regular
  },
  block: {
    padding: 15,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1
  },
  title: {
    fontFamily: fonts.regular,
    paddingBottom: 8,
    fontSize: 16
  },
  location: {
    fontFamily: fonts.regular,
    color: colors.mediumGrey, 
    fontSize: 15
  },
  flexHeart: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  }
});

export default styles;
