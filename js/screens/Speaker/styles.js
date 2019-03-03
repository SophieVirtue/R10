import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10
  },
  x: {
    color: colors.white,
    paddingLeft: 3
  },
  heading: {
    color: colors.white,
    paddingLeft: 60,
    paddingTop: 55,
    paddingBottom: 35,
    fontSize: 20,
    fontFamily: fonts.regular
  },
  flexSpeaker: {
    flexDirection: "row"
  },
  infoSection: {
    backgroundColor: colors.white,
    padding: 15,
    maxHeight: 645,
    borderRadius: 10,
    paddingTop: 25,
    // paddingBottom: 80
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center"
  },
  speakerName: {
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "center",
    fontFamily: fonts.regular,
    fontSize: 26
  },
  bio: {
    fontFamily: fonts.light,
    paddingBottom: 30,
    fontSize: 19,
    lineHeight: 30
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.white,
    paddingTop: 13,
    paddingBottom: 13,
  }, 
  button: {
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 60
  },
  rounded: {
    borderRadius: 25
  }
});

export default styles;
