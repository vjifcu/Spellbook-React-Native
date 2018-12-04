import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions, Platform} from 'react-native'
import { connect } from 'react-redux';
import { selectSpellbook, createSpellbook } from '../../store/actions/index';

import SpellList from '../../components/SpellList';
import SpellbookList from '../../components/SpellbookList';

class Spellbook extends Component{
    itemSelectedHandler = key => {
        const selSpellbook = this.props.spellbooks.find(spellbook => {
            return spellbook.name === key
        })

        this.props.selectSpellbook(selSpellbook.name)
    }

    render() {
        return(
                <View style={[styles.container,{width: Dimensions.get("window").width * 0.8}]}>
                        <Text style={styles.title}>My Spellbooks</Text>
                        <SpellbookList 
                            spellbooks={this.props.spellbooks} 
                            onItemSelected={this.itemSelectedHandler}
                            selectedSpellbook={this.props.selectedSpellbook}
                        />
                        <Button title="Create new spellbook!" onPress={() => this.props.createSpellbook("New Spellbook")}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? Dimensions.get("window").height*0.05 : 0,
        backgroundColor: "white",
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 4,
        paddingLeft: 2
    }
})

const mapStateToProps = state => {
    return {
      spellbooks: state.rootReducer.spellbooks,
      selectedSpellbook: state.rootReducer.selectedSpellbook
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        selectSpellbook: (spellbookName) => dispatch(selectSpellbook(spellbookName)),
        createSpellbook: (spellbookName) => dispatch(createSpellbook("ButtonSpellbook"))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Spellbook);
