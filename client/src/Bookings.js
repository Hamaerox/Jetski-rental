import React, {Component} from 'react'
import {withReservations} from './BookingsProvider'
import moment from 'moment'
import './styles.css'
import {withAdmin} from './AdminProvider'



class Bookings extends Component {
    constructor(props){
        super(props)
        this.state = {
            reservations: []
        }
    }

    componentDidMount(){
        this.props.getBookings()
    }

    handleDelete = (id) => {
       this.props.deleteBookings(id)
    }

    render(){
        const reservations = this.props.reservations
        return(
            <div>
            <h1>Bookings: </h1>
                <div>{reservations.map(item => 
                        <div className='reservations'>
                            {`Name: ${item.name.toUpperCase()}`}
                            <br></br>
                            {`Date: ${moment(item.date).format("MMM Do YY")}`} 
                            <br></br>
                            {`Time: ${item.time}`} 
                            <br></br>
                            {`Phone: ${item.phone}`}
                            <br></br>
                            {`Email: ${item.email}`}
                            <br></br>
                            <button onClick={ () => this.handleDelete(item._id)}>Delete</button>
                        </div>
                    )}
                </div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default withAdmin(withReservations(Bookings))