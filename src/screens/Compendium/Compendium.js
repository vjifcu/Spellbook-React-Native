import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from "react-native-elements"

import SpellList from '../../components/SpellList';

class Compendium extends Component {
  constructor(props){
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))

    this.state = {
      loading: false,
      data: this.props.spells,
      currentSearchText: null,
      error: null
    }
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

  searchFilterFunction = text => {    
    if(this.state.currentSearchText === text.slice(0,-1))
      this.filterSpells(this.state.data, text)
    else
      this.filterSpells(this.props.spells, text)

  };

  filterSpells(spellsToFilter, text) {
    const newData = spellsToFilter.filter(item => {      
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
        
      return itemData.split(" ").some(word =>{
        return word.startsWith(textData)
      })
    });    

    this.setState({ 
      data: newData,
      currentSearchText: text
    });  
  }

  renderHeader() {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        <View>
          <SpellList spells={this.state.data} onItemSelected={this.itemSelectedHandler}/>
        </View>
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