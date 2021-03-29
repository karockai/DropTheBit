// reducers/index.js
import {ADD, SUB} from '../actions'
import {combineReducers} from 'redux'

const initState = {
    number: 0,
};

const data = (state = initState, action) => {
    switch (action.type) {
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

const App = combineReducers({
    data
});

export default App;