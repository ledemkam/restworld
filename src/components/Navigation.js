import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <nav className="navigation">
         <Link to="/" activeClassName="nav-active">
            Home
         </Link>
         <Link to="/new" activeClassName="nav-active">
            News
         </Link>
         <Link to="/about" activeClassName="nav-active">
            About
         </Link>
      </nav>
   );
};

export default Navigation;
