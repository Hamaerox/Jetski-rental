import React, {Component} from 'react'
import './styles.css'
import axios from 'axios'
import data from './time.json'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            date: '',
            time: '',
            name: '',
            email: '',
            phone: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {date, time, name, email, phone} = this.state
        axios.post('/bookings', {date, time, name, email, phone}).then(res => {
            alert('Your booking was submitted successfully')
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    render(){
        return(
            <div>
                <div className='bookingContainer'>
                <h1>Book your adventure below!</h1>
                    <form className='bookingForm' onSubmit={this.handleSubmit}>
                    <h4>What Date would you like to book?</h4>
                        <input 
                            className='bookingInput'
                            type='date' 
                            name='date'
                            value={this.state.date} 
                            onChange={this.handleChange}
                            required/>
                            <h4 className='formText'>What time would you like to go at?</h4>
                        <select 
                            className='bookingInput'
                            required
                            name='time'
                            value={this.state.time}
                            onChange={this.handleChange}>
                            <option value=''>Choose a Time</option>
                            {data.time.map(time => <option key={time} value={time}>{time}</option>)}
                        </select>
                        <h4 className='formText'>Please enter your name:</h4>
                        <input 
                            className='bookingInput'
                            type='text'
                            name='name'
                            placeholder='Name of Renter'
                            value={this.state.name}
                            onChange={this.handleChange}
                            required/>
                            <h4 className='formText'>Please enter your email:</h4>
                        <input 
                            className='bookingInput'
                            type='email'
                            name='email'
                            placeholder='Your Email Address'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                            <h4 className='formText'>Please enter a number to reach you at:</h4>
                        <input 
                            className='bookingInput'
                            type='number'
                            name='phone'
                            placeholder='Contact Number'
                            value={this.state.phone}
                            onChange={this.handleChange}
                            required/>
                            <h4 className='formText'>Please verify above info is correct before submitting</h4>
                        <button className='bookingInput'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home