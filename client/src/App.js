import React, {Component} from 'react'
import './styles.css'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Menubar from './Menubar'
import Navbar from './Navbar'
import Popup from 'reactjs-popup'
import About from './About'
import Contact from './Contact'
import Admin from './Admin'

class App extends Component{
    render(){
        const styles = {
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }
        const contentStyle = {
            background: 'rgba(255,255,255,0',
            width: '80%',
            border: 'none'
        }

        return(
            <div>
                <div style={styles}>
                    <Popup
                        modaloverlayStyle={{background: 'rgba(255,255,255,0.98'}}
                        contentStyle={contentStyle}
                        closeOnDocumentClick={false}
                        trigger={open => <Menubar open={open}/>}
                    >
                        {close => <Navbar close={close} />}
                    </Popup>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </div>
        )
    }
}

export default App