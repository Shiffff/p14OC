import React, { useState } from 'react';
import "./header.scss"
import { Link } from "react-router-dom";

const Header = () => {
    const [menuPage, setMenuPage] = useState(true)
    

    return (
        <header>
            <h1>HRNET</h1>
            <div className='btnHeaderRight' onClick={() => setMenuPage(!menuPage)}>
                {menuPage ? (
                    <Link to="/employee-list">
                        <button>View Current Employees</button>
                    </Link>
                ) : (
                    <Link to="/">
                        <button>Create Employee</button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
