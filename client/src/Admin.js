import React, {Component} from 'react'
import './styles.css'
import {withAdmin} from './AdminProvider'



class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    this.props.signin({username, password})
}

    render(){
        return(
            <div>
                <div className='bookingContainer'>
                    <form className='bookingForm' onSubmit={this.handleSubmit}>
                        <h1>Admin Login</h1>
                        <h4>Username:</h4>
                        <input 
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}/>
                            <h4>Password:</h4>
                        <input 
                            type='text'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}/>
                            <h4>Welcome!</h4>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAdmin(Admin)