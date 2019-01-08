import React, {Component} from 'react'
import Axios from 'axios'

const TestContext = React.createContext()

class AdminProvider extends Component{
    constructor(){
        super()
        this.state = {
            token: '',
            username: '',
            password: ''
        }
    }

    signin = userInfo => {
        Axios.post('/auth/login', userInfo).then(res => {
            this.setState({
                token: res.data.token
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
                <TestContext.Provider value={{
                    signin: this.signin,
                    token: this.state.token
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

