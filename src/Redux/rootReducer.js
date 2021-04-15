import { combineReducers } from 'redux'

const defaultState = {
    currentUser: null,
    allDillemas: [],
    someDillemas: [],
    myDillemas: [],
    notes:[]
}

const rootReducer = combineReducers({
    currentUser: setUser,
    allDillemas: getDillemasData,
    someDillemas: getSomeDillemas,
    myDillemas: getMyDillemas,
    notes: getNotes
})

export default rootReducer
