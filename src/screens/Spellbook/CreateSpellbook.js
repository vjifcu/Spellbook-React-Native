import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions, Platform, TextInput} from 'react-native'
import { connect } from 'react-redux';
import { selectSpellbook, createSpellbook } from '../../store/actions/index';

import SpellList from '../../components/SpellList';
import SpellbookList from '../../components/SpellbookList';

class CreateSpellbook extends Component{
    constructor(props){
        super()
        this.state = {
            name: ""
          }
    }

    createSpellbook() {
        this.props.navigator.push({
            screen: "project.ChooseSpellsScreen",
            title: this.state.name,
            backButtonTitle: "",
            passProps: {
                dispatchCreateSpellbook: this.props.dispatchCreateSpellbook,
                name: this.state.name
            }
          });
    }

    render() {
        return(
                <View>
                    <Text style={{fontSize: 20, textAlign: "center"}}>Name</Text>
                    <TextInput style={{height: 30, borderColor: "grey", borderWidth: 1, marginLeft: 20, marginRight: 20}}
                        onChangeText={(text => this.setState({...this.state, name: text}))}
                        value={this.state.name}
                    />
                    <Button title="Pick Spells" onPress={() => this.createSpellbook()} selected={this.state.selected}/>
                </View>
        );
    }
}

export default CreateSpellbook;
