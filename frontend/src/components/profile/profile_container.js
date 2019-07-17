import { connect } from 'react-redux';
import { fetchUserPants } from '../../actions/pant_actions';
import { fetchUserTops } from '../../actions/top_actions';
import { fetchUserOutfits } from '../../actions/outfit_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    tops: Object.values(state.tops.user),
    pants: Object.values(state.pants.user),
    outfits: Object.values(state.outfits.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPants: id => dispatch(fetchUserPants(id)),
    fetchUserTops: id => dispatch(fetchUserTops(id)),
    fetchUserOutfits: id => dispatch(fetchUserOutfits(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
