import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo-container'/>
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">
                    SHOP
                </Link>
                <Link className='option' to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header