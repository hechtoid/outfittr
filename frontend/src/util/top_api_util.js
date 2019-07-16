import axios from 'axios';

export const getTops = () => {
  return axios.get('/api/tops')
};

export const getUserTops = id => {
  return axios.get(`/api/tops/user/${id}`)
};

export const writeTop = data => {
  return axios.post('/api/tops/', data)
}