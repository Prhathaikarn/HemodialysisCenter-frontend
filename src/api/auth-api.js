import request from '../config/request';

export const register = (input) =>
  request.post('/auth/register', input).then((result) => result.data);
export const login = (input) =>
  request.post('/auth/login', input).then((result) => result.data);
export const fetchMe = () => request.get('/auth/me');
