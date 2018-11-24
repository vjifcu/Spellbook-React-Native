import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native'
import notesData from '../../store/spellList'

class SpellbookScreen extends Component{
    render() {
        return(
            <View>
                <Text>On SpellbookScreen</Text>
                <FlatList
                  data={notesData}
                  renderItem={({item}) => <Text style={{fontSize: 20, margin:2, padding:3, height:60, backgroundColor: '#EFEFEF'}}>{item.name}</Text>}
                  keyExtractor={item => item.name}
                />
            </View>
        );
    }
}

export default SpellbookScreen;
