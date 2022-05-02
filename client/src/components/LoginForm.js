// import React, { useState } from "react";
// // import { button, error, input, div, label } from "../styles/button";
// import { createBrowserHistory } from 'history';
// import { Link, useNavigate, Redirect, Route } from "react-router-dom";

// function LoginForm({ onLogin }) {
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [errors, setErrors] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// const history = createBrowserHistory();

// function handleSubmit(e) {
// e.preventDefault();
// setIsLoading(true);
// fetch("/login", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
// }).then((r) => {
//     setIsLoading(false);
//     if (r.ok) {
//     r.json().then((user) => {
//         onLogin(user);
//   return history.push("/")
//     })
//     } else {
//     r.json().then((err) => setErrors(err.errors));
//     }
// });
// }

// return (
// <form onSubmit={handleSubmit} >
//     <div>
//     <label htmlFor="username">Username</label>
//     <input
//         type="text"
//         id="username"
//         autoComplete="off"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//     />
//     </div>
//     <div>
//     <label For="password">Password</label>
//     <input
//         type="password"
//         id="password"
//         autoComplete="current-password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//     />
//     </div>
//     <div>
//     <button variant="fill" color="primary" type="submit">
//         {isLoading ? "Loading..." : "Login"}
//     </button>
//     </div>
//     <div>
//         {errors.map((err) => (
//         <error key={err}>{err}</error>
//     ))}
//     </div>
// </form>
// );
// }

// export default LoginForm;

import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        console.log("logged in");
        history.push("/ingredients")
      })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} >
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default LoginForm;