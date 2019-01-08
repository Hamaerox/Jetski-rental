import React, {Component} from 'react'
import {withReservations} from './BookingsProvider'
import moment from 'moment'
import './styles.css'



class Bookings extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.getBookings()
    }


    render(){
        const reservations = this.props.reservations
        return(
            <div className='reservations'>
            <h1>Bookings: </h1>
                <div>{reservations.map(item => 
                        <h1>
                            {`Name: ${item.name.toUpperCase()}, 
                            Date: ${moment(item.date).format("MMM Do YY")}, 
                            Time: ${item.time}, 
                            Phone: ${item.phone}, 
                            Email: ${item.email}`}</h1>)}
                </div>
            </div>
        )
    }
}

export default withReservations(Bookings)