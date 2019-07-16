import React from 'react';
import { connect } from 'react-redux';
import { closeUserModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import './usermodal.css';


const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    userModalOpen: state.ui.userModalOpen,
})

const mdp = dispatch => {
    return {
        closeUserModal: () => dispatch(closeUserModal()),
        logout: () => {logout()(dispatch); closeUserModal()},
    }
}

function UserModal({ loggedIn, userModalOpen, closeUserModal, logout }) {
    if (!userModalOpen || !loggedIn) {
        closeUserModal()
        return null;
    } else { 
        return (
            <div className="modal-background" onClick={closeUserModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <button onClick={ logout }>logout</button>
                </div>
            </div>
        );
    }
}


export default connect(msp, mdp)(UserModal);