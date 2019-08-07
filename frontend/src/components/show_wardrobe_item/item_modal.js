import React from 'react';
import { connect } from 'react-redux';
import { closeItemModal } from './../../actions/ui_actions';
import './item_modal.css';


const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    itemModal: state.ui.itemModal,
})

const mdp = dispatch => {
    return {
        closeItemModal: () => dispatch(closeItemModal()),
    }
}

function ShowItemModal({ itemModal, closeItemModal }) {
    if (itemModal.data){    
        return (
            <div className="modal-background" onClick={closeItemModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-box">
                        <div className="modal-title">
                            <div className="modal-title-box">
                                {itemModal.data.name}
                            </div>
                            <div className="close-modal">
                                <button className="close-modal-button" onClick={closeItemModal}>X</button>
                            </div>
                        </div>
                        <div className="modal-body-logout">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}


export default connect(msp, mdp)(ShowItemModal);