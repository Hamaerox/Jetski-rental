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
            number: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {date, time, name, email, number} = this.state
        axios.post('http://localhost:8000', {date, time, name, email, number}).then(res => {
            console.log(res)
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
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='date' 
                            name='date'
                            value={this.state.date} 
                            onChange={this.handleChange}/>
                        <select 
                            name='time'
                            value={this.state.time}
                            onChange={this.handleChange}>
                            <option>Choose a Time</option>
                            {data.time.map(time => <option key={time} value={time}>{time}</option>)}
                        </select>
                        <input 
                            type='text'
                            name='name'
                            placeholder='Name of Renter'
                            value={this.state.name}
                            onChange={this.handleChange}/>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Your Email Address'
                            value={this.state.email}
                            onChange={this.handleChange}/>
                        <input 
                            type='number'
                            name='number'
                            placeholder='Contact Number'
                            value={this.state.number}
                            onChange={this.handleChange}/>
                        <button>Book my Adventure!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home