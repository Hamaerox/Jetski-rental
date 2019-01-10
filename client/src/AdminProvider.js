import React, {Component} from 'react'
import Axios from 'axios'

const TestContext = React.createContext()

class AdminProvider extends Component{
    constructor(){
        super()
        this.state = {
            token: localStorage.getItem('token') || '',
            username: '',
            password: ''
        }
    }

    signin = userInfo => {
        Axios.post('/auth/login', userInfo).then(res => {
            const {token, admin} = res.data
            localStorage.setItem('user', JSON.stringify(admin))
            localStorage.setItem('token', token)
            this.setState({
                user: admin, token,
                token: res.data.token
            })
        })
        .catch(err => console.log(err))
    }


    logout = () => {
        this.setState({
            user: '',
            token: ''
        })
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    render(){
        return(
                <TestContext.Provider value={{
                    signin: this.signin,
                    token: this.state.token,
                    logout: this.logout
                }}>
                {this.props.children}
                </TestContext.Provider>
        )
    }
}

export default AdminProvider

export const withAdmin = C => props => (
    <TestContext.Consumer>
        {value => <C {...value} {...props}/>}
    </TestContext.Consumer>
)

