import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div>
            <div className='navColor'>
                <Link to='/' onClick={props.close}>Home</Link>
                <Link to='/about' onclick={props.close}>About</Link>
                <Link to='/contact' onclick={props.close}>Contact</Link>
                <Link to='/admin' onclick={props.close}>Admin</Link>
            </div>
        </div>
    )
}

export default Navbar