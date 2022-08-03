import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import hospitals from "../../../assets/hospitals.json";
import styles from "./styles";
const hospital = hospitals[0];

const HospitalHeader = ({ hospital }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: hospital.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{hospital.name}</Text>
        <Text style={styles.price}>₦{hospital.deliveryFee} </Text>
        <Text style={styles.BloodTitle}>Blood Groups</Text>
      </View>
    </View>
  );
};

export default HospitalHeader;
