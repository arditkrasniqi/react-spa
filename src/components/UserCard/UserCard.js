import React, {Component} from 'react';
import './UserCard.css';
import {Link} from 'react-router-dom';

import Panel from 'react-bootstrap/lib/Panel';

class UserCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                {this.props.users.map(user => {
                        return <div className="col-md-4">
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">{user.login}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Panel content</Panel.Body>
                            </Panel>
                        </div>
                    })}
            </div>
        );
    }
}

export default UserCard;