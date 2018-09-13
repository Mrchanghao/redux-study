export const LOAD_STACK = 'LOAD_STACK'
export const ADD_STACK = 'ADD_STACK';
export const DELETE_STACK = 'DELETE_STACK';

export function stacksReducer (state = [], action) {
    switch(action.type) {
        case LOAD_STACK:
            return action.stacks;
        case ADD_STACK:
            return [...state, {...action.stack, id: state.length}];
        case DELETE_STACK:
            return state.filter((stacks, index) => stacks[index] !== action.index)
        default:
            return state;
    }
};


export const loadStack = (stacks) => {
    return {
        type: LOAD_STACK,
        stacks
    }
}

export const addStack = (stack) => {
    return {
        type: ADD_STACK,
        stack
    }
}


export const deleteStack = (index) => {
    return {
        type: DELETE_STACK,
        index
    }
}


