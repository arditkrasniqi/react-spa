import React, {Component} from 'react';
import './UserCard.css';
import {Link} from 'react-router-dom';

import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap';

class UserCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                {this.props.users.map(user => {
                        return <div className="col-md-4">
                            <Grid>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <Thumbnail src={user.avatar_url} alt="242x200">
                                            <h3>{user.login}</h3>
                                            <p>
                                                <Link to={`/user/${user.login}`}><Button bsStyle="primary">View profile</Button></Link>
                                            </p>
                                        </Thumbnail>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    })}
            </div>
        );
    }
}

export default UserCard;