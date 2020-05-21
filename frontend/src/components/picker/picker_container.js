import { connect } from 'react-redux';
import { fetchUserTops } from '../../actions/top_actions';
import { fetchUserPants } from '../../actions/pant_actions';
import { composeOutfit, fetchUserOutfits } from '../../actions/outfit_actions'
import Picker from './picker';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    tops: Object.values(state.tops.user),
    pants: Object.values(state.pants.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPants: id => dispatch(fetchUserPants(id)),
    fetchUserTops: id => dispatch(fetchUserTops(id)),
    composeOutfit: data => dispatch(composeOutfit(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
