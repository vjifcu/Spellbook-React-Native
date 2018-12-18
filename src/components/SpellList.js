import React, {PureComponent} from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

class SpellList extends PureComponent {
  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.spells}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onItemPressed={() => this.props.onItemSelected(item.name)}
            selected={!!this.props.selected.has(item.name)}
          />
        )}
        ListHeaderComponent={this.props.header}
        keyExtractor={item => item.name}
        extraData={this.props.selected}
      />
    );
  }
  
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default SpellList;
