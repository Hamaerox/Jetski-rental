import React, {Component} from 'react'
import axios from 'axios'

const {Provider, Consumer} = React.createContext()

class BookingsProvider extends Component{
    constructor(){
        super()
        this.state = {
            reservations: []
        }
    }

    getBookings = () => {
        axios.get('/bookings').then(res => {
            this.setState({
                reservations: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
                <Provider 
                value={{
                    reservations: this.state.reservations,
                    getBookings: this.getBookings
                }}>
                    {this.props.children}
                </Provider>
        )
    }
}
export default BookingsProvider

export const withReservations = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

