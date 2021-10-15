import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

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
          <a href="/add-result" className="navbar-brand">Add Result</a>
          <a href="/add-student" className="navbar-brand">Add Students</a>
        </div>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Header;