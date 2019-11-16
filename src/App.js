import React, { useState, useEffect } from 'react';
import * as help from './helpers';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const axiosWithCred = axios.create({
  withCredentials: true,
});

function App() {
  const [response, setResponse] = useState(null)

  const request = url => {
    console.log(document.cookie);
    axiosWithCred.get(help.withBaseURL(url))
      .then(res => {
        setResponse(res.data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(response)}
        </p>
        <button onClick={() => request('/api')}>api</button>
        <button onClick={() => request('/api/users')}>api/users</button>
        <button onClick={() => request('/api/roles')}>api/roles</button>
      </header>
    </div>
  );
}

export default App;
