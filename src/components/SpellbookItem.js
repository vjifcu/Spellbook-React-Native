import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SpelbookItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={[styles.listItem, props.style]}>
      <Text>{props.item.name}</Text>
    </View>
  </TouchableOpacity>
)

  const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#eee",
      flexDirection: "row",
      justifyContent: "space-between"
      //alignItems: "center"
    }
  });
  
  export default SpelbookItem;
  