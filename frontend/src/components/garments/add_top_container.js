import { connect } from 'react-redux';
import { composeTop } from '../../actions/top_actions';
import { fetchUserTops } from '../../actions/top_actions';
import AddTop from './add_top';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    tops: Object.values(state.tops.user),
    newTop: state.tops.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTop: data => dispatch(composeTop(data)),
    fetchUserTops: id => dispatch(fetchUserTops(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTop);
