import React, {Component} from 'react'
import './styles.css'
import Axios from 'axios';

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

handleChange(e){
    e.preventDefault()
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit(){
    const {username, password} = this.state
    Axios.post('/auth/login', username, password).then(res => {
        console.log(res)
    })
}

    render(){
        return(
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
                        name='passowrd'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                        <h4>Welcome!</h4>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Admin