import {
    ADD_SPELL,
    DELETE_SPELL,
    CREATE_SPELLBOOK,
    DELETE_SPELLBOOK
} from '../actions/actionTypes';
import spellData from '../../../res/data_file.json'

const initialState = {
    spells: spellData,
    spellbooks: [
        {
            name: "testSpellbook",
            spells: [
                [spellData[0]].name
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SPELL:
            return{
                ...state,
                spells: state.spells.concat({
                    name: action.spellName,
                    level: 0
                })
            };
        case DELETE_SPELL:
            return {
                ...state,
                spells: state.spells.splice(state.spells.indexOf(action.spellName), 1),
            };
        case CREATE_SPELLBOOK:
            return {
                ...state,
                spellbooks: state.spellbooks.concat({
                    name: action.spellbookName
                })
            }
        case DELETE_SPELLBOOK:
            return {
                ...state,
                spellbooks: state.spellbooks.filter(function(obj){
                    return obj.name != action.spellbookName
                })
            }
        default:
            return state;
        }
};

export default reducer