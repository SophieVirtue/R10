import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingBottom: 0
  },
  flexHeart: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    fontFamily: fonts.regular,
    color: colors.mediumGrey,
    fontSize: 18,
    paddingBottom: 20
  },
  title: {
    fontFamily: fonts.regular,
    paddingBottom: 20,
    fontSize: 28
  },
  time: {
    fontFamily: fonts.regular,
    color: colors.red,
    fontSize: 18,
    paddingBottom: 20
  },
  description: {
    fontFamily: fonts.light,
    paddingBottom: 30,
    fontSize: 19,
    lineHeight: 30
  },
  flexSpeaker: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1, 
    paddingBottom: 20,
    marginBottom: 20
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 32.5
  },
  speakerName: {
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: fonts.regular
  }, 
  buttonText: {
    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.white,
    paddingTop: 13,
    paddingBottom: 13
  }, 
  button: {
    width: '60%',
    alignSelf: 'center'
  },
  rounded: {
    borderRadius: 25
  }
});

export default styles;
