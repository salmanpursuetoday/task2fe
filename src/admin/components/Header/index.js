import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';

import AdminContext from "../../../utils/userContext/context";

const Header = () => {
  const { user, setUser } = useContext(AdminContext);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  }

  if (!user) return <Redirect to="/login" />
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <div>
          <a href="#" className="navbar-brand">Admin</a>
          <Link to="/add-result" className="pr-5 font-weight-bold" >Add Result</Link>
          <Link to="/add-student" className="pr-5 font-weight-bold" >Add Students</Link>
          <Link to="/students" className="pr-5 font-weight-bold" >Students</Link>
        </div>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Header;