import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { addSpell } from '../../store/actions/index';

class OptionsScreen extends Component{
    spellAddedHandler = spellName => {
        this.props.onAddSpell(spellName)
    }

    render() {
        return(
            <View>
                <Text>On OptionsScreen</Text>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddSpell: (spellName) => dispatch(addSpell(spellName))
    }
}

export default connect(null, mapDispatchToProps)(OptionsScreen);
