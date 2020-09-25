import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});
// minha api: http://localhost:3001/api
// rocketseat api: https://rocketseat-node.herokuapp.com/api

export default api;