export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById (id) {
    return {
        type: ADD_CHARACTER,
        id
    }
}