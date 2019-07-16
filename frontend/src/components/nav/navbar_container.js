import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openContactModal, openUserModal } from './../../actions/ui_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout, openContactModal, openUserModal }
)(NavBar);