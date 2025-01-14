import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navlinks'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className='nav-logo'>
            <img src={require('../images/logo.png')}/>
        </div>
        <div className='nav-icons'>
          <img src={require('../images/user.png')} alt='acc'/>
          <Link to='/cart'><img src={require('../images/shopping-basket.png')} alt='cart'/></Link>
        </div>
    </nav>
  )
}

export default Navbar