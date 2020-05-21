import { connect } from 'react-redux';
import { fetchUserOutfits } from '../../actions/outfit_actions';
import { openItemModal } from '../../actions/ui_actions';

import Outfits from './outfits';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        outfits: Object.values(state.outfits.user)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserOutfits: id => dispatch(fetchUserOutfits(id)),
        openItemModal: (item, type) => dispatch(openItemModal(item, type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Outfits);
