import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from "react-native-elements"

import SpellList from '../../components/SpellList';

class ChooseSpells extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: this.props.spells,
      currentSearchText: null,
      error: null,
      selected: new Map()
    }
  }

  itemSelectedHandler = key => {
    this.setState((state) => {
        const selected = new Map(state.selected)

        this.state.selected.has(key) ?
        selected.delete(key, !selected.get(key)) :
        selected.set(key, !selected.get(key))

        return {selected}
    })
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

  createSpellbook(){
    this.props.createSpellbook(this.props.name, Array.from(this.state.selected.keys()))
    this.props.navigator.dismissModal()
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        <Button title="Create Spellbook" onPress={() => this.createSpellbook()}/>
        <View>
          <SpellList spells={this.state.data} onItemSelected={this.itemSelectedHandler} selected={this.state.selected}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    spells: state.rootReducer.spells,
  };
};
const mapDispatchToProps = dispatch => {
  return {
      createSpellbook: (spellbookName, spells) => dispatch(createSpellbook(spellbookName, spells))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSpells);
