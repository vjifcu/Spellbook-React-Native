import {ADD_SPELL, DELETE_SPELL, CREATE_SPELLBOOK, DELETE_SPELLBOOK, DESELECT_SPELLBOOK, SELECT_SPELLBOOK} from './actionTypes';

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

export const createSpellbook = (spellbookName) => {
    return {
        type: CREATE_SPELLBOOK,
        spellbookName: spellbookName
    }
}

export const deleteSpellbook = (spellbookName) => {
    return {
        type: DELETE_SPELLBOOK,
        spellbookName: spellbookName
    }
}

export const selectSpellbook = (spellbookName) => {
    return {
        type: SELECT_SPELLBOOK,
        spellbookName: spellbookName
    }
}

export const deselectSpellbook = () => {
    return {
        type: DESELECT_SPELLBOOK
    }
}
