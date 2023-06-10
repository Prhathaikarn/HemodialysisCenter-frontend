import request from '../config/request';

export const addPatient = (input) =>
  request.post('/patient/addpatient', input).then((result) => result.data);

export const getAllPatient = () =>
  request.get('/patient/getallpatient').then((result) => result.data);
