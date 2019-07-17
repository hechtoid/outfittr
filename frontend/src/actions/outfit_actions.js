import { getOutfits, getUserOutfits, writeOutfit } from '../util/outfit_api_util';

export const RECEIVE_OUTFITS = "RECEIVE_OUTFITS";
export const RECEIVE_USER_OUTFITS = "RECEIVE_USER_OUTFITS";
export const RECEIVE_NEW_OUTFIT = "RECEIVE_NEW_OUTFIT";

export const receiveOutfits = outfits => ({
  type: RECEIVE_OUTFITS,
  outfits
});

export const receiveUserOutfits = outfits => ({
  type: RECEIVE_USER_OUTFITS,
  outfits
});

export const receiveNewOutfit = outfit => ({
  type: RECEIVE_NEW_OUTFIT,
  outfit
})

export const fetchOutfits = () => dispatch => (
  getOutfits()
    .then(outfits => dispatch(receiveOutfits(outfits)))
    .catch(err => console.log(err))
);

export const fetchUserOutfits = id => dispatch => (
  getUserOutfits(id)
    .then(outfits => dispatch(receiveUserOutfits(outfits)))
    .catch(err => console.log(err))
);

export const composeOutfit = data => dispatch => (
  writeOutfit(data)
    .then(outfit => dispatch(receiveNewOutfit(outfit)))
    .catch(err => console.log(err))
);