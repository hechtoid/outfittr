// import React from 'react';

// class ContactUsModal extends React.Component {

//     constructor(props) {
//         super(props)
//         this.logoutUser = this.logoutUser.bind(this);
//         this.showModal = this.showModal.bind(this);
//         this.switchModal = this.showModal.bind(this);
//     }

//     componentWillUnmount() {
//         this.props.closeUserModal();
//     }

//     switchModal() {
//         console.log(this.props.openUserModal)
//         if (this.props.openUserModal) {
//             return (this.showModal())
//         }
//         return (<div></div>)
//     }

//     logoutUser(e) {
//         e.preventDefault();
//         this.props.closeUserModal();
//         this.props.logout();
//     }

//     showModal() {
//         return (
//             <button onClick={this.logoutUser}>logout</button>
//         )
//     }

//     render() {
//         return (
//             <div className="modal">
//                 {this.switchModal()}
//             </div>
//         )
//     }

// }

// export default ContactUsModal;