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
                <div className="container">
                    <p className="App-intro">
                        Users List
                    </p>
                    {
                        this.state.users.length <= 0 &&
                        <p><i className="fa fa-spinner fa-spin spinner"></i></p>
                    }
                    {
                        <UserCard users={this.state.users}></UserCard>
                    }
                </div>
            </div>
        );
    }
}

export default Users;