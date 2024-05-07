import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      navigate("/Form");
    } else {
      alert("Please enter email and password");
    }
  };

  if (isLoggedIn) {
    navigate("/Form");
  }

  return (
    <div className="class">
      <form>
        <h1 className="log">Please Log in</h1>

        <div className="form-floating">
          <input
            required
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            required
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
