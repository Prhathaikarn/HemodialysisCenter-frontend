import request from '../config/request';

export const addPatient = (input) =>
  request.post('/patient/addpatient', input).then((result) => result.data);

export const getAllPatient = () =>
  request.get('/patient/getallpatient').then((result) => result.data);

export const getPatientById = (hnId) =>
  request.get(`/patient/getpatientbyid/${hnId}`);

export const updatePatientById = (hnId, input) =>
  request.put(`/patient/updatepatientbyid/${hnId}`, input);

export const searchPatient = (input) =>
  request.post('/patient/searchpatient/', input);

export const deletePatient = (hnId) =>
  request.delete(`/patient/deletepatient/${hnId}`);
