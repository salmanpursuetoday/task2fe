import React, { useState, useContext } from 'react';
import jwt from "jsonwebtoken";
import { Redirect } from 'react-router-dom';

import axios from '../../../utils/helpers/axios';
import AdminContext from "../../../utils/userContext/context";

import './Style.css';

const Login = () => {
  const { user, setUser } = useContext(AdminContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/admin/signin', { email, password })
    const token = res?.data?.token;
    localStorage.setItem("auth_token", token);
    setUser(jwt.decode(token));
  }

  if (user) return <Redirect to={'/add-result'} />

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div classname="col-md-8">
          <div className="wrapper fadeInDown login">
            <div id="formContent">
              <div className="fadeIn first">
                <h3 className="mt-3">Login</h3>
              </div>
              <form onSubmit={hanldeSubmit}>
                <input type="text" id="login" className="fadeIn second login-input" placeholder="email" required value={email} onChange={(e) => setEmail(e?.target?.value)} />
                <input type="password" id="password" className="fadeIn third login-input" placeholder="password" required value={password} onChange={(e) => setPassword(e?.target?.value)} />
                <input type="submit" className="fadeIn fourth login-btn" />
              </form>
              <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;