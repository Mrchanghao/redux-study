import axios from 'axios';

const url = 'http://localhost:3004'

export const GET_ARITSTS_ALL = 'GET_ARITSTS_ALL'
export const SEARCH_ARTIST = 'SEARCH_ARTIST'
export const GET_ARTIST_DETAIL = 'GET_ARTIST_DETAIL'
export const CLEAR_ARTIST_DETAIL = 'CLEAR_ARTIST_DETAIL'
export function artistListAll() {

    const request = axios.get(`${url}/artists?_limit=10`)
        .then(res => {
            return res.data
        })

    return {
        type: GET_ARITSTS_ALL,
        payload: request
    }
}

export const searchArtist = (keyword) => {
    const request = axios.get(`${url}/artists?q=${keyword}`)
    .then(res => res.data);

    return {
        type: SEARCH_ARTIST,
        payload: request
    }
}

export const artistDetail = (id) => {
    const request = axios.get(`${url}/artists?id=${id}`)
    .then(res => res.data)
    return {
        type: GET_ARTIST_DETAIL,
        payload: request
    }
}

export const clearArtistDetail = () => {
    return {
        type: CLEAR_ARTIST_DETAIL
    }
}