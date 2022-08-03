import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
      flex: 1,
    },
    IconContainer: {
      position: "absolute",
      top: 40,
      left: 10,
      borderRadius: 50,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
    },
    title: {
      fontSize: 35,
      fontWeight: "600",
      marginVertical: 10,
    },
    BloodTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.,
    },
    price: {
      fontSize: 15,
      color: "grey",
    },
    container: {
      margin: 10,
    },
  });