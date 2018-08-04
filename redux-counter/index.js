
const count = document.getElementById('counter');
const inc = document.getElementById('increment');
const dec = document.getElementById('decrement');

let initialState = {
    count: 0
};


function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INC':
            return Object.assign({}, state, 
                {count: state.count + 1});
        case 'DEC':
            return Object.assign({}, state, 
                {count: state.count - 1});
        default:
            return state;
    }
};

const store = Redux.createStore(reducer, initialState)




inc.addEventListener('click', () => store.dispatch({type: 'INC'}));
dec.addEventListener('click', () => store.dispatch({type: 'DEC'}));

function updateView() {
    document.querySelector('#counter').textContent = store.getState().count;
};

store.subscribe(updateView)

// 