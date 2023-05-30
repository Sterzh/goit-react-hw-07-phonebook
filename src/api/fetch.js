import axios from 'axios';

axios.defaults.baseURL = 'https://647365b2d784bccb4a3c8dc6.mockapi.io/api/v1';

export const fetchContacts = () => {
  const response = axios.get('/contacts', { params: { sortBy: 'name' } });
  return response;
};

export const addContact = contact => {
  const response = axios.post('/contacts', contact, {
    params: { sortBy: 'name' },
  });
  return response;
};

export const deleteContact = id => {
  axios.delete(`/contacts/${id}`);
  return id;
};
