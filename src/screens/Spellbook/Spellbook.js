import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native'
import { selectSpellbook } from '../../store/actions/index';
import { connect } from 'react-redux';

import SpellList from '../../components/SpellList';

class Spellbook extends Component{
    constructor(props){
        super(props)
        this.props.navigator.setDrawerEnabled({side: "left", enabled: false})
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
        this.props.navigator.setTitle({
            title: this.props.selectedSpellbook
        })
    }

    componentWillReceiveProps(props){
        console.log("Spellbook Received Props!!!")
        console.log("Selected Spellbook: " + props.selectedSpellbook)
        this.props.navigator.setTitle({
            title: props.selectedSpellbook
        })
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

    getSpells = (spellbookName) => {
        spellbook = this.props.spellbooks.find(spellbook => {
            return spellbook.name === spellbookName
        })

        if(spellbook == null){
            return []
        }
        
        const spells = this.props.spells.filter(spell => {
            return spellbook.spells.includes(spell.name)
          })
        return spells
    }

    render() {
        return(
            <View>
                <SpellList spells={this.getSpells(this.props.selectedSpellbook)} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        spells: state.rootReducer.spells,
        spellbooks: state.rootReducer.spellbooks,
        selectedSpellbook: state.rootReducer.selectedSpellbook
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        selectSpellbook: (spellbookName) => dispatch(selectSpellbook(spellbookName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spellbook);
