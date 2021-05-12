// reducers/index.js
import {ADD, SUB, ADD_MESSAGE} from '../actions/index';

const initState = {
    messages: []
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            return {
                messages: [...state.messages, action.payload]
            }
        case ADD:
            return Object.assign({}, state, {
                number: state.number + 1
            });
        case SUB:
            return Object.assign({}, state, {
                number: state.number - 1
            });
        default:
            return state;
    }
};
