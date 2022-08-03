import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BloodGroup from "../../components/BLoodGroup";
import hospitals from "../../../assets/hospitals.json";
import Header  from "../HomeScreen/Header";
import styles from "../HomeScreen/styles";
const hospital = hospitals[0];

const HospitalDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
      ListHeaderComponent={() => <Header hospital={hospital}/>}
        data={hospital.bloodTypes}
        renderItem={({ item }) => <BloodGroup bloodType={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Ionicons
          name="arrow-back-circle"
          size={45}
          color="red"
          style={styles.IconContainer}
        />
    </View>
  );
};

export default HospitalDetailsPage;
