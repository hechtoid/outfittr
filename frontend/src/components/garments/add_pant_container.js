import { connect } from 'react-redux';
import { composePant } from '../../actions/pant_actions';
import AddPant from './add_pant';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newPant: state.pants.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composePant: data => dispatch(composePant(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPant);
