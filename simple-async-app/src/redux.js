import {applyMiddleware, combineReducers ,createStore} from 'redux';
import thunk from 'redux-thunk';


// action 
export const addRepos = repos => ({
    type: 'ADD_REPOS',
    repos
})

export const clearRepos = () => ({type: "CLEAR_REPOS"});

export const getRepos = username => async dispatch => {
    try {
        const url = `https://api.github.com/users/${username}/repos?sort=updated`;
        const res = await fetch(url)
        const resData = await res.json();
        dispatch(addRepos(resData));
    } catch (error) {
        console.error(error)
        dispatch(clearRepos());
    }
};


// reducer 
export const repos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_REPOS':
            return action.repos;
        case 'CLEAR_REPOS':
            return [];
        default:
            return state;
    }
};

export const reducers = combineReducers({repos});

// store 

export function configureStore (initialState = {}) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));
    return store;
};


export const store = configureStore();