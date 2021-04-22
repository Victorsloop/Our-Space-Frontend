import actionTypes from './actionTypes'

// User Functions

export function setUser(userObj, history) {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(response => response.json())
            .then(userData => {
                console.log("IN SET USER 2", userData)
                localStorage.setItem("token", userData.jwt)
                localStorage.setItem("user_id", userData.user.id)
                dispatch({ type: actionTypes.currentUser, payload: userData })
                history.push("/home")
            })
            .catch(console.log)
    }
}

export function updateUser(userObj) {
    return function(dispatch) {
        dispatch({type: actionTypes.updateUser,payload: userObj})
    }
}

export function editAccount(userId, updatedObj, history){
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/users/${userId}`,{
            method: `PATCH`,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedObj),
        })
        .then(response => response.json())
        .then(userData => {
            history.push("/profile")
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }
}

export function deleteUser(userId,history) {
    return function(dispatch) {
        fetch(`http://localhosty:3000/apu/v1/users/${userId}`,{
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: actionTypes.deleteAccount,payload: userId})
        })
        .catch(console.log)
    }
}

// Dillemas functions 

export function browseDillemas(userId) {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/dillemas')
        .then(response => response.json())
        .then(allDillemas => {
            dispatch({ type: actionTypes.allDillemas, payload: allDillemas})
            dispacth({ type: actionTypes.browseDillemas, payload: data})
        })
        .catch(console.log)
    }
}

export function postADillema(dillemaObj, history){
    return function() {
        fetch('http://localhost:3000/api/v1/dillemas',{
            method: "POST",
            headers:{
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({dillema: dillemaObj})
        })
        .then(response => response.json())
        .then(history.push('/home'))
        .catch(console.log)
    }
}

export function getADillema(userId){
    return function(dispatch) {
        fetch('http://localhost:3000/api/v1/dillemas')
        .then( response => response.json())
        .then( allDillemas => {
            dispatch({type: actionTypes.myDillemas, payload: data})
        })
        .catch(console.log)
    }
}

export function deleteDillema(dillemaId, history){
    return function(){
        fetch(`http://localhost:3000/api/v1/dillemas/${dillemaId}`,{
            method: "DELETE",
        })
        .then( response => response.json())
        .then(history.push('allDillemas'))
        .catch(console.log)
    }
}