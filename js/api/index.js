import axios from 'axios';

const SOUNDCLOUD_BASE   = 'https://api.soundcloud.com'
const CLIENT_ID         = '80bdab0ecb2b65b57e1629f1b65cb3f1'

export const search = query => axios.get('/tracks', {
  baseURL: SOUNDCLOUD_BASE,
  params: {
    client_id: CLIENT_ID,
    limit: 50,
    q: query,
  },
});

export const fetchUser = id => axios.get(`/users/${id}`, {
  baseURL: SOUNDCLOUD_BASE,
  params: { client_id: CLIENT_ID },
});
