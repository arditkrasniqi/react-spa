import React, {Component} from 'react';
import UserService from '../../services/UserService';
import './User.css';

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
            <h1>Hello World, {this.props.name}</h1>
        );
    }
}

export default User;