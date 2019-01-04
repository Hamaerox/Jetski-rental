import React, {Component} from 'react'
import './styles.css'
import Home from './Home'

class App extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Home/>
            </div>
        )
    }
}

export default App