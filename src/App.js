import React, { useState } from 'react';
import * as help from './helpers';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

// if using cookies
// const axiosWithCred = axios.create({
//   withCredentials: true,
// });

function App() {
  const [response, setResponse] = useState(null)

  const getRequest = api => {
    axios.get(help.withBaseURL(api))
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
        <button onClick={() => getRequest('/api')}>api</button>
        <button onClick={() => getRequest('/api/users')}>api/users</button>
        <button onClick={() => getRequest('/api/roles')}>api/roles</button>
        <button onClick={() => getRequest('/api/login?name=gabe')}>api/login</button>
      </header>
    </div>
  );
}

export default App;
