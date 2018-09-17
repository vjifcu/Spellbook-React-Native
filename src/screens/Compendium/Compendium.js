import React, {Component} from 'react';
import {View, Text, Button, SectionList} from 'react-native';

class Compendium extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <SectionList
                renderItem={({item, index, section}) => <Text>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (
                    <Text>{title}</Text>
                )}
                sections={[
                    {title: 'Title1', data: ['item1', 'item2']},
                    {title: 'Title2', data: ['item3', 'item4']},
                    {title: 'Title4', data: ['item5', 'item6']},
                    {title: 'Title5', data: ['item5', 'item6']},
                    {title: 'Title6', data: ['item5', 'item6']},
                    {title: 'Title7', data: ['item5', 'item6']},
                    {title: 'Title8', data: ['item5', 'item6']},
                    {title: 'Title9', data: ['item5', 'item6']}
                ]}
                keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

export default Compendium;