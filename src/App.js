import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import Header from './Component/Header'
import Homepage from './Component/Homepage'
import Signup from './Component/Signup'
import Login from './Component/Login'

class App extends React.Component {

  render() {
    return (
      <>

        <>
          <Header />
        </>
        <>
        <Switch>
        </Switch>
        </>
        
      </>
    )
  }
}


export default connect(msp, mdp)(App)