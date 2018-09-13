// action type
export const SET_STACK = 'SET_STACK';

// reducer

export function stackReducer (state = {}, action) {
    switch(action.type) {
        case SET_STACK: 
            return action.stack;
        default:
            return state; 
    }
}

// action creator
export const setStack = (stack) => {
    return {
        type: SET_STACK,
        stack
    }
}

