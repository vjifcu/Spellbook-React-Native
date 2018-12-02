import React, {Component} from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from 'react-redux';

import SpellbookItem from "./ListItem";

class SpellbookList extends Component {

  renderRow(item) {
    let style = null
    if(this.props.selectedSpellbook === item.name)
      style = {backgroundColor: "red"}

    return(
      <SpellbookItem
        item={item}
        onItemPressed={() => this.props.onItemSelected(item.name)}
        selected={this.props.selectedSpellbook === item.name}
        style={style}
      />
    )
  }

  render(){
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.spellbooks}
        renderItem={({ item }) => (
          this.renderRow(item)
        )}
        extraData={this.props.selectedSpellbook}
        keyExtractor={item => item.name}
      />
    );
  };
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  },
  selectedSpellbook: {
    backgroundColor: "red"
  }
});

export default SpellbookList;
