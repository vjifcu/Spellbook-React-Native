import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListHeader = (props) => (
    <Text style={{fontSize: 20, fontWeight: 'bold', backgroundColor: 'white'}}>{props.text}</Text>
);

export default ListHeader;
