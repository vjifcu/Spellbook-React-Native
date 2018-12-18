import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import cloneDeep from "lodash.clonedeep"

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

    for(let i = 0; i < text.length; i++){
      for(let j = 0; j < text[i].length; j++){
        innerResult.push(<Text style={[styles.spellText, {marginBottom: 4}]} key={text[i][j]}>{text[i][j]}</Text>)
      }
      result.push(<View style={{marginBottom: 12}} key={i}>{cloneDeep(innerResult)}</View>)
      innerResult.length = 0
    }

    return result
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
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
              <View style={{marginTop: 10}}>
                {this.renderDescription(this.props.selectedSpell.text)}
              </View>
          </ScrollView>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginRight: 12,
    flex: 1
  },
  spellText: {
    fontSize: 16
  },
  spellName: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#7f000c"
  }
});

export default SpellDetail;
