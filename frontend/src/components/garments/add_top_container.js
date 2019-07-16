import { connect } from 'react-redux';
import { composeTop } from '../../actions/top_actions';
import AddTop from './add_top';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newTop: state.tops.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTop: data => dispatch(composeTop(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTop);
