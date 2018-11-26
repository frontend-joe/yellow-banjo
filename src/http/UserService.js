export const ROOT = 'https://api.unsplash.com';
export const ENDPOINT = '/users';
export const BASE_URL = ROOT + ENDPOINT;

export const get = (username, params = {}) => axios.get(`${BASE_URL}/${username}`, {params})

export const listPhotos = (username, params = {}) => axios.get(`${BASE_URL}/${username}/photos`, {params})
