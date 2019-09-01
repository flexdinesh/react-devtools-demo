import React, { useState } from "react";
import NameAndPassword from "./NameAndPassword";
import "./index.css";

function LoginFormWithHooks() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="loginForm">
      <h3>State and Props</h3>
      <input
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <NameAndPassword name={username} password={password} />
    </div>
  );
}

export default LoginFormWithHooks;
