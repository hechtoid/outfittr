import React from 'react';
import { connect } from 'react-redux';
import { closeContactModal } from './../../actions/ui_actions';
import './contactusmodal.css';
import github from './GitHub-Mark-120px-plus.png';
import linkedin from './LI-In-Bug.png';

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
                            <div id="Sam">
                                <div className="group-member">
                                    <div className="names">Samuel Hecht</div>
                                    <div className="icons">
                                        <a href="https://github.com/hechtoid" ><img src={github} className="github" alt="githubicon"></img></a>
                                        <a href="" ><img src={linkedin} className="linkedin" alt="linkedin"></img></a>
                                    </div>
                                </div>
                            </div>
                            <div id="Nick">
                                <div className="group-member">
                                    <div className="names">Nicolas Piper</div>
                                    <div className="icons">
                                        <a href="https://github.com/nicolaspiper" ><img src={github} className="github" alt="githubicon"></img></a>
                                        <a href="https://www.linkedin.com/in/nicolaspiper/" ><img src={linkedin} className="linkedin" alt="linkedin"></img></a>
                                    </div>
                                </div>
                            </div>
                            <div id="Marshall">
                                <div className="group-member">
                                    <div className="names">Marshall Randolph</div>
                                    <div className="icons">
                                        <a href="https://github.com/Msheezi" ><img src={github} className="github" alt="githubicon"></img></a>
                                        <a href="https://www.linkedin.com/in/mrandolph/" ><img src={linkedin} className="linkedin" alt="linkedin"></img></a>
                                    </div>
                                </div>
                            </div>
                            <div id="Ian">
                                <div className="group-member">
                                    <div className="names">Ian Ellison</div>
                                    <div className="icons">
                                        <a href="https://github.com/ianellison87" ><img src={github} className="github" alt="githubicon"></img></a>
                                        <a href="" ><img src={linkedin} className="linkedin" alt="linkedin"></img></a>
                                    </div>
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