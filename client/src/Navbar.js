import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
            <div className='navColor'>
                <Link to='/' onClick={props.close}>Home</Link>
                <Link to='/about' onClick={props.close}>About</Link>
                <Link to='/contact' onClick={props.close}>Contact</Link>
                <Link to='/admin' onClick={props.close}>Admin</Link>
            </div>
    )
}

export default Navbar