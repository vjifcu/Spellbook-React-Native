import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import { connect } from 'react-redux';

import SpellList from '../../components/SpellList';

class Compendium extends Component {
  constructor(props){
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch(event.id){
        case 'didAppear':
        this.props.navigator.setDrawerEnabled({side: "left", enabled: true})
        break;
        case 'didDisappear':
        this.props.navigator.setDrawerEnabled({side: "left", enabled: false})
        break;
    }
  }

  itemSelectedHandler = key => {
    const selSpell = this.props.spells.find(spell => {
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
    spells: state.rootReducer.spells
  };
};

export default connect(mapStateToProps, null)(Compendium);