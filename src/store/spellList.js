import React, {Component} from 'react';
import spells from '../../res/data_file.json';

//console.log("spells: " + spells)
let notesData = Object.keys(spells).map((key) => {
    //console.log("spell " + spells[key][name] + ": " + spells[key])
    return [{name: key, header: true}].concat(spells[key])
  });
  
notesData = [].concat.apply([], this.notesData);
console.log(spells)

export default {notesData}