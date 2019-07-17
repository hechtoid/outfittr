import axios from 'axios';

export const getOutfits = () => {
  return axios.get('/api/outfits')
};

export const getUserOutfits = id => {
  return axios.get(`/api/outfits/user/${id}`)
};

export const writeOutfit = data => {
  return axios.post('/api/outfits/', data)
}