import {generateUser} from '../static-data';

export default function User(state = generateUser(), action) {
    return state;
}
