export const ROOT = 'https://api.unsplash.com';
export const ENDPOINT = '/photos';
export const BASE_URL = ROOT + ENDPOINT;

export const list = (params = {}) => axios.get(BASE_URL, {params})

export const get = (id, params = {}) => axios.get(`${BASE_URL}/${id}`, {params})
