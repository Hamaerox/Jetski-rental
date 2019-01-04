import React, {Component} from 'react'
import './styles.css'
import axios

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
        const date = this.state.date
        const time = this.state.time
        const name = this.state.name
        const email = this.state.email
        const number = this.state.number
        e.preventDefault()
        axios.post('', date, time, name, email, number).then(res => {
            console.log(res)
        })
    }

    handleChange = (e) => {
        e.preventDefault()

    }

    render(){
        return(
            <div>
                <div className='bookingContainer'>
                <form onSubmit={this.handleSubmit}>
                    <input type='date' 
                           name='date' 
                           value={this.state.date} 
                           onChange={this.handleChange}/>
                           <br></br>
                    <input type='time'
                           name='time'
                           value={this.state.time}
                           onChange={this.handleChange}/>
                           <br></br>
                    <input type='text'
                           name='name'
                           value={this.state.name}
                           onChange={this.handleChange}/>
                           <br></br>
                    <input type='email'
                           name='email'
                           value={this.state.email}
                           onChange={this.handleChange}/>
                           <br></br>
                    <input type='number'
                           name='number'
                           value={this.state.number}
                           onChange={this.handleChange}/>
                           <br></br>
                    <button>Book my Adventure!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home