import React, {Component} from 'react';
import logo from '../../logo.svg';
import UserService from '../../services/UserService';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getUsers() {
        UserService.getUsers()
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(err => {

            })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {
                    this.state.users.length <= 0 &&
                    <p>Loading</p>
                }
                {
                    this.state.users.forEach(user => {
                        console.log(user);
                    })
                }
            </div>
        );
    }
}

export default App;