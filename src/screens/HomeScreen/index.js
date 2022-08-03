import { StyleSheet,  FlatList, View } from "react-native";
import HospiltalList from "../../components/hospitalList";
import hospitals from "../../../assets/hospitals.json";


export default function HomeScreen() {
  return (
      <View style={styles.page}>
        <FlatList 
      data={hospitals}
      renderItem={({item}) => <HospiltalList hospital={item}/>}
      showsVerticalScrollIndicator={false}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  page:{
    padding: 10,
  }
});
