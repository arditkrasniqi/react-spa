import React from 'react';
import './App.css';
import Routes from '../../routes';
import logo from "../../logo.svg";

export default () => (
    <div className="App">
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            <h1 className="App-title">GitHub Users</h1>
        </header>
        <Routes />
    </div>
)