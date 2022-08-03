import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation} from "@react-navigation/native";

const BloodGroup = ({ bloodType }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Blood", {id: bloodType.id})}
    style={styles.container}>
      <View style={{flex: 1,}}>
      <Text style={styles.name}>{bloodType.name}</Text>
      <Text style={styles.description}>{bloodType.description}</Text>
      <Text style={styles.price}> ₦{bloodType.price}</Text>
    </View>
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  description: {
    color: "grey",
    marginVertical: 10,
  },
});
export default BloodGroup;
