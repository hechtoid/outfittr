import React from 'react';
import { connect } from 'react-redux';
import { closeItemModal } from './../../actions/ui_actions';
import './item_modal.css';
import ShowItemBox from './show_item'

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
                    <div className="item-modal-box">
                        <div className="modal-title">
                            <div className="modal-title-box">
                                {itemModal.data.name}
                            </div>
                            <div className="modal-date-box">
                               added { (new Date(itemModal.data.date)).toLocaleDateString()}
                            </div>
                            <div className="close-modal">
                                <button className="close-modal-button" onClick={closeItemModal}>X</button>
                            </div>
                        </div>
                        <div className="item-modal-image">
                            <ShowItemBox 
                                name={`${itemModal.data.name}`}
                                color={itemModal.data.color}
                                type={itemModal.clothingtype}
                                item={itemModal.data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}


export default connect(msp, mdp)(ShowItemModal);