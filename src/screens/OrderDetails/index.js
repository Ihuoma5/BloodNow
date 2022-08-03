import { View, Text, Image, FlatList } from "react-native";
import orders from " ../../../assets/orders.json";
import hospitals from "../../../assets/hospitals.json";
import styles from "../HomeScreen/styles";
import React from "react";
import OrderListItem from "../../components/OrderListItem";
import BasketItem from "../../components/BasketGroupItem";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &#8226; 2 hours ago
          </Text>
          <Text style={styles.BloodTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
    ListHeaderComponent={OrderDetailsHeader}
      data={hospitals[0].bloodTypes}
      renderItem={({ item }) => <BasketItem basketDish = {item} />}
    />
  );
};

export default OrderDetails;
