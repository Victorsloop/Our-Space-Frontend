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