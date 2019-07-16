import { connect } from 'react-redux';
import { closeUserModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import UserModal from './user';

const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    userModalOpen: state.ui.userModalOpen,
})

const mdp = dispatch => {
    return {
        closeUserModal: () => dispatch(closeUserModal()),
        logout: () => dispatch(logout()),
    }
}

export default connect(msp, mdp)(UserModal);