export const CLOSE_CONTACT_MODAL = "CLOSE_CONTACT_MODAL";
export const OPEN_CONTACT_MODAL = "OPEN_CONTACT_MODAL";
export const CLOSE_USER_MODAL = "CLOSE_USER_MODAL";
export const OPEN_USER_MODAL = "OPEN_USER_MODAL";

export const openContactModal = () => ({
    type: OPEN_CONTACT_MODAL,
})

export const closeContactModal = () => ({
    type: CLOSE_CONTACT_MODAL,
})

export const openUserModal = () => ({
    type: OPEN_USER_MODAL,
})

export const closeUserModal = () => ({
    type: CLOSE_USER_MODAL,
})