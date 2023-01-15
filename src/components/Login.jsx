/** @format */

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      pass,
    };
    console.log(payload);
    fetch("https://cute-pink-bee-hose.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>{
        console.log(res);
        localStorage.setItem("token",res.token)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Login Page</h3>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
