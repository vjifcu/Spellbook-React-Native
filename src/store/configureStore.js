import { createStore, combineReducers } from 'redux';

import spellsReducer from './reducers/spells';

const rootReducer = combineReducers({
    rootReducer: spellsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
