import axios from 'axios';

// export const getPants = () => {
//   return axios.get('/api/pants')
// };

export const getUserPants = id => {
  return axios.get(`/api/pants/user/${id}`)
};

export const writePant = data => {
  return axios.post('/api/pants/', data)
}