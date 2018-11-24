import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import ListHeader from '../../components/ListHeader';
import spells from '../../../res/data_file.json';
import notesData from '../../store/spellList'

class Compendium extends Component {
  
      renderHeader(headerText){
        if(headerText === "0"){
            return "Cantrip";
        }
        return headerText;
      }

      render() {
        return (
          <View>

                <FlatList
                  data={notesData}
                  renderItem={({item}) => <Text style={{fontSize: 20, margin:2, padding:3, height:60, backgroundColor: '#EFEFEF'}}>{item.name}</Text>}
                  keyExtractor={item => item.name}
                />

          </View>
        );
      }
}

export default Compendium;