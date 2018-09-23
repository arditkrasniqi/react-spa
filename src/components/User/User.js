import React, {Component} from 'react';
import UserService from '../../services/UserService';
import './User.css';
import {Link} from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <Link to="/">Users</Link>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default User;