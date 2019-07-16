import { connect } from 'react-redux';
import { closeUserModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import UserModal from './user';

const msp = state => ({
    loggedIn: state.session.isAuthenticated
})

export default connect(msp, { logout, closeUserModal})(UserModal);