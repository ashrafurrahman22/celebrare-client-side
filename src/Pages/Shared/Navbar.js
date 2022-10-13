import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/weedingCards'>Wedding Cards</Link></li>
      <li><Link to='/'>Birthday Cards</Link></li>
      <li><Link to='/'>Feeling Cards</Link></li>
      <li><Link to='/'>Anniversary Cards</Link></li>
      </ul>
    </div>
    <Link to='/'>
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/weddingCards'>Wedding Cards</Link></li>
      <li><Link to='/birthdayCards'>Birthday Cards</Link></li>
      <li><Link to='/feelingCards'>Feeling Cards</Link></li>
      <li><Link to='/anniversaryCards'>Anniversary Cards</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'>Login</Link>
    <h2 className='p-1'> | </h2>
    <Link to='/signup'>Signup</Link>
  </div>
</div>
    );
};

export default Navbar;