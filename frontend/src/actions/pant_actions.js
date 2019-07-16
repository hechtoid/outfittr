import { getPants, getUserPants, writePant } from '../util/pant_api_util';

export const RECEIVE_PANTS = "RECEIVE_PANTS";
export const RECEIVE_USER_PANTS = "RECEIVE_USER_PANTS";
export const RECEIVE_NEW_PANT = "RECEIVE_NEW_PANT";

export const receivePants = pants => ({
  type: RECEIVE_PANTS,
  pants
});

export const receiveUserPants = pants => ({
  type: RECEIVE_USER_PANTS,
  pants
});

export const receiveNewPant = pant => ({
  type: RECEIVE_NEW_PANT,
  pant
})

export const fetchPants = () => dispatch => (
  getPants()
    .then(pants => dispatch(receivePants(pants)))
    .catch(err => console.log(err))
);

export const fetchUserPants = id => dispatch => (
  getUserPants(id)
    .then(pants => dispatch(receiveUserPants(pants)))
    .catch(err => console.log(err))
);

export const composePant = data => dispatch => (
  writePant(data)
    .then(pant => dispatch(receiveNewPant(pant)))
    .catch(err => console.log(err))
);