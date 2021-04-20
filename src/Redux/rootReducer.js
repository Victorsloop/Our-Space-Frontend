import { combineReducers } from 'redux'

const defaultState = {
    currentUser: null,
    allDillemas: [],
    someDillemas: [],
    myDillemas: [],
    notes:[]
}

function setUser(state = defaultState.currentUser, action) {
    switch (action.type) {
        case "SET_USER":
            return (action.payload)
        case "REFRESH_USER":
            return (action.payload)
        case "UPDATE_USER":
            return (action.payload)
        case "DELETE_USER":
            return []
        default:
            return state
    }
}

function getDillemasData(state = defaultState.allDillemas, action) {
    switch (action.type) {
        case "ALL_DILLEMAS":
            return (action.payload)
        default:
            return state
    }
}

function getMyDillemas(state = defaultState.myDillemas, action) {
    switch (action.type) {
        case "MY_DILLEMAS":
            return (action.payload)
        default:
            return state
    }
}

function getNotes(state = defaultState.notesArray, action) {
    switch (action.type) {
        case "GET_NOTES":
            return (action.payload)
        default:
            return state
    }
}



const rootReducer = combineReducers({
    currentUser: setUser,
    allDillemas: getDillemasData,
    someDillemas: getSomeDillemas,
    myDillemas: getMyDillemas,
    notes: getNotes
})

export default rootReducer
