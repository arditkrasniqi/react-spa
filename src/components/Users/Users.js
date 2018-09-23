import React, {Component} from 'react';
import logo from '../../logo.svg';
import UserService from '../../services/UserService';
import './Users.css';
import UserCard from '../UserCard/UserCard';

class Users extends Component {
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
                console.log(err);
            })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.users.length <= 0 &&
                    <p>Loading</p>
                }
                {
                    <UserCard users={this.state.users}></UserCard>
                }
            </div>
        );
    }
}

export default Users;