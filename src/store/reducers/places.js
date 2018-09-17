import {
    ADD_PLACE,
    DELETE_PLACE
} from '../actions/actionTypes';

const initialState = {
    place: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: "test"
                    }

                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        }
}

export default reducer