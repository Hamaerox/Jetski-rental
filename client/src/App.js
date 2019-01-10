import React, {Component} from 'react'
import './styles.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Menubar from './Menubar'
import Navbar from './Navbar'
import Popup from 'reactjs-popup'
import About from './About'
import Contact from './Contact'
import Admin from './Admin'
import Bookings from './Bookings'
import ProtectedRoute from './ProtectedRoute';
import {withAdmin} from './AdminProvider'

class App extends Component{
    render(){
        const styles = {
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }
        const contentStyle = {
            width: '200px',
            height: '100%',
            margin: '2px',
            padding: '2px',
            marginLeft: '2%',
            opacity: '0.9',
            border: 'none'
        }

        const {token} = this.props
        return(
            <div>
                <div style={styles}>
                    <Popup
                        contentStyle={contentStyle}
                        closeOnDocumentClick={false}
                        trigger={open => <Menubar open={open}/>}
                    >
                        {close => <Navbar close={close} />}
                    </Popup>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route exact path='/admin' render={props => token ? <Redirect to='/bookings'/> : <Admin {...props}/>}/>
                    <ProtectedRoute 
                        redirectTo='/admin'
                        component={Bookings}
                        token={token}
                        path='/bookings'
                    />
                </Switch>
            </div>
        )
    }
}

export default withAdmin(App)