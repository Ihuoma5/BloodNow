import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import hospitals from "../../../assets/hospitals.json";
import { AntDesign } from "@expo/vector-icons";

const bloodtype = hospitals[0].bloodTypes[0];

const BloodDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (bloodtype.price * quantity).toFixed(0);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{bloodtype.name}</Text>
      <Text style={styles.description}>{bloodtype.description}</Text>
      <View style={styles.separator}></View>
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={24}
          color="black"
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          onPress={onPlus}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add {quantity} pints of Blood &#8226; ₦{getTotal()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "grey",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  }
});

export default BloodDetailsScreen;
