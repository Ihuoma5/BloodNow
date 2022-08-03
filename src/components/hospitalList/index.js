import { Image, StyleSheet, Text, View } from "react-native";

const HospiltalList = ({hospital}) => {
  return (
    <View>
      <View style={styles.hospitalContainer}>
        <Image
          source={{
            uri: hospital.image,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{hospital.name}</Text>
        <Text style={styles.price}>₦{hospital.deliveryFee} </Text>
      </View>
    </View>
  );
};
export default HospiltalList;

const styles = StyleSheet.create({
    hospitalContainer: {
      width: "100%",
      marginVertical: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      marginVertical: 5,
    },
    price: {
      color: "grey",
    },
  });