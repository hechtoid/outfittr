import { connect } from 'react-redux';
import { composePant } from '../../actions/pant_actions';
import { fetchUserPants } from '../../actions/pant_actions';
import AddPant from './add_pant';
import { openItemModal } from './../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    pants: Object.values(state.pants.user),
    newPant: state.pants.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composePant: data => dispatch(composePant(data)),
    fetchUserPants: id => dispatch(fetchUserPants(id)),
    openItemModal: (item, type) => dispatch(openItemModal(item, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPant);
