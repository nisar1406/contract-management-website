import axios from 'axios';

export const fetchApi = ({ apiUrl, apiMethod = 'GET', payload = null, flag = false, token }) => {
  const API_URL = 'https://contract-management-node-api.herokuapp.com';
  const endPoint = `${API_URL}${apiUrl}`;
  const header = flag
    ? {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.origin,
      Authorization: `bearer ${token}`
    }
    : {
      'Access-Control-Allow-Origin': window.location.origin,
      'Content-Type': 'application/json'
    };

  return axios({
    url: endPoint,
    method: apiMethod,
    header: header,
    data: payload
  });
};
