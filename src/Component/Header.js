import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'


class Header extends React.Component {


    render() {
        return (
            <div>
               <h1>Our Space</h1>
            </div>
        )
    }
}

export default connect(msp)(Header)
