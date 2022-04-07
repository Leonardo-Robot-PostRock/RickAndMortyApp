import React from 'react';
import '../css/Nabvar.css';

const Nabvar = ({ brand }) => {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <a className="navbar-item" href="">{brand}</a>
            </div>
        </nav>
    );
}

export default Nabvar;