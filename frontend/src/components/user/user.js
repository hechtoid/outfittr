import React from 'react';
import UserContainer from './user_container';


class UserModal extends React.Component {

    constructor (props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        return(
        <div className="modal">
            <button onClick={this.logoutUser} value="logout"></button>
        </div>
        )
    }

}

export default UserModal;