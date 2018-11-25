import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import { connect } from 'react-redux';

import SpellList from '../../components/SpellList';

class Compendium extends Component {
  itemSelectedHandler = key => {
    const selSpell = this.props.spells.find(spell => {
      console.log(spell);
      return spell.name === key;
    })
    this.props.navigator.push({
      screen: "project.SpellDetailScreen",
      title: selSpell.name,
      backButtonTitle: "",
      passProps: {
        selectedSpell: selSpell
      }
    });
  }

  render() {
    return (
      <View>
        <SpellList spells={this.props.spells} onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    spells: state.spells.spells
  };
};

export default connect(mapStateToProps, null)(Compendium);