import React, {
    Component
} from 'react';
import UserService from '../../services/UserService';
import './User.css';
import {
    Link
} from "react-router-dom";
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.username = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.state = {
            user: false
        }
    }

    getUser() {
        UserService.getUser(this.username)
            .then(response => {
                this.setState({ user: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Grid>
                        <Row>
                            <Col xs={12} className="text-left">
                                <Link to="/"> <Button><i className="fa fa-arrow-left"></i> Back</Button></Link>
                            </Col>
                        </Row>
                    </Grid>
                    <br />
                    {
                        this.state.user &&
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Thumbnail src={this.state.user.avatar_url} alt="242x200">
                                        <h3>{this.state.user.login}</h3>
                                        <Row className="text-left">
                                            <Col xs={12}>
                                                <p><strong>ID</strong>: {this.state.user.id}</p>
                                                <p><strong>Avatar</strong>: {this.state.user.avatar_url}</p>
                                                <p><strong>Login</strong>: {this.state.user.login}</p>
                                                <p><strong>GitHub URL</strong>: {this.state.user.html_url}</p>
                                            </Col>
                                        </Row>
                                    </Thumbnail>
                                </Col>
                            </Row>
                        </Grid>
                    }
                    {
                        !this.state.user &&
                        <p>
                            <i className="fa fa-spinner fa-spin spinner"></i>
                        </p>
                    }
                </div>
            </div>
        );
    }
}

export default User;