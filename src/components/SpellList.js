import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const spellList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.spells}
      renderItem={({item}) => (
        <ListItem
          item={item}
          onItemPressed={() => props.onItemSelected(item.name)}
        />
      )}
      ListHeaderComponent={props.header}
      keyExtractor={item => item.name}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default spellList;
