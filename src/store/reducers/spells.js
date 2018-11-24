import {
    ADD_SPELL,
    DELETE_SPELL
} from '../actions/actionTypes';

const initialState = {
    spells: [{
        name: "test spell",
        level: 1
    }],
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
        default:
            return state;
        }
};

export default reducer