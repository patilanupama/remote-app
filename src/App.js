import * as React from 'react';
import Home from './Home/home';
// import "../styles.css";

export default function App({ getHeaders }) {
  console.log(getHeaders,"getHeadersgetHeaders")
  return (
    <div className="MicroApp">
      {/* <h1>Micro App</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" /> */}
      <h1>Welcome in remote application</h1>
      <Home getHeaders={getHeaders}/>
    </div>
  );
}
