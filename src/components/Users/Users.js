import React, {Component} from 'react';
import UserService from '../../services/UserService';
import './Users.css';
import UserCard from '../UserCard/UserCard';
import {connect} from 'react-redux';
import {setUsers, setIndex} from '../../actions/users';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false
        }
    }

    getUsers(index) {
        this.setState({spinner:true});
        UserService.getUsers(index)
            .then(response => {
                const users = response.data;
                this.props.setUsers(users);
                this.props.setIndex(users[users.length - 1].id);
                this.setState({spinner:false});
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
                    <UserCard users={this.props.users}></UserCard>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            {
                                this.state.spinner &&
                                <p><i className="fa fa-spinner fa-spin spinner"></i></p>
                            }
                            {
                                !this.state.spinner &&
                                <Button className="load-more-btn" onClick={() => {this.getUsers(this.props.index)}}>Load More</Button>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.data.users,
        index: state.data.index
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setIndex: (index) => {
            dispatch(setIndex(index))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);