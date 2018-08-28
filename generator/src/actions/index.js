import {username, password} from './secrets';
export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

export const receiveMemes = (json) => {
    const {memes} = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}


// 프로미스로 펜딩 된 데이터
// const fetchMemesJson = () => {
//     return fetch('https://api.imgflip.com/get_memes')
//     .then(res => res.json())
// }

const fetchMemesJson = async () => {
    let res = await fetch('https://api.imgflip.com/get_memes')
    let json = await res.json();
    // console.log(json)
    return json;
}

// 현재 액션 크레이터에 데이터를 디스패치 한다..?? 
export const fetchMemes = () => {
    return (dispatch) => {
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}




export const newMeme = (meme) => {
    return {
        type: NEW_MEME,
        meme
    }
}

const postMemeJson = async (params) => {
    params['username'] = username;
    params['password'] = password;
    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
    console.log(bodyParams);
    let res = await fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    });
    let json = await res.json();
    return json;

};


export const createMeme = (new_meme_obj) => {
    console.log(new_meme_obj)
    return dispatch => {
        postMemeJson(new_meme_obj)
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
}