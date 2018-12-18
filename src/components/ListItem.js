import React, {PureComponent} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class ListItem extends PureComponent {

render() {
  const newStyle = {}
    if (this.props.selected)
  this.newStyle={backgroundColor: "red"}
    else
  this.newStyle={}

  return(
    <TouchableOpacity onPress={this.props.onItemPressed}>
      <View style={[styles.listItem, this.props.style, this.newStyle]}>
        <Text>{this.props.item.name}</Text>
        <Text style={{textAlign: "right"}}>{this.props.item.level}</Text>
      </View>
    </TouchableOpacity>
  )
}


}

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
  
  export default ListItem;
  