import React, {Component} from 'react';
import UserService from '../../services/UserService';
import './Users.css';
import UserCard from '../UserCard/UserCard';
import {connect} from 'react-redux';
import {setUsers} from '../../actions/users';

class Users extends Component {
    constructor(props) {
        super(props);

    }

    getUsers() {
        UserService.getUsers()
            .then(response => {
                this.props.setUsers(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <p className="App-intro">
                        Users List
                    </p>
                    {
                        this.props.users <= 0 &&
                        <p><i className="fa fa-spinner fa-spin spinner"></i></p>
                    }
                    {
                        <UserCard users={this.props.users}></UserCard>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.data.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);