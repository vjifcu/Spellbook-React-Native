import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

class SpellDetail extends Component {
  getOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }

  subheading = (level, school)  => {
    if (level == 0){
      return school + " cantrip"
    }
    return this.getOrdinal(level) + "-level " + school
  }

  renderDescription = (text) => {
    let result = []
    let innerResult = []

    text

    for(let i = 0; i < text.length; i++){
      for(let j = 0; j < text[i].length; j++){
        innerResult.push(<Text style={[styles.spellText, {}]} key={text[i][j]}>{text[i][j]}</Text>)
      }
      result.push(<View style={{marginBottom: 20}}>{innerResult}</View>)
      innerResult.length = 0
    }

    return result
  }

  render() {
    return (
        <View style={styles.container}>
          <View>
              <Text style={styles.spellName}>{this.props.selectedSpell.name}</Text>
              <Text style={{fontStyle: "italic", fontSize: 16}}>{this.subheading(this.props.selectedSpell.level, this.props.selectedSpell.school)}</Text>
              <Text style={styles.spellText}>
                <Text style={{fontWeight: "bold"}}>Casting Time: </Text>
                <Text>{this.props.selectedSpell.time}</Text>
              </Text>
              <Text style={styles.spellText}>
                <Text style={{fontWeight: "bold"}}>Range: </Text>
                <Text>{this.props.selectedSpell.range}</Text>
              </Text>
              <Text style={styles.spellText}>
                <Text style={{fontWeight: "bold"}}>Components: </Text>
                <Text>{this.props.selectedSpell.components}</Text>
              </Text>
              <Text style={styles.spellText}>
                <Text style={{fontWeight: "bold"}}>Duration: </Text>
                <Text>{this.props.selectedSpell.duration}</Text>
              </Text>
              <View style={{marginBottom: 20}}>
                <Text>test</Text>
                <Text>test2</Text>
              </View>
              <View style={{marginBottom: 20}}>
                <Text>test</Text>
                <Text>test2</Text>
              </View>
                {this.renderDescription(this.props.selectedSpell.text)}
          </View>
          <View>
            <TouchableOpacity onPress={this.props.onItemDeleted}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="trash-o" color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  spellText: {
    fontSize: 16
  },
  spellName: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#7f000c"
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default SpellDetail;
