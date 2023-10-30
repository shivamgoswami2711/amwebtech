import React, { useEffect, useState } from "react";
import "./style/login.css";
import userData from "../data/db.json";
import useStateValue from "../store/store";
import { useNavigate } from "react-router-dom";
import { useChacklogin } from "../utils/Hook/useChacklogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, dispatch] = useStateValue();
  const navigate = useNavigate();
  useChacklogin();

  const SubmitHeadler = (e) => {
    e.preventDefault();

    if (email.length < 5 && password.length < 5) {
      dispatch({
        type: "set_massage",
        payload: "please enter valid email and password",
      });
    } else {
      if (email === userData.email && password === userData.password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate("/", { replace: true });
      } else {
        dispatch({
          type: "set_massage",
          payload: "please enter valid email and password",
        });
      }
    }
  };

  useEffect(() => {
    const time = setTimeout(() => dispatch({ type: "clear_massage" }), 3000);
    return () => {
      clearTimeout(time);
    };
  }, [data.massage]);

  return (
    <div className="login__main___Container">
      <div className="login__Container auth">
        <div>
          {data.massage.length > 0 && (
            <div className="magBox">{data.massage}</div>
          )}
        </div>
        <div>
          <h1>Login</h1>
        </div>
        <form action="" onSubmit={SubmitHeadler}>
          <div className="input__container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email__login"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <div className="errorMsg">{/* <p>Lorem, ipsum dolor.</p> */}</div>
          </div>
          <div className="input__container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password__login"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <br />
            <div className="error__Msg">{/* <p>Lorem, ipsum dolor.</p> */}</div>
          </div>
          <div className="login__button__container">
            <input type="submit" value="login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
