import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RoadNavigator from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
     <RoadNavigator/>
    <StatusBar style="light"/>
    </NavigationContainer>
  );
}
