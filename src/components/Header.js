import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="selected" exact>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
    </header>
);

export default Header;