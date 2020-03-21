import React, { useState } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';

export default function Login (props) {
  const [ data, setData ] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/login', data)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubble-page');
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
            <input
                type="text"
                placeholder="username"
                name="username"
                value={data.username}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <button type='submit'>Log in</button>
        </form>
    </>
  );
};

