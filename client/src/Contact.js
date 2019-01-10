import React from 'react'
import './styles.css'

const Contact = () => {
    return(
        <div className='bookingContainer'>
        <h1>Feel free to contact us with any questions below!</h1>
            <form className='bookingForm'>
                    <h4>Please enter your name:</h4>
                        <input 
                            className='bookingInput'
                            type='name' 
                            name='name'
                            placeholder='Name'
                            required/>
                    <h4 className='formText'>Please enter your email:</h4>
                        <input 
                            className='bookingInput'
                            type='email'
                            name='email'
                            placeholder='Your Email Address'
                            required/>
                    <h4 className='formText'>Please enter a number to reach you at with no spaces, dashes or parenthesis:</h4>
                        <input 
                            className='bookingInput'
                            type='number'
                            name='phone'
                            placeholder='Contact Number'
                            required/>
                    <h4 className='formText'>A brief description of what we can help you with:</h4>
                        <textarea className='description' 
                              type='text' 
                              name='description' 
                            ></textarea>
                            <br></br>
                    <button className='bookingInput'>Submit</button>
            </form>
        </div>
    )
}

export default Contact