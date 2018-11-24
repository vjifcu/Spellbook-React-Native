import {ADD_SPELL, DELETE_SPELL} from './actionTypes';

export const addSpell = (spellName) => {
    return {
        type: ADD_SPELL,
        spellName: spellName
    };
};

export const deleteSpell = (spellName) => {
    return {
        type: DELETE_SPELL,
        spellName: spellName
    };
};
