import { connect } from 'react-redux';
import { fetchUserPants } from '../../actions/pant_actions';
import { fetchUserTops } from '../../actions/top_actions';
import { fetchUserOutfits } from '../../actions/outfit_actions';
import { openItemModal } from './../../actions/ui_actions';

import Outfits from './outfits';

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
        fetchUserOutfits: id => dispatch(fetchUserOutfits(id)),
        openItemModal: (item, type) => dispatch(openItemModal(item, type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Outfits);
