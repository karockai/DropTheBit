// actions/index.js
export const ADD = 'ADD';
export const SUB = 'SUB';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const add = () => {
    return {
        type: ADD
    }
};

export const sub = () => {
    return {
        type: SUB
    }
};

export const addMessage = () => {
    return {
        type: ADD_MESSAGE,
    }
}