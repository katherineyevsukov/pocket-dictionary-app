import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const getWord = (wordInput) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
        .then(resp => {
            dispatch(fetchSuccess(resp.data[0]))
            // console.log(resp.data[0].meanings)
        })
        .catch(err => {
            dispatch(fetchFail(err.message))
        })
    }
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}

export const fetchSuccess = (word) => {
    return ({type: FETCH_SUCCESS, payload: word})
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error})
}
