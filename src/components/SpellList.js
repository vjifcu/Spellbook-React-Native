import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const spellList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.spells}
      renderItem={(info) => (
        <ListItem
          spellName={info.item.name}
          onItemPressed={() => props.onItemSelected(info.item.name)}
        />
      )}
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
