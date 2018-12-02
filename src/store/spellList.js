import React, {Component} from 'react';
import spells from '../../res/data_file.json';

let notesData = Object.keys(spells).map((key) => {
    return [{name: key, header: true}].concat(spells[key])
  });
  
notesData = [].concat.apply([], this.notesData);

export default {notesData}