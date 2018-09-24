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
import {connect} from 'react-redux';
import {setUser} from "../../actions/users";

class User extends Component {
    constructor(props) {
        super(props);
        this.username = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    }

    getUser() {
        UserService.getUser(this.username)
            .then(response => {
                this.props.setUser(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.props.setUser(false);
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
                        this.props.user &&
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Thumbnail src={this.props.user.avatar_url} alt="242x200">
                                        <h3>{this.props.user.login}</h3>
                                        <Row className="text-left">
                                            <Col xs={12}>
                                                <p><strong>ID</strong>: {this.props.user.id}</p>
                                                <p><strong>Avatar</strong>: <a target="_blank" href={this.props.user.avatar_url}>{this.props.user.avatar_url}</a></p>
                                                <p><strong>Login</strong>: {this.props.user.login}</p>
                                                <p><strong>GitHub URL</strong>: <a target="_blank" href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                                            </Col>
                                        </Row>
                                    </Thumbnail>
                                </Col>
                            </Row>
                        </Grid>
                    }
                    {
                        !this.props.user &&
                        <p>
                            <i className="fa fa-spinner fa-spin spinner"></i>
                        </p>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.data.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch(setUser(user));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);