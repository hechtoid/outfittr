import { connect } from 'react-redux';
import { fetchUserPants } from '../../actions/pant_actions';
import { fetchUserTops } from '../../actions/top_actions';
import { openItemModal } from './../../actions/ui_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    tops: Object.values(state.tops.user),
    pants: Object.values(state.pants.user),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPants: id => dispatch(fetchUserPants(id)),
    fetchUserTops: id => dispatch(fetchUserTops(id)),
    openItemModal: (item, type) => dispatch(openItemModal(item, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
