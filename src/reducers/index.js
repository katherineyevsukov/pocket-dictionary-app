import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    wordInfo: {
        word: '',
        definitions: [
        {partOfSpeech: '' , meaning: []},
        ],  
    },
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCH_START):
            return({
                ...state,
                wordInfo: {
                    word: '',
                    definitions: [
                    {partOfSpeech: '' , meaning: []},
                    ],  
                },
                isFetching: true,
                error:''
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                wordInfo: {
                    word: action.payload.word,
                    definitions: action.payload.meanings.map(obj => ({partOfSpeech: obj.partOfSpeech, meaning: obj.definitions.map(def => (def.definition)) }))
                },
                isFetching: false,
                error: '',
            })
        case(FETCH_FAIL):
        return({
            ...state,
            wordInfo: { 
            },
            isFetching: false,
            error: action.payload
        })
            
        default:
            return state;
    }
}