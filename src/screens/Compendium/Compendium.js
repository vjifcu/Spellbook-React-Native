import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import { connect } from 'react-redux';

import SpellList from '../../components/SpellList';

class Compendium extends Component {
      render() {
        return (
          <View>
            <SpellList spells={this.props.spells}/>
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