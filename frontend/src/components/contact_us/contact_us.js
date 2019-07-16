import React from 'react';
import { connect } from 'react-redux';
import { closeContactModal } from './../../actions/ui_actions';
import './contactusmodal.css';


const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    contactUsModalOpen: state.ui.contactUsModalOpen,
})

const mdp = dispatch => {
    return {
        closeContactUsModal: () => dispatch(closeContactModal()),
    }
}

function ContactUsModal({ contactUsModalOpen, closeContactUsModal }) {
    if (contactUsModalOpen) {
        return (
            <div className="modal-background" onClick={closeContactUsModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-box">
                        <div className="modal-title">
                            <div className="modal-title-box">
                                Contact Us!
                            </div>
                            <div className="close-modal">
                                <button className="close-modal-button" onClick={closeContactUsModal}>X</button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="group-member">
                                <div id="Sam">
                                    
                                </div>
                            </div>
                            <div className="group-member">
                                <div id="Nick">

                                </div>
                            </div>
                            <div className="group-member">
                                <div id="Marshall">

                                </div>
                            </div>
                            <div className="group-member">
                                <div id="Ian">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}


export default connect(msp, mdp)(ContactUsModal);