import {
    ADD_SPELL,
    DELETE_SPELL,
    CREATE_SPELLBOOK,
    DELETE_SPELLBOOK,
    SELECT_SPELLBOOK,
    DESELECT_SPELLBOOK
} from '../actions/actionTypes';
import spellData from '../../../res/data_file.json'

const initialState = {
    spells: spellData,
    spellbooks: [
        {
            name: "testSpellbook",
            spells: [
                spellData[0].name,
                spellData[1].name
            ]
        },
        {
            name: "testSpellbook2",
            spells: [
                spellData[5].name,
                spellData[6].name,
                spellData[7].name
            ]
        }
    ],
    selectedSpellbook : "testSpellbook2"
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
        case SELECT_SPELLBOOK:
            return {
                ...state,
                selectedSpellbook: state.spellbooks.find(function(obj){
                    console.log(action.spellbookName)
                    console.log(obj.name)
                    return obj.name == action.spellbookName
                }).name
            }
        case DESELECT_SPELLBOOK:
            return {
                ...state,
                selectedSpellbook: null
            }
        default:
            return state;
        }
};

export default reducer