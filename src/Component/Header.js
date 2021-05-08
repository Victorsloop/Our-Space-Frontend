import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'


class Header extends React.Component {
    loggedOutMenu = [
        {
       
        }
    ]

    loggedInMenu = [
       
    ]
    logoutHandler = () => {
        localStorage.clear()
        window.location.href = '/home'
    }



    render() {
        return (
            <div>
               <h1>Our Space</h1>
               {this.props.currentUser ?
                    <>
                    <Menuone/> 
                    </>
                    : <Menu2 /> }
            </div>
        )
    }
}

function msp(state){
    return({
        currentUser: state.currentUser
        
    })
}

export default connect(msp)(Header)
