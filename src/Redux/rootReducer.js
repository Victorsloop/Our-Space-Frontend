import { combineReducers } from 'redux'

const defaultState = {
    currentUser: null,
    allThoughts: [],
    someThoughts: [],
    myThoughts: [],
    notes:[]
}

const rootReducer = combineReducers({
    currentUser: setUser,
    allThoughts: getThoughtsData,
    someThoughts: getSomeThoughts,
    myThoughts: getMyThoughts,
    notes: getNotes
})

export default rootReducer
