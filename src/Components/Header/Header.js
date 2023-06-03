import React from 'react';
import "./header.scss"

const Header = () => {
    return (
        <header>
            <h1>HRNET</h1>
            <div className='btnHeaderRight'>
                <button>View Current Employees</button>
            </div>
        </header>
    );
};

export default Header;